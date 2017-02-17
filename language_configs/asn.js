let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'ASN',
    'grammar_file': 'ASN.g4',
    'entry_rule': 'author',
    'rules': {
        'moduleDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'tagDefault': {
            'finalizers': [
                collapse
            ]
        },
        'extensionDefault': {
            'finalizers': [
                collapse
            ]
        },
        'moduleBody': {
            'finalizers': [
                collapse
            ]
        },
        'exports': {
            'finalizers': [
                collapse
            ]
        },
        'symbolsExported': {
            'finalizers': [
                collapse
            ]
        },
        'imports': {
            'finalizers': [
                collapse
            ]
        },
        'symbolsImported': {
            'finalizers': [
                collapse
            ]
        },
        'symbolsFromModuleList': {
            'finalizers': [
                collapse
            ]
        },
        'symbolsFromModule': {
            'finalizers': [
                collapse
            ]
        },
        'globalModuleReference': {
            'finalizers': [
                collapse
            ]
        },
        'assignedIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'symbolList': {
            'finalizers': [
                collapse
            ]
        },
        'symbol': {
            'finalizers': [
                collapse
            ]
        },
        'assignmentList': {
            'finalizers': [
                collapse
            ]
        },
        'assignment': {
            'finalizers': [
                collapse
            ]
        },
        'sequenceType': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAndException': {
            'finalizers': [
                collapse
            ]
        },
        'optionalExtensionMarker': {
            'finalizers': [
                collapse
            ]
        },
        'componentTypeLists': {
            'finalizers': [
                collapse
            ]
        },
        'rootComponentTypeList': {
            'finalizers': [
                collapse
            ]
        },
        'componentTypeList': {
            'finalizers': [
                collapse
            ]
        },
        'componentType': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAdditions': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAdditionList': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAddition': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAdditionGroup': {
            'finalizers': [
                collapse
            ]
        },
        'versionNumber': {
            'finalizers': [
                collapse
            ]
        },
        'sequenceOfType': {
            'finalizers': [
                collapse
            ]
        },
        'sizeConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'parameterizedAssignment': {
            'finalizers': [
                collapse
            ]
        },
        'parameterList': {
            'finalizers': [
                collapse
            ]
        },
        'parameter': {
            'finalizers': [
                collapse
            ]
        },
        'paramGovernor': {
            'finalizers': [
                collapse
            ]
        },
        'governor': {
            'finalizers': [
                collapse
            ]
        },
        'objectClassAssignment': {
            'finalizers': [
                collapse
            ]
        },
        'objectClass': {
            'finalizers': [
                collapse
            ]
        },
        'definedObjectClass': {
            'finalizers': [
                collapse
            ]
        },
        'usefulObjectClassReference': {
            'finalizers': [
                collapse
            ]
        },
        'externalObjectClassReference': {
            'finalizers': [
                collapse
            ]
        },
        'objectClassDefn': {
            'finalizers': [
                collapse
            ]
        },
        'withSyntaxSpec': {
            'finalizers': [
                collapse
            ]
        },
        'syntaxList': {
            'finalizers': [
                collapse
            ]
        },
        'tokenOrGroupSpec': {
            'finalizers': [
                collapse
            ]
        },
        'optionalGroup': {
            'finalizers': [
                collapse
            ]
        },
        'requiredToken': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'primitiveFieldName': {
            'finalizers': [
                collapse
            ]
        },
        'fieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'typeFieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'typeOptionalitySpec': {
            'finalizers': [
                collapse
            ]
        },
        'fixedTypeValueFieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'valueOptionalitySpec': {
            'finalizers': [
                collapse
            ]
        },
        'variableTypeValueFieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'fixedTypeValueSetFieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'valueSetOptionalitySpec': {
            'finalizers': [
                collapse
            ]
        },
        'object': {
            'finalizers': [
                collapse
            ]
        },
        'parameterizedObject': {
            'finalizers': [
                collapse
            ]
        },
        'definedObject': {
            'finalizers': [
                collapse
            ]
        },
        'objectSet': {
            'finalizers': [
                collapse
            ]
        },
        'objectSetSpec': {
            'finalizers': [
                collapse
            ]
        },
        'fieldName': {
            'finalizers': [
                collapse
            ]
        },
        'valueSet': {
            'finalizers': [
                collapse
            ]
        },
        'elementSetSpecs': {
            'finalizers': [
                collapse
            ]
        },
        'rootElementSetSpec': {
            'finalizers': [
                collapse
            ]
        },
        'additionalElementSetSpec': {
            'finalizers': [
                collapse
            ]
        },
        'elementSetSpec': {
            'finalizers': [
                collapse
            ]
        },
        'unions': {
            'finalizers': [
                collapse
            ]
        },
        'exclusions': {
            'finalizers': [
                collapse
            ]
        },
        'intersections': {
            'finalizers': [
                collapse
            ]
        },
        'unionMark': {
            'finalizers': [
                collapse
            ]
        },
        'intersectionMark': {
            'finalizers': [
                collapse
            ]
        },
        'elements': {
            'finalizers': [
                collapse
            ]
        },
        'objectSetElements': {
            'finalizers': [
                collapse
            ]
        },
        'intersectionElements': {
            'finalizers': [
                collapse
            ]
        },
        'subtypeElements': {
            'finalizers': [
                collapse
            ]
        },
        'variableTypeValueSetFieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'objectFieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'objectOptionalitySpec': {
            'finalizers': [
                collapse
            ]
        },
        'objectSetFieldSpec': {
            'finalizers': [
                collapse
            ]
        },
        'objectSetOptionalitySpec': {
            'finalizers': [
                collapse
            ]
        },
        'typeAssignment': {
            'finalizers': [
                collapse
            ]
        },
        'valueAssignment': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'builtinType': {
            'finalizers': [
                collapse
            ]
        },
        'objectClassFieldType': {
            'finalizers': [
                collapse
            ]
        },
        'setType': {
            'finalizers': [
                collapse
            ]
        },
        'setOfType': {
            'finalizers': [
                collapse
            ]
        },
        'referencedType': {
            'finalizers': [
                collapse
            ]
        },
        'definedType': {
            'finalizers': [
                collapse
            ]
        },
        'constraint': {
            'finalizers': [
                collapse
            ]
        },
        'constraintSpec': {
            'finalizers': [
                collapse
            ]
        },
        'userDefinedConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'generalConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'userDefinedConstraintParameter': {
            'finalizers': [
                collapse
            ]
        },
        'tableConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'simpleTableConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'contentsConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'subtypeConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        },
        'builtinValue': {
            'finalizers': [
                collapse
            ]
        },
        'objectIdentifierValue': {
            'finalizers': [
                collapse
            ]
        },
        'objIdComponentsList': {
            'finalizers': [
                collapse
            ]
        },
        'objIdComponents': {
            'finalizers': [
                collapse
            ]
        },
        'integerValue': {
            'finalizers': [
                collapse
            ]
        },
        'choiceValue': {
            'finalizers': [
                collapse
            ]
        },
        'enumeratedValue': {
            'finalizers': [
                collapse
            ]
        },
        'signedNumber': {
            'finalizers': [
                collapse
            ]
        },
        'choiceType': {
            'finalizers': [
                collapse
            ]
        },
        'alternativeTypeLists': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAdditionAlternatives': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAdditionAlternativesList': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAdditionAlternative': {
            'finalizers': [
                collapse
            ]
        },
        'extensionAdditionAlternativesGroup': {
            'finalizers': [
                collapse
            ]
        },
        'rootAlternativeTypeList': {
            'finalizers': [
                collapse
            ]
        },
        'alternativeTypeList': {
            'finalizers': [
                collapse
            ]
        },
        'namedType': {
            'finalizers': [
                collapse
            ]
        },
        'enumeratedType': {
            'finalizers': [
                collapse
            ]
        },
        'enumerations': {
            'finalizers': [
                collapse
            ]
        },
        'rootEnumeration': {
            'finalizers': [
                collapse
            ]
        },
        'enumeration': {
            'finalizers': [
                collapse
            ]
        },
        'enumerationItem': {
            'finalizers': [
                collapse
            ]
        },
        'namedNumber': {
            'finalizers': [
                collapse
            ]
        },
        'definedValue': {
            'finalizers': [
                collapse
            ]
        },
        'parameterizedValue': {
            'finalizers': [
                collapse
            ]
        },
        'simpleDefinedValue': {
            'finalizers': [
                collapse
            ]
        },
        'actualParameterList': {
            'finalizers': [
                collapse
            ]
        },
        'actualParameter': {
            'finalizers': [
                collapse
            ]
        },
        'exceptionSpec': {
            'finalizers': [
                collapse
            ]
        },
        'exceptionIdentification': {
            'finalizers': [
                collapse
            ]
        },
        'additionalEnumeration': {
            'finalizers': [
                collapse
            ]
        },
        'integerType': {
            'finalizers': [
                collapse
            ]
        },
        'namedNumberList': {
            'finalizers': [
                collapse
            ]
        },
        'objectidentifiertype': {
            'finalizers': [
                collapse
            ]
        },
        'componentRelationConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'atNotation': {
            'finalizers': [
                collapse
            ]
        },
        'level': {
            'finalizers': [
                collapse
            ]
        },
        'componentIdList': {
            'finalizers': [
                collapse
            ]
        },
        'octetStringType': {
            'finalizers': [
                collapse
            ]
        },
        'bitStringType': {
            'finalizers': [
                collapse
            ]
        },
        'namedBitList': {
            'finalizers': [
                collapse
            ]
        },
        'namedBit': {
            'finalizers': [
                collapse
            ]
        },
        'booleanValue': {
            'finalizers': [
                collapse
            ]
        }
    }
};
