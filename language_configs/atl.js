let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'ATL',
    'grammar_file': 'ATL.g4',
    'entry_rule': 'unit',
    'rules': {
        'unit': {
            'finalizers': [
                collapse
            ]
        },
        'module': {
            'finalizers': [
                collapse
            ]
        },
        'targetModelPattern': {
            'finalizers': [
                collapse
            ]
        },
        'sourceModelPattern': {
            'finalizers': [
                collapse
            ]
        },
        'transformationMode': {
            'finalizers': [
                collapse
            ]
        },
        'library': {
            'finalizers': [
                collapse
            ]
        },
        'query': {
            'finalizers': [
                collapse
            ]
        },
        'libraryRef': {
            'finalizers': [
                collapse
            ]
        },
        'moduleElement': {
            'finalizers': [
                collapse
            ]
        },
        'helper': {
            'finalizers': [
                collapse
            ]
        },
        'oclFeatureDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'oclContextDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'oclFeature': {
            'finalizers': [
                collapse
            ]
        },
        'operation': {
            'finalizers': [
                collapse
            ]
        },
        'parameter': {
            'finalizers': [
                collapse
            ]
        },
        'attribute': {
            'finalizers': [
                collapse
            ]
        },
        'arule': {
            'finalizers': [
                collapse
            ]
        },
        'matchedRule': {
            'finalizers': [
                collapse
            ]
        },
        'lazyMatchedRule': {
            'finalizers': [
                collapse
            ]
        },
        'ruleVariableDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'calledRule': {
            'finalizers': [
                collapse
            ]
        },
        'inPattern': {
            'finalizers': [
                collapse
            ]
        },
        'inPatternElement': {
            'finalizers': [
                collapse
            ]
        },
        'simpleInPatternElement': {
            'finalizers': [
                collapse
            ]
        },
        'outPattern': {
            'finalizers': [
                collapse
            ]
        },
        'outPatternElement': {
            'finalizers': [
                collapse
            ]
        },
        'simpleOutPatternElement': {
            'finalizers': [
                collapse
            ]
        },
        'forEachOutPatternElement': {
            'finalizers': [
                collapse
            ]
        },
        'binding': {
            'finalizers': [
                collapse
            ]
        },
        'actionBlock': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'bindingStat': {
            'finalizers': [
                collapse
            ]
        },
        'expressionStat': {
            'finalizers': [
                collapse
            ]
        },
        'ifStat': {
            'finalizers': [
                collapse
            ]
        },
        'forStat': {
            'finalizers': [
                collapse
            ]
        },
        'oclModel': {
            'finalizers': [
                collapse
            ]
        },
        'oclModelElement': {
            'finalizers': [
                collapse
            ]
        },
        'oclExpression': {
            'finalizers': [
                collapse
            ]
        },
        'iteratorExp': {
            'finalizers': [
                collapse
            ]
        },
        'iterateExp': {
            'finalizers': [
                collapse
            ]
        },
        'collectionOperationCallExp': {
            'finalizers': [
                collapse
            ]
        },
        'operationCallExp': {
            'finalizers': [
                collapse
            ]
        },
        'navigationOrAttributeCallExp': {
            'finalizers': [
                collapse
            ]
        },
        'iterator': {
            'finalizers': [
                collapse
            ]
        },
        'oclUndefinedExp': {
            'finalizers': [
                collapse
            ]
        },
        'primitiveExp': {
            'finalizers': [
                collapse
            ]
        },
        'numericExp': {
            'finalizers': [
                collapse
            ]
        },
        'booleanExp': {
            'finalizers': [
                collapse
            ]
        },
        'integerExp': {
            'finalizers': [
                collapse
            ]
        },
        'realExp': {
            'finalizers': [
                collapse
            ]
        },
        'stringExp': {
            'finalizers': [
                collapse
            ]
        },
        'ifExp': {
            'finalizers': [
                collapse
            ]
        },
        'variableExp': {
            'finalizers': [
                collapse
            ]
        },
        'superExp': {
            'finalizers': [
                collapse
            ]
        },
        'letExp': {
            'finalizers': [
                collapse
            ]
        },
        'variableDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'enumLiteralExp': {
            'finalizers': [
                collapse
            ]
        },
        'collectionExp': {
            'finalizers': [
                collapse
            ]
        },
        'bagExp': {
            'finalizers': [
                collapse
            ]
        },
        'setExp': {
            'finalizers': [
                collapse
            ]
        },
        'orderedSetExp': {
            'finalizers': [
                collapse
            ]
        },
        'sequenceExp': {
            'finalizers': [
                collapse
            ]
        },
        'mapExp': {
            'finalizers': [
                collapse
            ]
        },
        'mapElement': {
            'finalizers': [
                collapse
            ]
        },
        'tupleExp': {
            'finalizers': [
                collapse
            ]
        },
        'tuplePart': {
            'finalizers': [
                collapse
            ]
        },
        'oclType': {
            'finalizers': [
                collapse
            ]
        },
        'oclAnyType': {
            'finalizers': [
                collapse
            ]
        },
        'tupleType': {
            'finalizers': [
                collapse
            ]
        },
        'tupleTypeAttribute': {
            'finalizers': [
                collapse
            ]
        },
        'mapType': {
            'finalizers': [
                collapse
            ]
        },
        'primitive': {
            'finalizers': [
                collapse
            ]
        },
        'numericType': {
            'finalizers': [
                collapse
            ]
        },
        'integerType': {
            'finalizers': [
                collapse
            ]
        },
        'realType': {
            'finalizers': [
                collapse
            ]
        },
        'booleanType': {
            'finalizers': [
                collapse
            ]
        },
        'stringType': {
            'finalizers': [
                collapse
            ]
        },
        'collectionType': {
            'finalizers': [
                collapse
            ]
        },
        'bagType': {
            'finalizers': [
                collapse
            ]
        },
        'setType': {
            'finalizers': [
                collapse
            ]
        },
        'orderedSetType': {
            'finalizers': [
                collapse
            ]
        },
        'sequenceType': {
            'finalizers': [
                collapse
            ]
        },
        'priority_0': {
            'finalizers': [
                collapse
            ]
        },
        'priority_1': {
            'finalizers': [
                collapse
            ]
        },
        'priority_2': {
            'finalizers': [
                collapse
            ]
        },
        'priority_3': {
            'finalizers': [
                collapse
            ]
        },
        'priority_4': {
            'finalizers': [
                collapse
            ]
        },
        'priority_5': {
            'finalizers': [
                collapse
            ]
        },
        'matchedRule_abstractContents': {
            'finalizers': [
                collapse
            ]
        },
        'oclType_abstractContents': {
            'finalizers': [
                collapse
            ]
        },
        'oclAnyType_abstractContents': {
            'finalizers': [
                collapse
            ]
        },
        'collectionType_abstractContents': {
            'finalizers': [
                collapse
            ]
        },
        'primary_oclExpression': {
            'finalizers': [
                collapse
            ]
        }
    }
};
