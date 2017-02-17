let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Sparql',
    'grammar_file': 'Sparql.g4',
    'entry_rule': 'query',
    'rules': {
        'query': {
            'finalizers': [
                collapse
            ]
        },
        'prologue': {
            'finalizers': [
                collapse
            ]
        },
        'baseDecl': {
            'finalizers': [
                collapse
            ]
        },
        'prefixDecl': {
            'finalizers': [
                collapse
            ]
        },
        'selectQuery': {
            'finalizers': [
                collapse
            ]
        },
        'constructQuery': {
            'finalizers': [
                collapse
            ]
        },
        'describeQuery': {
            'finalizers': [
                collapse
            ]
        },
        'askQuery': {
            'finalizers': [
                collapse
            ]
        },
        'datasetClause': {
            'finalizers': [
                collapse
            ]
        },
        'defaultGraphClause': {
            'finalizers': [
                collapse
            ]
        },
        'namedGraphClause': {
            'finalizers': [
                collapse
            ]
        },
        'sourceSelector': {
            'finalizers': [
                collapse
            ]
        },
        'whereClause': {
            'finalizers': [
                collapse
            ]
        },
        'solutionModifier': {
            'finalizers': [
                collapse
            ]
        },
        'limitOffsetClauses': {
            'finalizers': [
                collapse
            ]
        },
        'orderClause': {
            'finalizers': [
                collapse
            ]
        },
        'orderCondition': {
            'finalizers': [
                collapse
            ]
        },
        'limitClause': {
            'finalizers': [
                collapse
            ]
        },
        'offsetClause': {
            'finalizers': [
                collapse
            ]
        },
        'groupGraphPattern': {
            'finalizers': [
                collapse
            ]
        },
        'triplesBlock': {
            'finalizers': [
                collapse
            ]
        },
        'graphPatternNotTriples': {
            'finalizers': [
                collapse
            ]
        },
        'optionalGraphPattern': {
            'finalizers': [
                collapse
            ]
        },
        'graphGraphPattern': {
            'finalizers': [
                collapse
            ]
        },
        'groupOrUnionGraphPattern': {
            'finalizers': [
                collapse
            ]
        },
        'filter': {
            'finalizers': [
                collapse
            ]
        },
        'constraint': {
            'finalizers': [
                collapse
            ]
        },
        'functionCall': {
            'finalizers': [
                collapse
            ]
        },
        'argList': {
            'finalizers': [
                collapse
            ]
        },
        'constructTemplate': {
            'finalizers': [
                collapse
            ]
        },
        'constructTriples': {
            'finalizers': [
                collapse
            ]
        },
        'triplesSameSubject': {
            'finalizers': [
                collapse
            ]
        },
        'propertyListNotEmpty': {
            'finalizers': [
                collapse
            ]
        },
        'propertyList': {
            'finalizers': [
                collapse
            ]
        },
        'objectList': {
            'finalizers': [
                collapse
            ]
        },
        'object': {
            'finalizers': [
                collapse
            ]
        },
        'verb': {
            'finalizers': [
                collapse
            ]
        },
        'triplesNode': {
            'finalizers': [
                collapse
            ]
        },
        'blankNodePropertyList': {
            'finalizers': [
                collapse
            ]
        },
        'collection': {
            'finalizers': [
                collapse
            ]
        },
        'graphNode': {
            'finalizers': [
                collapse
            ]
        },
        'varOrTerm': {
            'finalizers': [
                collapse
            ]
        },
        'varOrIRIref': {
            'finalizers': [
                collapse
            ]
        },
        'var': {
            'finalizers': [
                collapse
            ]
        },
        'graphTerm': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'conditionalOrExpression': {
            'finalizers': [
                collapse
            ]
        },
        'conditionalAndExpression': {
            'finalizers': [
                collapse
            ]
        },
        'valueLogical': {
            'finalizers': [
                collapse
            ]
        },
        'relationalExpression': {
            'finalizers': [
                collapse
            ]
        },
        'numericExpression': {
            'finalizers': [
                collapse
            ]
        },
        'additiveExpression': {
            'finalizers': [
                collapse
            ]
        },
        'multiplicativeExpression': {
            'finalizers': [
                collapse
            ]
        },
        'unaryExpression': {
            'finalizers': [
                collapse
            ]
        },
        'primaryExpression': {
            'finalizers': [
                collapse
            ]
        },
        'brackettedExpression': {
            'finalizers': [
                collapse
            ]
        },
        'builtInCall': {
            'finalizers': [
                collapse
            ]
        },
        'regexExpression': {
            'finalizers': [
                collapse
            ]
        },
        'iriRefOrFunction': {
            'finalizers': [
                collapse
            ]
        },
        'rdfLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'numericLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'numericLiteralUnsigned': {
            'finalizers': [
                collapse
            ]
        },
        'numericLiteralPositive': {
            'finalizers': [
                collapse
            ]
        },
        'numericLiteralNegative': {
            'finalizers': [
                collapse
            ]
        },
        'booleanLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        },
        'iriRef': {
            'finalizers': [
                collapse
            ]
        },
        'prefixedName': {
            'finalizers': [
                collapse
            ]
        },
        'blankNode': {
            'finalizers': [
                collapse
            ]
        }
    }
};
