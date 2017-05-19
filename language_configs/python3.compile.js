// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_files': {
        'Java': 'grammars-v4/python3/Python3.g4',
        'TypeScript': 'grammars-v4/python3/Python3.TypeScriptTarget.g4',
    },
    'tree_matcher_specs': require('./python3.tree_matcher_specs.js'),
};
