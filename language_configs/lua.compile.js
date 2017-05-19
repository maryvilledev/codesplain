// Configuration that can only be read by the compiler.

module.exports = {
	'grammar_files': {
        'Java': 'grammars-v4/lua/Lua.g4',
        'TypeScript': 'grammars-v4/lua/Lua.g4',
    },
    'tree_matcher_specs': require('./lua.tree_matcher_specs.js'),
};
