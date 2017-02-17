let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Java',
    'grammar_file': 'Java.g4',
    'entry_rule': 'compilationUnit',
    'rules': {
        'compilationUnit': {
            'finalizers': [
                collapse
            ]
        },
        'packageDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'importDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'typeDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'modifier': {
            'finalizers': [
                collapse
            ]
        },
        'classOrInterfaceModifier': {
            'finalizers': [
                collapse
            ]
        },
        'variableModifier': {
            'finalizers': [
                collapse
            ]
        },
        'classDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'typeParameters': {
            'finalizers': [
                collapse
            ]
        },
        'typeParameter': {
            'finalizers': [
                collapse
            ]
        },
        'typeBound': {
            'finalizers': [
                collapse
            ]
        },
        'enumDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'enumConstants': {
            'finalizers': [
                collapse
            ]
        },
        'enumConstant': {
            'finalizers': [
                collapse
            ]
        },
        'enumBodyDeclarations': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'typeList': {
            'finalizers': [
                collapse
            ]
        },
        'classBody': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceBody': {
            'finalizers': [
                collapse
            ]
        },
        'classBodyDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'memberDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'methodDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'genericMethodDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'constructorDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'genericConstructorDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'fieldDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceBodyDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceMemberDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'constDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'constantDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceMethodDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'genericInterfaceMethodDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'variableDeclarators': {
            'finalizers': [
                collapse
            ]
        },
        'variableDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'variableDeclaratorId': {
            'finalizers': [
                collapse
            ]
        },
        'variableInitializer': {
            'finalizers': [
                collapse
            ]
        },
        'arrayInitializer': {
            'finalizers': [
                collapse
            ]
        },
        'enumConstantName': {
            'finalizers': [
                collapse
            ]
        },
        'typeType': {
            'finalizers': [
                collapse
            ]
        },
        'classOrInterfaceType': {
            'finalizers': [
                collapse
            ]
        },
        'primitiveType': {
            'finalizers': [
                collapse
            ]
        },
        'typeArguments': {
            'finalizers': [
                collapse
            ]
        },
        'typeArgument': {
            'finalizers': [
                collapse
            ]
        },
        'qualifiedNameList': {
            'finalizers': [
                collapse
            ]
        },
        'formalParameters': {
            'finalizers': [
                collapse
            ]
        },
        'formalParameterList': {
            'finalizers': [
                collapse
            ]
        },
        'formalParameter': {
            'finalizers': [
                collapse
            ]
        },
        'lastFormalParameter': {
            'finalizers': [
                collapse
            ]
        },
        'methodBody': {
            'finalizers': [
                collapse
            ]
        },
        'constructorBody': {
            'finalizers': [
                collapse
            ]
        },
        'qualifiedName': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'annotation': {
            'finalizers': [
                collapse
            ]
        },
        'annotationName': {
            'finalizers': [
                collapse
            ]
        },
        'elementValuePairs': {
            'finalizers': [
                collapse
            ]
        },
        'elementValuePair': {
            'finalizers': [
                collapse
            ]
        },
        'elementValue': {
            'finalizers': [
                collapse
            ]
        },
        'elementValueArrayInitializer': {
            'finalizers': [
                collapse
            ]
        },
        'annotationTypeDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'annotationTypeBody': {
            'finalizers': [
                collapse
            ]
        },
        'annotationTypeElementDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'annotationTypeElementRest': {
            'finalizers': [
                collapse
            ]
        },
        'annotationMethodOrConstantRest': {
            'finalizers': [
                collapse
            ]
        },
        'annotationMethodRest': {
            'finalizers': [
                collapse
            ]
        },
        'annotationConstantRest': {
            'finalizers': [
                collapse
            ]
        },
        'defaultValue': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'blockStatement': {
            'finalizers': [
                collapse
            ]
        },
        'localVariableDeclarationStatement': {
            'finalizers': [
                collapse
            ]
        },
        'localVariableDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'catchClause': {
            'finalizers': [
                collapse
            ]
        },
        'catchType': {
            'finalizers': [
                collapse
            ]
        },
        'finallyBlock': {
            'finalizers': [
                collapse
            ]
        },
        'resourceSpecification': {
            'finalizers': [
                collapse
            ]
        },
        'resources': {
            'finalizers': [
                collapse
            ]
        },
        'resource': {
            'finalizers': [
                collapse
            ]
        },
        'switchBlockStatementGroup': {
            'finalizers': [
                collapse
            ]
        },
        'switchLabel': {
            'finalizers': [
                collapse
            ]
        },
        'forControl': {
            'finalizers': [
                collapse
            ]
        },
        'forInit': {
            'finalizers': [
                collapse
            ]
        },
        'enhancedForControl': {
            'finalizers': [
                collapse
            ]
        },
        'forUpdate': {
            'finalizers': [
                collapse
            ]
        },
        'parExpression': {
            'finalizers': [
                collapse
            ]
        },
        'expressionList': {
            'finalizers': [
                collapse
            ]
        },
        'statementExpression': {
            'finalizers': [
                collapse
            ]
        },
        'constantExpression': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'primary': {
            'finalizers': [
                collapse
            ]
        },
        'creator': {
            'finalizers': [
                collapse
            ]
        },
        'createdName': {
            'finalizers': [
                collapse
            ]
        },
        'innerCreator': {
            'finalizers': [
                collapse
            ]
        },
        'arrayCreatorRest': {
            'finalizers': [
                collapse
            ]
        },
        'classCreatorRest': {
            'finalizers': [
                collapse
            ]
        },
        'explicitGenericInvocation': {
            'finalizers': [
                collapse
            ]
        },
        'nonWildcardTypeArguments': {
            'finalizers': [
                collapse
            ]
        },
        'typeArgumentsOrDiamond': {
            'finalizers': [
                collapse
            ]
        },
        'nonWildcardTypeArgumentsOrDiamond': {
            'finalizers': [
                collapse
            ]
        },
        'superSuffix': {
            'finalizers': [
                collapse
            ]
        },
        'explicitGenericInvocationSuffix': {
            'finalizers': [
                collapse
            ]
        },
        'arguments': {
            'finalizers': [
                collapse
            ]
        }
    }
};
