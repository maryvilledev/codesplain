let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Erlang',
    'grammar_file': 'Erlang.g4',
    'entry_rule': 'forms',
    'rules': {
        'forms': {
            'finalizers': [
                collapse
            ]
        },
        'form': {
            'finalizers': [
                collapse
            ]
        },
        'tokAtom': {
            'finalizers': [
                collapse
            ]
        },
        'tokVar': {
            'finalizers': [
                collapse
            ]
        },
        'tokFloat': {
            'finalizers': [
                collapse
            ]
        },
        'tokInteger': {
            'finalizers': [
                collapse
            ]
        },
        'tokChar': {
            'finalizers': [
                collapse
            ]
        },
        'tokString': {
            'finalizers': [
                collapse
            ]
        },
        'attribute': {
            'finalizers': [
                collapse
            ]
        },
        'typeSpec': {
            'finalizers': [
                collapse
            ]
        },
        'specFun': {
            'finalizers': [
                collapse
            ]
        },
        'typedAttrVal': {
            'finalizers': [
                collapse
            ]
        },
        'typedRecordFields': {
            'finalizers': [
                collapse
            ]
        },
        'typedExprs': {
            'finalizers': [
                collapse
            ]
        },
        'typedExpr': {
            'finalizers': [
                collapse
            ]
        },
        'typeSigs': {
            'finalizers': [
                collapse
            ]
        },
        'typeSig': {
            'finalizers': [
                collapse
            ]
        },
        'typeGuards': {
            'finalizers': [
                collapse
            ]
        },
        'typeGuard': {
            'finalizers': [
                collapse
            ]
        },
        'topTypes': {
            'finalizers': [
                collapse
            ]
        },
        'topType': {
            'finalizers': [
                collapse
            ]
        },
        'topType100': {
            'finalizers': [
                collapse
            ]
        },
        'type200': {
            'finalizers': [
                collapse
            ]
        },
        'type300': {
            'finalizers': [
                collapse
            ]
        },
        'type400': {
            'finalizers': [
                collapse
            ]
        },
        'type500': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'funType100': {
            'finalizers': [
                collapse
            ]
        },
        'funType': {
            'finalizers': [
                collapse
            ]
        },
        'fieldTypes': {
            'finalizers': [
                collapse
            ]
        },
        'fieldType': {
            'finalizers': [
                collapse
            ]
        },
        'binaryType': {
            'finalizers': [
                collapse
            ]
        },
        'binBaseType': {
            'finalizers': [
                collapse
            ]
        },
        'binUnitType': {
            'finalizers': [
                collapse
            ]
        },
        'attrVal': {
            'finalizers': [
                collapse
            ]
        },
        'function': {
            'finalizers': [
                collapse
            ]
        },
        'functionClause': {
            'finalizers': [
                collapse
            ]
        },
        'clauseArgs': {
            'finalizers': [
                collapse
            ]
        },
        'clauseGuard': {
            'finalizers': [
                collapse
            ]
        },
        'clauseBody': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'expr100': {
            'finalizers': [
                collapse
            ]
        },
        'expr150': {
            'finalizers': [
                collapse
            ]
        },
        'expr160': {
            'finalizers': [
                collapse
            ]
        },
        'expr200': {
            'finalizers': [
                collapse
            ]
        },
        'expr300': {
            'finalizers': [
                collapse
            ]
        },
        'expr400': {
            'finalizers': [
                collapse
            ]
        },
        'expr500': {
            'finalizers': [
                collapse
            ]
        },
        'expr600': {
            'finalizers': [
                collapse
            ]
        },
        'expr700': {
            'finalizers': [
                collapse
            ]
        },
        'expr800': {
            'finalizers': [
                collapse
            ]
        },
        'exprMax': {
            'finalizers': [
                collapse
            ]
        },
        'list': {
            'finalizers': [
                collapse
            ]
        },
        'tail': {
            'finalizers': [
                collapse
            ]
        },
        'binary': {
            'finalizers': [
                collapse
            ]
        },
        'binElements': {
            'finalizers': [
                collapse
            ]
        },
        'binElement': {
            'finalizers': [
                collapse
            ]
        },
        'bitExpr': {
            'finalizers': [
                collapse
            ]
        },
        'optBitSizeExpr': {
            'finalizers': [
                collapse
            ]
        },
        'optBitTypeList': {
            'finalizers': [
                collapse
            ]
        },
        'bitTypeList': {
            'finalizers': [
                collapse
            ]
        },
        'bitType': {
            'finalizers': [
                collapse
            ]
        },
        'bitSizeExpr': {
            'finalizers': [
                collapse
            ]
        },
        'listComprehension': {
            'finalizers': [
                collapse
            ]
        },
        'binaryComprehension': {
            'finalizers': [
                collapse
            ]
        },
        'lcExprs': {
            'finalizers': [
                collapse
            ]
        },
        'lcExpr': {
            'finalizers': [
                collapse
            ]
        },
        'tuple': {
            'finalizers': [
                collapse
            ]
        },
        'recordExpr': {
            'finalizers': [
                collapse
            ]
        },
        'recordTuple': {
            'finalizers': [
                collapse
            ]
        },
        'recordFields': {
            'finalizers': [
                collapse
            ]
        },
        'recordField': {
            'finalizers': [
                collapse
            ]
        },
        'functionCall': {
            'finalizers': [
                collapse
            ]
        },
        'ifExpr': {
            'finalizers': [
                collapse
            ]
        },
        'ifClauses': {
            'finalizers': [
                collapse
            ]
        },
        'ifClause': {
            'finalizers': [
                collapse
            ]
        },
        'caseExpr': {
            'finalizers': [
                collapse
            ]
        },
        'crClauses': {
            'finalizers': [
                collapse
            ]
        },
        'crClause': {
            'finalizers': [
                collapse
            ]
        },
        'receiveExpr': {
            'finalizers': [
                collapse
            ]
        },
        'funExpr': {
            'finalizers': [
                collapse
            ]
        },
        'atomOrVar': {
            'finalizers': [
                collapse
            ]
        },
        'integerOrVar': {
            'finalizers': [
                collapse
            ]
        },
        'funClauses': {
            'finalizers': [
                collapse
            ]
        },
        'funClause': {
            'finalizers': [
                collapse
            ]
        },
        'tryExpr': {
            'finalizers': [
                collapse
            ]
        },
        'tryCatch': {
            'finalizers': [
                collapse
            ]
        },
        'tryClauses': {
            'finalizers': [
                collapse
            ]
        },
        'tryClause': {
            'finalizers': [
                collapse
            ]
        },
        'argumentList': {
            'finalizers': [
                collapse
            ]
        },
        'exprs': {
            'finalizers': [
                collapse
            ]
        },
        'guard': {
            'finalizers': [
                collapse
            ]
        },
        'atomic': {
            'finalizers': [
                collapse
            ]
        },
        'prefixOp': {
            'finalizers': [
                collapse
            ]
        },
        'multOp': {
            'finalizers': [
                collapse
            ]
        },
        'addOp': {
            'finalizers': [
                collapse
            ]
        },
        'listOp': {
            'finalizers': [
                collapse
            ]
        },
        'compOp': {
            'finalizers': [
                collapse
            ]
        },
        'ruleClauses': {
            'finalizers': [
                collapse
            ]
        },
        'ruleClause': {
            'finalizers': [
                collapse
            ]
        },
        'ruleBody': {
            'finalizers': [
                collapse
            ]
        }
    }
};
