// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_files': {
        'Java': 'grammars-v4/java/Java.g4',
        'TypeScript': 'grammars-v4/java/Java.g4',
    },
    'tree_matcher_specs': require('./java.tree_matcher_specs.js'),
};
