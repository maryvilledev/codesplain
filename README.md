# CodeSplain [![CircleCI](https://circleci.com/gh/maryvilledev/codesplain.svg?style=svg)](https://circleci.com/gh/maryvilledev/codesplain)

##### [Awesome tagline here]

### Installation
```sh
git clone https://github.com/maryvilledev/codesplain.git
cd codesplain
npm install

# To rebuild everything after making code changes, you need to clear the cache:
rm -rf _cache/treematcher/ _cache/python3/

# Build command:
./make
```
After this, all of the compiled parsers are in `public/langs/`

### Code structure
* `_cache` - Contains the generated lexers and parsers from antlr.
* `antlr/` - The antlr repository. See "Why no NPM install antlr4?" below.
* `app/` - Contains most of the core code that's common to every language.
* `app/compile.js` - Generates a javascript lexer and parser from the antlr grammar, using the antlr compiler. These are stored into `_cache`. If they already exist, they will not be re-generated and this file is basically a no-op. It also validates the language config, checking that the `rules` object's keys matches the generated parser's `ruleNames` array.
* `app/error_listener.js` - Basic error listener, that currently just calls a callback.
* `app/runtime.js` - Exports a function that takes code as input, streams it through the lexer and parser, transforms the resulting tree using the language config's finalizers, and returns the result.
* `app/transformers.js` - Collection of functions that can be applied to recursively transform an AST. See the Transformers heading below.
* `app/transformers/*` - Each transformer. See the Transformers heading below.
* `app/tree_matcher.js` - Takes a tree matcher specification pattern, and generates a javascript function that matches those nodes.
* `app/type_graph_generator.js` - In progress. Will be used to generate much faster tree builders.
* `bin/` - Stores binaries, currently just the antlr compiler.
* `circle.yml` - Circle CI config file.
* `config.js` - Codesplain configuration options.
* `gen_lang_configs.js` - Very very hacky script that compiles each language grammar and creates a language config file that uses the result. These can be used to generate parsers for each language. The language configs that are produced should not be used to create any production parsers without first applying finalizers to each node (which is a necessarily manual process).
* `grammars-v4/` - Contains the `.g4` grammars for a lot of languages.
* `install` - Called by npm's postinstall hook (look in `package.json`). Clones submodules (`antlr4` and `grammars-v4`), downloads the antlr compiler to `bin/`, runs `npm install` on the `antlr4` repo, links the library so it can be required, and makes the `_cache` dir.
* `language_configs/` - Contains language configurations. See "Language configurations" below.
* `package.json` - NPM config file.
* `public/` - Everything in here can be published.
* `public/index.html` - Simple testing script for the generated parsers.
* `public/langs/*.js` - Compiled, unminified parsers (from `app/runtime.js`).
* `public/langs/*.min.js` - Compiled, minified parsers (from `app/runtime.js`).
* `publish` - Script that compiles and publishes the generated parsers to AWS S3.
* `webpack.config.js` - Kicks everything off. Calls `app/compiler.js`, then packs `app/runtime.js` and all of it's dependencies into the resulting parsers.

