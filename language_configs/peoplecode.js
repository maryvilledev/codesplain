let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'PeopleCode',
    'grammar_file': 'PeopleCode.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'stmtList': {
            'finalizers': [
                collapse
            ]
        },
        'stmt': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'exprList': {
            'finalizers': [
                collapse
            ]
        },
        'varDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'varDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'varType': {
            'finalizers': [
                collapse
            ]
        },
        'appClassImport': {
            'finalizers': [
                collapse
            ]
        },
        'appPkgPath': {
            'finalizers': [
                collapse
            ]
        },
        'appClassPath': {
            'finalizers': [
                collapse
            ]
        },
        'extFuncImport': {
            'finalizers': [
                collapse
            ]
        },
        'recDefnPath': {
            'finalizers': [
                collapse
            ]
        },
        'event': {
            'finalizers': [
                collapse
            ]
        },
        'classDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'classBlock': {
            'finalizers': [
                collapse
            ]
        },
        'classBlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'method': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        },
        'property': {
            'finalizers': [
                collapse
            ]
        },
        'instance': {
            'finalizers': [
                collapse
            ]
        },
        'methodImpl': {
            'finalizers': [
                collapse
            ]
        },
        'getImpl': {
            'finalizers': [
                collapse
            ]
        },
        'setImpl': {
            'finalizers': [
                collapse
            ]
        },
        'funcImpl': {
            'finalizers': [
                collapse
            ]
        },
        'funcSignature': {
            'finalizers': [
                collapse
            ]
        },
        'formalParamList': {
            'finalizers': [
                collapse
            ]
        },
        'param': {
            'finalizers': [
                collapse
            ]
        },
        'returnType': {
            'finalizers': [
                collapse
            ]
        },
        'ifStmt': {
            'finalizers': [
                collapse
            ]
        },
        'forStmt': {
            'finalizers': [
                collapse
            ]
        },
        'whileStmt': {
            'finalizers': [
                collapse
            ]
        },
        'evaluateStmt': {
            'finalizers': [
                collapse
            ]
        },
        'whenBranch': {
            'finalizers': [
                collapse
            ]
        },
        'whenOtherBranch': {
            'finalizers': [
                collapse
            ]
        },
        'tryCatchStmt': {
            'finalizers': [
                collapse
            ]
        },
        'catchSignature': {
            'finalizers': [
                collapse
            ]
        },
        'createInvocation': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'id': {
            'finalizers': [
                collapse
            ]
        }
    }
};
