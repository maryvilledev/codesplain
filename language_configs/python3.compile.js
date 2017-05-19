// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_files': {
        'Java': 'Python3.g4',
        'JavaScript': 'Python3.JavaScriptTarget.g4',
    },
    'tree_matcher_specs': require('./python3.tree_matcher_specs.js'),
};
