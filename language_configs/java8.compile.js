// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_files': {
        'Java': 'grammars-v4/java8/Java8.g4',
        'TypeScript': 'grammars-v4/java8/Java8.TypeScriptTarget.g4',
    },
    'needs_java_func_data': true,
    'tree_matcher_specs': require('./java8.tree_matcher_specs.js'),
};
