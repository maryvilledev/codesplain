# CodeSplain

##### [Awesome tagline here]

### Installation
```sh
git clone https://github.com/maryvilledev/codesplain.git
cd codesplain
npm install

# To build everything (will probably crash your computer):
# ./node_modules/.bin/webpack

# To build just python3:
./node_modules/.bin/webpack --env.langs=python3

# To build minified:
./node_modules/.bin/webpack --env.langs=python3 --env.optimize=1
```
After this, all of the compiled parsers are in `public/langs/`

### Code structure
* `_cache` - Contains the generated lexers and parsers from antlr.
* `antlr/` - The antlr repository. See "Why no NPM install antlr4?" below.
* `app/` - Contains most of the core code that's common to every language.
* `app/compile.js` - Generates a javascript lexer and parser from the antlr grammar, using the antlr compiler. These are stored into `_cache`. If they already exist, they will not be re-generated and this file is basically a no-op. It also validates the language config, checking that the `rules` object's keys matches the generated parser's `ruleNames` array.
* `app/error_listener.js` - Basic error listener, that currently just calls a callback.
* `app/finalizers.js` - Collection (currently, 1) of functions that can be applied to specific node types (see language config files), which transform an AST.
* `app/runtime.js` - Exports a function that takes code as input, streams it through the lexer and parser, transforms the resulting tree using the language config's finalizers, and returns the result.
* `bin/` - Stores binaries, currently just the antlr compiler.
* `config.js` - Codesplain configuration options.
* `gen_lang_configs.js` - Very very hacky script that compiles each language grammar and creates a language config file that uses the result. These can be used to generate parsers for each language. The language configs that are produced should not be used to create any production parsers without first applying finalizers to each node (which is a necessarily manual process).
* `grammars-v4/` - Contains the `.g4` grammars for a lot of languages.
* `install.sh` - Called by npm's postinstall hook (look in `package.json`). Clones submodules (`antlr4` and `grammars-v4`), downloads the antlr compiler to `bin/`, runs `npm install` on the `antlr4` repo, links the library so it can be required, and makes the `_cache` dir.
* `language_configs/` - Contains language configurations. See "Language configurations" below.
* `package.json` - NPM config file.
* `public/` - Everything in here can be published.
* `public/index.html` - Simple testing script for the generated parsers.
* `public/langs/*.js` - Compiled, unminified parsers (from `app/runtime.js`).
* `public/langs/*.min.js` - Compiled, minified parsers (from `app/runtime.js`).
* `webpack.config.js` - Kicks everything off. Calls `app/compiler.js`, then packs `app/runtime.js` and all of it's dependencies into the resulting parsers.

### Why no NPM install antlr4?
Antlr publishes their javascript runtime as a npm module, but it is not up-to-date with master, which contains some bugfixes (https://github.com/antlr/antlr4/pull/1599). The solution was came up with is to clone antlr as a submodule and use `npm link` to install the local version.

### Language configurations
Each language has a configuration located in `language_configs/`. It's a node module that exports an object, which contains:
* `langugage` - String which should correspond to the `grammar *;` statement in the `.g4` file. Making this string lowercase should give the directory inside `grammars-v4/` containing the `.g4` file.
* `grammar_file` - The name of the `.g4` grammar file.
* `entry_rule` - The rule that should match the entire input code. Typically, this is the first rule in the grammar file, but there could be multiple entry rules for different circumstances. For example, python3 has 3 entry rules, one for parsing statements entered in the REPL, one for file parsing, and one for eval expression parsing. We use the file parsing entry rule.
* `rules` - Map of stuff to do for each rule type. Currently, just a list of finalizers. In the future, it'll contain documentation information or syntaxdb links.

### Finalizers
Finalizers are meant to transform a node into a more meaningful or useful node. A finalizer runs after all of its children's finalizers have run. Currently, the only finalizer is `collapse`, which replaces a node with its child if two conditions are met:

1. The node has only one child
2. The node's character range (node.begin, node.end) is exactly the same as the child's character range.

Applying this finalizer to all node types makes a nice AST. However, some nodes such as expr are reduced to just an integer, losing a lot of the context information around that node. Thus, the `collapse` finalizer should not be present on nodes which we always want to see in the AST.

![Codesplain diagram](diagram.png)
