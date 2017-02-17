let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Smalltalk',
    'grammar_file': 'Smalltalk.g4',
    'entry_rule': 'script',
    'rules': {
        'script': {
            'finalizers': [
                collapse
            ]
        },
        'sequence': {
            'finalizers': [
                collapse
            ]
        },
        'ws': {
            'finalizers': [
                collapse
            ]
        },
        'temps': {
            'finalizers': [
                collapse
            ]
        },
        'statements': {
            'finalizers': [
                collapse
            ]
        },
        'answer': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'expressions': {
            'finalizers': [
                collapse
            ]
        },
        'expressionList': {
            'finalizers': [
                collapse
            ]
        },
        'cascade': {
            'finalizers': [
                collapse
            ]
        },
        'message': {
            'finalizers': [
                collapse
            ]
        },
        'assignment': {
            'finalizers': [
                collapse
            ]
        },
        'variable': {
            'finalizers': [
                collapse
            ]
        },
        'binarySend': {
            'finalizers': [
                collapse
            ]
        },
        'unarySend': {
            'finalizers': [
                collapse
            ]
        },
        'keywordSend': {
            'finalizers': [
                collapse
            ]
        },
        'keywordMessage': {
            'finalizers': [
                collapse
            ]
        },
        'keywordPair': {
            'finalizers': [
                collapse
            ]
        },
        'operand': {
            'finalizers': [
                collapse
            ]
        },
        'subexpression': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'runtimeLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'blockParamList': {
            'finalizers': [
                collapse
            ]
        },
        'dynamicDictionary': {
            'finalizers': [
                collapse
            ]
        },
        'dynamicArray': {
            'finalizers': [
                collapse
            ]
        },
        'parsetimeLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'number': {
            'finalizers': [
                collapse
            ]
        },
        'numberExp': {
            'finalizers': [
                collapse
            ]
        },
        'charConstant': {
            'finalizers': [
                collapse
            ]
        },
        'hex': {
            'finalizers': [
                collapse
            ]
        },
        'stInteger': {
            'finalizers': [
                collapse
            ]
        },
        'stFloat': {
            'finalizers': [
                collapse
            ]
        },
        'pseudoVariable': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        },
        'symbol': {
            'finalizers': [
                collapse
            ]
        },
        'primitive': {
            'finalizers': [
                collapse
            ]
        },
        'bareSymbol': {
            'finalizers': [
                collapse
            ]
        },
        'literalArray': {
            'finalizers': [
                collapse
            ]
        },
        'literalArrayRest': {
            'finalizers': [
                collapse
            ]
        },
        'bareLiteralArray': {
            'finalizers': [
                collapse
            ]
        },
        'unaryTail': {
            'finalizers': [
                collapse
            ]
        },
        'unaryMessage': {
            'finalizers': [
                collapse
            ]
        },
        'unarySelector': {
            'finalizers': [
                collapse
            ]
        },
        'keywords': {
            'finalizers': [
                collapse
            ]
        },
        'reference': {
            'finalizers': [
                collapse
            ]
        },
        'binaryTail': {
            'finalizers': [
                collapse
            ]
        },
        'binaryMessage': {
            'finalizers': [
                collapse
            ]
        }
    }
};
