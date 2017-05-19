// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_files': {
        'Java': 'grammars-v4/clojure/Clojure.g4',
        'TypeScript': 'grammars-v4/clojure/Clojure.g4',
    },
    'tree_matcher_specs': require('./clojure.tree_matcher_specs.js'),
};
