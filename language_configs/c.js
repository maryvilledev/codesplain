let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'C',
    'grammar_file': 'C.g4',
    'entry_rule': 'primaryExpression',
    'rules': {
        'primaryExpression': {
            'finalizers': [
                collapse
            ]
        },
        'genericSelection': {
            'finalizers': [
                collapse
            ]
        },
        'genericAssocList': {
            'finalizers': [
                collapse
            ]
        },
        'genericAssociation': {
            'finalizers': [
                collapse
            ]
        },
        'postfixExpression': {
            'finalizers': [
                collapse
            ]
        },
        'argumentExpressionList': {
            'finalizers': [
                collapse
            ]
        },
        'unaryExpression': {
            'finalizers': [
                collapse
            ]
        },
        'unaryOperator': {
            'finalizers': [
                collapse
            ]
        },
        'castExpression': {
            'finalizers': [
                collapse
            ]
        },
        'multiplicativeExpression': {
            'finalizers': [
                collapse
            ]
        },
        'additiveExpression': {
            'finalizers': [
                collapse
            ]
        },
        'shiftExpression': {
            'finalizers': [
                collapse
            ]
        },
        'relationalExpression': {
            'finalizers': [
                collapse
            ]
        },
        'equalityExpression': {
            'finalizers': [
                collapse
            ]
        },
        'andExpression': {
            'finalizers': [
                collapse
            ]
        },
        'exclusiveOrExpression': {
            'finalizers': [
                collapse
            ]
        },
        'inclusiveOrExpression': {
            'finalizers': [
                collapse
            ]
        },
        'logicalAndExpression': {
            'finalizers': [
                collapse
            ]
        },
        'logicalOrExpression': {
            'finalizers': [
                collapse
            ]
        },
        'conditionalExpression': {
            'finalizers': [
                collapse
            ]
        },
        'assignmentExpression': {
            'finalizers': [
                collapse
            ]
        },
        'assignmentOperator': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'constantExpression': {
            'finalizers': [
                collapse
            ]
        },
        'declaration': {
            'finalizers': [
                collapse
            ]
        },
        'declarationSpecifiers': {
            'finalizers': [
                collapse
            ]
        },
        'declarationSpecifiers2': {
            'finalizers': [
                collapse
            ]
        },
        'declarationSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'initDeclaratorList': {
            'finalizers': [
                collapse
            ]
        },
        'initDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'storageClassSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'typeSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'structOrUnionSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'structOrUnion': {
            'finalizers': [
                collapse
            ]
        },
        'structDeclarationList': {
            'finalizers': [
                collapse
            ]
        },
        'structDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'specifierQualifierList': {
            'finalizers': [
                collapse
            ]
        },
        'structDeclaratorList': {
            'finalizers': [
                collapse
            ]
        },
        'structDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'enumSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'enumeratorList': {
            'finalizers': [
                collapse
            ]
        },
        'enumerator': {
            'finalizers': [
                collapse
            ]
        },
        'enumerationConstant': {
            'finalizers': [
                collapse
            ]
        },
        'atomicTypeSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'typeQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'functionSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'alignmentSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'declarator': {
            'finalizers': [
                collapse
            ]
        },
        'directDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'gccDeclaratorExtension': {
            'finalizers': [
                collapse
            ]
        },
        'gccAttributeSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'gccAttributeList': {
            'finalizers': [
                collapse
            ]
        },
        'gccAttribute': {
            'finalizers': [
                collapse
            ]
        },
        'nestedParenthesesBlock': {
            'finalizers': [
                collapse
            ]
        },
        'pointer': {
            'finalizers': [
                collapse
            ]
        },
        'typeQualifierList': {
            'finalizers': [
                collapse
            ]
        },
        'parameterTypeList': {
            'finalizers': [
                collapse
            ]
        },
        'parameterList': {
            'finalizers': [
                collapse
            ]
        },
        'parameterDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'identifierList': {
            'finalizers': [
                collapse
            ]
        },
        'typeName': {
            'finalizers': [
                collapse
            ]
        },
        'abstractDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'directAbstractDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'typedefName': {
            'finalizers': [
                collapse
            ]
        },
        'initializer': {
            'finalizers': [
                collapse
            ]
        },
        'initializerList': {
            'finalizers': [
                collapse
            ]
        },
        'designation': {
            'finalizers': [
                collapse
            ]
        },
        'designatorList': {
            'finalizers': [
                collapse
            ]
        },
        'designator': {
            'finalizers': [
                collapse
            ]
        },
        'staticAssertDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'labeledStatement': {
            'finalizers': [
                collapse
            ]
        },
        'compoundStatement': {
            'finalizers': [
                collapse
            ]
        },
        'blockItemList': {
            'finalizers': [
                collapse
            ]
        },
        'blockItem': {
            'finalizers': [
                collapse
            ]
        },
        'expressionStatement': {
            'finalizers': [
                collapse
            ]
        },
        'selectionStatement': {
            'finalizers': [
                collapse
            ]
        },
        'iterationStatement': {
            'finalizers': [
                collapse
            ]
        },
        'jumpStatement': {
            'finalizers': [
                collapse
            ]
        },
        'compilationUnit': {
            'finalizers': [
                collapse
            ]
        },
        'translationUnit': {
            'finalizers': [
                collapse
            ]
        },
        'externalDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'functionDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'declarationList': {
            'finalizers': [
                collapse
            ]
        }
    }
};
