// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_files': {
        'Java': 'Java8.g4',
        'JavaScript': 'Java8.JavaScriptTarget.g4',
    },
    'needs_java_func_data': true,
    'tree_matcher_specs': require('./java8.tree_matcher_specs.js'),
};
