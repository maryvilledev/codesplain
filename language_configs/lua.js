let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Lua',
    'grammar_file': 'Lua.g4',
    'entry_rule': 'chunk',
    'rules': {
        'chunk': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'stat': {
            'finalizers': [
                collapse
            ]
        },
        'retstat': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
            'finalizers': [
                collapse
            ]
        },
        'funcname': {
            'finalizers': [
                collapse
            ]
        },
        'varlist': {
            'finalizers': [
                collapse
            ]
        },
        'namelist': {
            'finalizers': [
                collapse
            ]
        },
        'explist': {
            'finalizers': [
                collapse
            ]
        },
        'exp': {
            'finalizers': [
                collapse
            ]
        },
        'prefixexp': {
            'finalizers': [
                collapse
            ]
        },
        'functioncall': {
            'finalizers': [
                collapse
            ]
        },
        'varOrExp': {
            'finalizers': [
                collapse
            ]
        },
        'var': {
            'finalizers': [
                collapse
            ]
        },
        'varSuffix': {
            'finalizers': [
                collapse
            ]
        },
        'nameAndArgs': {
            'finalizers': [
                collapse
            ]
        },
        'args': {
            'finalizers': [
                collapse
            ]
        },
        'functiondef': {
            'finalizers': [
                collapse
            ]
        },
        'funcbody': {
            'finalizers': [
                collapse
            ]
        },
        'parlist': {
            'finalizers': [
                collapse
            ]
        },
        'tableconstructor': {
            'finalizers': [
                collapse
            ]
        },
        'fieldlist': {
            'finalizers': [
                collapse
            ]
        },
        'field': {
            'finalizers': [
                collapse
            ]
        },
        'fieldsep': {
            'finalizers': [
                collapse
            ]
        },
        'operatorOr': {
            'finalizers': [
                collapse
            ]
        },
        'operatorAnd': {
            'finalizers': [
                collapse
            ]
        },
        'operatorComparison': {
            'finalizers': [
                collapse
            ]
        },
        'operatorStrcat': {
            'finalizers': [
                collapse
            ]
        },
        'operatorAddSub': {
            'finalizers': [
                collapse
            ]
        },
        'operatorMulDivMod': {
            'finalizers': [
                collapse
            ]
        },
        'operatorBitwise': {
            'finalizers': [
                collapse
            ]
        },
        'operatorUnary': {
            'finalizers': [
                collapse
            ]
        },
        'operatorPower': {
            'finalizers': [
                collapse
            ]
        },
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        }
    }
};
