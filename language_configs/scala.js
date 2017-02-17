let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Scala',
    'grammar_file': 'Scala.g4',
    'entry_rule': 'literal',
    'rules': {
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'qualId': {
            'finalizers': [
                collapse
            ]
        },
        'ids': {
            'finalizers': [
                collapse
            ]
        },
        'stableId': {
            'finalizers': [
                collapse
            ]
        },
        'classQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'functionArgTypes': {
            'finalizers': [
                collapse
            ]
        },
        'existentialClause': {
            'finalizers': [
                collapse
            ]
        },
        'existentialDcl': {
            'finalizers': [
                collapse
            ]
        },
        'infixType': {
            'finalizers': [
                collapse
            ]
        },
        'compoundType': {
            'finalizers': [
                collapse
            ]
        },
        'annotType': {
            'finalizers': [
                collapse
            ]
        },
        'simpleType': {
            'finalizers': [
                collapse
            ]
        },
        'typeArgs': {
            'finalizers': [
                collapse
            ]
        },
        'types': {
            'finalizers': [
                collapse
            ]
        },
        'refinement': {
            'finalizers': [
                collapse
            ]
        },
        'refineStat': {
            'finalizers': [
                collapse
            ]
        },
        'typePat': {
            'finalizers': [
                collapse
            ]
        },
        'ascription': {
            'finalizers': [
                collapse
            ]
        },
        'expr': {
            'finalizers': [
                collapse
            ]
        },
        'expr1': {
            'finalizers': [
                collapse
            ]
        },
        'postfixExpr': {
            'finalizers': [
                collapse
            ]
        },
        'infixExpr': {
            'finalizers': [
                collapse
            ]
        },
        'prefixExpr': {
            'finalizers': [
                collapse
            ]
        },
        'simpleExpr1': {
            'finalizers': [
                collapse
            ]
        },
        'exprs': {
            'finalizers': [
                collapse
            ]
        },
        'argumentExprs': {
            'finalizers': [
                collapse
            ]
        },
        'blockExpr': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'blockStat': {
            'finalizers': [
                collapse
            ]
        },
        'resultExpr': {
            'finalizers': [
                collapse
            ]
        },
        'enumerators': {
            'finalizers': [
                collapse
            ]
        },
        'generator': {
            'finalizers': [
                collapse
            ]
        },
        'caseClauses': {
            'finalizers': [
                collapse
            ]
        },
        'caseClause': {
            'finalizers': [
                collapse
            ]
        },
        'guard': {
            'finalizers': [
                collapse
            ]
        },
        'pattern': {
            'finalizers': [
                collapse
            ]
        },
        'pattern1': {
            'finalizers': [
                collapse
            ]
        },
        'pattern2': {
            'finalizers': [
                collapse
            ]
        },
        'pattern3': {
            'finalizers': [
                collapse
            ]
        },
        'simplePattern': {
            'finalizers': [
                collapse
            ]
        },
        'patterns': {
            'finalizers': [
                collapse
            ]
        },
        'typeParamClause': {
            'finalizers': [
                collapse
            ]
        },
        'funTypeParamClause': {
            'finalizers': [
                collapse
            ]
        },
        'variantTypeParam': {
            'finalizers': [
                collapse
            ]
        },
        'typeParam': {
            'finalizers': [
                collapse
            ]
        },
        'paramClauses': {
            'finalizers': [
                collapse
            ]
        },
        'paramClause': {
            'finalizers': [
                collapse
            ]
        },
        'params': {
            'finalizers': [
                collapse
            ]
        },
        'param': {
            'finalizers': [
                collapse
            ]
        },
        'paramType': {
            'finalizers': [
                collapse
            ]
        },
        'classParamClauses': {
            'finalizers': [
                collapse
            ]
        },
        'classParamClause': {
            'finalizers': [
                collapse
            ]
        },
        'classParams': {
            'finalizers': [
                collapse
            ]
        },
        'classParam': {
            'finalizers': [
                collapse
            ]
        },
        'bindings': {
            'finalizers': [
                collapse
            ]
        },
        'binding': {
            'finalizers': [
                collapse
            ]
        },
        'modifier': {
            'finalizers': [
                collapse
            ]
        },
        'localModifier': {
            'finalizers': [
                collapse
            ]
        },
        'accessModifier': {
            'finalizers': [
                collapse
            ]
        },
        'accessQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'annotation': {
            'finalizers': [
                collapse
            ]
        },
        'constrAnnotation': {
            'finalizers': [
                collapse
            ]
        },
        'templateBody': {
            'finalizers': [
                collapse
            ]
        },
        'templateStat': {
            'finalizers': [
                collapse
            ]
        },
        'selfType': {
            'finalizers': [
                collapse
            ]
        },
        'import_': {
            'finalizers': [
                collapse
            ]
        },
        'importExpr': {
            'finalizers': [
                collapse
            ]
        },
        'importSelectors': {
            'finalizers': [
                collapse
            ]
        },
        'importSelector': {
            'finalizers': [
                collapse
            ]
        },
        'dcl': {
            'finalizers': [
                collapse
            ]
        },
        'valDcl': {
            'finalizers': [
                collapse
            ]
        },
        'varDcl': {
            'finalizers': [
                collapse
            ]
        },
        'funDcl': {
            'finalizers': [
                collapse
            ]
        },
        'funSig': {
            'finalizers': [
                collapse
            ]
        },
        'typeDcl': {
            'finalizers': [
                collapse
            ]
        },
        'patVarDef': {
            'finalizers': [
                collapse
            ]
        },
        'def': {
            'finalizers': [
                collapse
            ]
        },
        'patDef': {
            'finalizers': [
                collapse
            ]
        },
        'varDef': {
            'finalizers': [
                collapse
            ]
        },
        'funDef': {
            'finalizers': [
                collapse
            ]
        },
        'typeDef': {
            'finalizers': [
                collapse
            ]
        },
        'tmplDef': {
            'finalizers': [
                collapse
            ]
        },
        'classDef': {
            'finalizers': [
                collapse
            ]
        },
        'traitDef': {
            'finalizers': [
                collapse
            ]
        },
        'objectDef': {
            'finalizers': [
                collapse
            ]
        },
        'classTemplateOpt': {
            'finalizers': [
                collapse
            ]
        },
        'traitTemplateOpt': {
            'finalizers': [
                collapse
            ]
        },
        'classTemplate': {
            'finalizers': [
                collapse
            ]
        },
        'traitTemplate': {
            'finalizers': [
                collapse
            ]
        },
        'classParents': {
            'finalizers': [
                collapse
            ]
        },
        'traitParents': {
            'finalizers': [
                collapse
            ]
        },
        'constr': {
            'finalizers': [
                collapse
            ]
        },
        'earlyDefs': {
            'finalizers': [
                collapse
            ]
        },
        'earlyDef': {
            'finalizers': [
                collapse
            ]
        },
        'constrExpr': {
            'finalizers': [
                collapse
            ]
        },
        'constrBlock': {
            'finalizers': [
                collapse
            ]
        },
        'selfInvocation': {
            'finalizers': [
                collapse
            ]
        },
        'topStatSeq': {
            'finalizers': [
                collapse
            ]
        },
        'topStat': {
            'finalizers': [
                collapse
            ]
        },
        'packaging': {
            'finalizers': [
                collapse
            ]
        },
        'packageObject': {
            'finalizers': [
                collapse
            ]
        },
        'compilationUnit': {
            'finalizers': [
                collapse
            ]
        }
    }
};
