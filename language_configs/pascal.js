let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'pascal',
    'grammar_file': 'pascal.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'programHeading': {
            'finalizers': [
                collapse
            ]
        },
        'identifier': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'usesUnitsPart': {
            'finalizers': [
                collapse
            ]
        },
        'labelDeclarationPart': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
            'finalizers': [
                collapse
            ]
        },
        'constantDefinitionPart': {
            'finalizers': [
                collapse
            ]
        },
        'constantDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'constantChr': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        },
        'unsignedNumber': {
            'finalizers': [
                collapse
            ]
        },
        'unsignedInteger': {
            'finalizers': [
                collapse
            ]
        },
        'unsignedReal': {
            'finalizers': [
                collapse
            ]
        },
        'sign': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        },
        'typeDefinitionPart': {
            'finalizers': [
                collapse
            ]
        },
        'typeDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'functionType': {
            'finalizers': [
                collapse
            ]
        },
        'procedureType': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'simpleType': {
            'finalizers': [
                collapse
            ]
        },
        'scalarType': {
            'finalizers': [
                collapse
            ]
        },
        'subrangeType': {
            'finalizers': [
                collapse
            ]
        },
        'typeIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'structuredType': {
            'finalizers': [
                collapse
            ]
        },
        'unpackedStructuredType': {
            'finalizers': [
                collapse
            ]
        },
        'stringtype': {
            'finalizers': [
                collapse
            ]
        },
        'arrayType': {
            'finalizers': [
                collapse
            ]
        },
        'typeList': {
            'finalizers': [
                collapse
            ]
        },
        'indexType': {
            'finalizers': [
                collapse
            ]
        },
        'componentType': {
            'finalizers': [
                collapse
            ]
        },
        'recordType': {
            'finalizers': [
                collapse
            ]
        },
        'fieldList': {
            'finalizers': [
                collapse
            ]
        },
        'fixedPart': {
            'finalizers': [
                collapse
            ]
        },
        'recordSection': {
            'finalizers': [
                collapse
            ]
        },
        'variantPart': {
            'finalizers': [
                collapse
            ]
        },
        'tag': {
            'finalizers': [
                collapse
            ]
        },
        'variant': {
            'finalizers': [
                collapse
            ]
        },
        'setType': {
            'finalizers': [
                collapse
            ]
        },
        'baseType': {
            'finalizers': [
                collapse
            ]
        },
        'fileType': {
            'finalizers': [
                collapse
            ]
        },
        'pointerType': {
            'finalizers': [
                collapse
            ]
        },
        'variableDeclarationPart': {
            'finalizers': [
                collapse
            ]
        },
        'variableDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'procedureAndFunctionDeclarationPart': {
            'finalizers': [
                collapse
            ]
        },
        'procedureOrFunctionDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'procedureDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'formalParameterList': {
            'finalizers': [
                collapse
            ]
        },
        'formalParameterSection': {
            'finalizers': [
                collapse
            ]
        },
        'parameterGroup': {
            'finalizers': [
                collapse
            ]
        },
        'identifierList': {
            'finalizers': [
                collapse
            ]
        },
        'constList': {
            'finalizers': [
                collapse
            ]
        },
        'functionDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'resultType': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'unlabelledStatement': {
            'finalizers': [
                collapse
            ]
        },
        'simpleStatement': {
            'finalizers': [
                collapse
            ]
        },
        'assignmentStatement': {
            'finalizers': [
                collapse
            ]
        },
        'variable': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'simpleExpression': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'signedFactor': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'unsignedConstant': {
            'finalizers': [
                collapse
            ]
        },
        'functionDesignator': {
            'finalizers': [
                collapse
            ]
        },
        'parameterList': {
            'finalizers': [
                collapse
            ]
        },
        'set': {
            'finalizers': [
                collapse
            ]
        },
        'elementList': {
            'finalizers': [
                collapse
            ]
        },
        'element': {
            'finalizers': [
                collapse
            ]
        },
        'procedureStatement': {
            'finalizers': [
                collapse
            ]
        },
        'actualParameter': {
            'finalizers': [
                collapse
            ]
        },
        'gotoStatement': {
            'finalizers': [
                collapse
            ]
        },
        'emptyStatement': {
            'finalizers': [
                collapse
            ]
        },
        'empty': {
            'finalizers': [
                collapse
            ]
        },
        'structuredStatement': {
            'finalizers': [
                collapse
            ]
        },
        'compoundStatement': {
            'finalizers': [
                collapse
            ]
        },
        'statements': {
            'finalizers': [
                collapse
            ]
        },
        'conditionalStatement': {
            'finalizers': [
                collapse
            ]
        },
        'ifStatement': {
            'finalizers': [
                collapse
            ]
        },
        'caseStatement': {
            'finalizers': [
                collapse
            ]
        },
        'caseListElement': {
            'finalizers': [
                collapse
            ]
        },
        'repetetiveStatement': {
            'finalizers': [
                collapse
            ]
        },
        'whileStatement': {
            'finalizers': [
                collapse
            ]
        },
        'repeatStatement': {
            'finalizers': [
                collapse
            ]
        },
        'forStatement': {
            'finalizers': [
                collapse
            ]
        },
        'forList': {
            'finalizers': [
                collapse
            ]
        },
        'initialValue': {
            'finalizers': [
                collapse
            ]
        },
        'finalValue': {
            'finalizers': [
                collapse
            ]
        },
        'withStatement': {
            'finalizers': [
                collapse
            ]
        },
        'recordVariableList': {
            'finalizers': [
                collapse
            ]
        }
    }
};
