// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_file': 'Python3.JavaScriptTarget.g4',
    'require_java_functions': ['Character_isJavaIdentifierStart', 'Character_isJavaIdentifierPart'],
    'tree_matcher_specs': require('./python3.tree_matcher_specs.js'),
};