### Why no NPM install antlr4?
Antlr publishes their javascript runtime as a npm module, but it is not up-to-date with master, which contains some bugfixes (https://github.com/antlr/antlr4/pull/1599). The solution was to clone antlr as a submodule and use `npm link` to install the local version.

### Language configurations
Each language has two configuration files located in `language_configs/`. There's a compile config file and a runtime config file. Currently, the python3 compile config includes a tree_matcher_specs config file and the runtime config includes a rules config file, but those could just as easily have been inserted directly into the compile/runtime config. The compile config is not included in the generated parser, and as such, is not accessible by the runtime. It has two options:
* `grammar_file` - The name of the `.g4` grammar file. See the runtime config `language` option for details on where this file is located.
* `tree_matcher_specs` - This is an array that holds each tree matcher specification. These will be compiled by `app/tree_matcher.js` into a javascript function which is used by the runtime. See the Tree matcher specifications heading below for more information.

The runtime config is used by both the compilation stage and the runtime. It has these options:
* `langugage` - String which should correspond to the `grammar *;` statement in the `.g4` file. Making this string lowercase should give the directory inside `grammars-v4/` containing the `.g4` file.
* `entry_rule` - The rule that should match the entire input code. Typically, this is the first rule in the grammar file, but there could be multiple entry rules for different circumstances. For example, python3 has 3 entry rules, one for parsing statements entered in the REPL, one for file parsing, and one for eval expression parsing. We use the file parsing entry rule.
* `rules` - Map of configurations for each rule. Currently, there's only one available option, `collapse`, which is a boolean read by the collapse transformer. See the `app/transformers/collapse.js` transformer below for more information.

### Transformers
Transformers are meant to remove unused or redundant data from a tree, or add extra data. Each transformer is run on the root node in a sequence defined in `app/transformers.js`. Currently, there are three transformers:
1. `app/transformers/simplify_node.js` - Takes a tree generated by antlr, with lots and lots of data on each node, and returns a tree where each node is an object with approx. 5 properties. For example, the transformed tree has a rule type string instead of a symbol index (for terminals) or production index (for non-terminals). These are the properties on all nodes:
    * `ast_type` - The type of the node, directly from the language grammar. This is guaranteed to be the key of an item of the `rules` property of the language runtime config. For terminals, this will be the terminal name prepended with a dot (like `.TRUE`). For non-terminals, this will be the production left hand side. This is meant to be used mostly by the parser, and the `tags` property by the UI.
    * `tags` - An array of strings that describe this node. This is meant to be used by the UI for highlighting. It always begins with the `ast_type`, and will include additional specializations from tree matchers.
    * `begin` - The character index of the beginning of the text of this node.
    * `end` - The character index of the end of the text of this node.
    * `detail` - An array that holds additional details about the node. Each detail entry is an object meant to be consumed by a function corresponding to the `handler` item.
    * `children` - An array of child nodes.
2. `app/transformers/run_tree_matchers.js` - Runs the language's tree matcher for each node in the tree. The tree matcher typically adds tags when nodes are matched. See the Tree matcher specifications header below for further information.
3. `app/transformers/collapse.js` - Collapses nodes that are pretty much equivalent to their child. If a node's type config has the `collapse` property set and the node has only one child and the node's `begin` and `end` are exactly the same as the child node's, the node will be replaced with the child. This transformer removes long chains of nodes with only one child.

### Tree matcher specifications
The tree matcher pattern specifies which nodes to match and which to ignore. The syntax is defined in `app/tree_matcher_parser/TreeMatcher.g4`, and is pretty simple. Each node expression must either start with a node type or `?`, which matches all types. After that, there are a few modifiers that can further constrain which nodes are matched or do additional actions:
* `:js_var` - If the tree ends up being matched and the actor is run, this node will be stored into this javascript variable. Tags can be applied or properties accessed from there. Note that the root node will always be available to the actor in the `root` javascript variable.
* `=text` or `="text in a json string"` - Check that the current node's text matches this value.
* `?"an arbitrary js condition using the node var"` - Check that the supplied javascript returns a truthy value. The current node is available in the `node` javascript variable.
* `[expr1, expr2, ...]` - Matches any number of children. The number of children must match what's given and each child must match the expression given.
* `expr` - Matches a single child. There must be exactly one child and it must match the expression given.

In addition, more than one expression can be given, separated by `|`. In this case, only one of the expressions has to match the current node. Finally, an expression may be preceded by `/`, which causes the search to descend through single-child nodes to find a match.

**Examples:**
* `function_call [.LEFT_PAREN, ?:argument, .RIGHT_PAREN]` - Matches a `function_call` node with 3 children. The first child must be a `.LEFT_PAREN`, the second can be anything, and the third must be a `.RIGHT_PAREN`. If the match succeeds, the actor is run with the second child available in the `argument` variable.

![Codesplain diagram](diagram.png)
Diagram at https://www.draw.io/#LCodeSplain%20Compilation%20Process
