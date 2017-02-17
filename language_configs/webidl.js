let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'WebIDL',
    'grammar_file': 'WebIDL.g4',
    'entry_rule': 'webIDL',
    'rules': {
        'webIDL': {
            'finalizers': [
                collapse
            ]
        },
        'definitions': {
            'finalizers': [
                collapse
            ]
        },
        'definition': {
            'finalizers': [
                collapse
            ]
        },
        'callbackOrInterface': {
            'finalizers': [
                collapse
            ]
        },
        'callbackRestOrInterface': {
            'finalizers': [
                collapse
            ]
        },
        'interface_': {
            'finalizers': [
                collapse
            ]
        },
        'class_': {
            'finalizers': [
                collapse
            ]
        },
        'partial': {
            'finalizers': [
                collapse
            ]
        },
        'partialDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'partialInterface': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceMembers': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceMember': {
            'finalizers': [
                collapse
            ]
        },
        'dictionary': {
            'finalizers': [
                collapse
            ]
        },
        'dictionaryMembers': {
            'finalizers': [
                collapse
            ]
        },
        'dictionaryMember': {
            'finalizers': [
                collapse
            ]
        },
        'required': {
            'finalizers': [
                collapse
            ]
        },
        'partialDictionary': {
            'finalizers': [
                collapse
            ]
        },
        'default_': {
            'finalizers': [
                collapse
            ]
        },
        'defaultValue': {
            'finalizers': [
                collapse
            ]
        },
        'inheritance': {
            'finalizers': [
                collapse
            ]
        },
        'extension': {
            'finalizers': [
                collapse
            ]
        },
        'enum_': {
            'finalizers': [
                collapse
            ]
        },
        'enumValueList': {
            'finalizers': [
                collapse
            ]
        },
        'enumValueListComma': {
            'finalizers': [
                collapse
            ]
        },
        'enumValueListString': {
            'finalizers': [
                collapse
            ]
        },
        'callbackRest': {
            'finalizers': [
                collapse
            ]
        },
        'typedef': {
            'finalizers': [
                collapse
            ]
        },
        'implementsStatement': {
            'finalizers': [
                collapse
            ]
        },
        'const_': {
            'finalizers': [
                collapse
            ]
        },
        'constValue': {
            'finalizers': [
                collapse
            ]
        },
        'booleanLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'floatLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'serializer': {
            'finalizers': [
                collapse
            ]
        },
        'serializerRest': {
            'finalizers': [
                collapse
            ]
        },
        'serializationPattern': {
            'finalizers': [
                collapse
            ]
        },
        'serializationPatternMap': {
            'finalizers': [
                collapse
            ]
        },
        'serializationPatternList': {
            'finalizers': [
                collapse
            ]
        },
        'stringifier': {
            'finalizers': [
                collapse
            ]
        },
        'stringifierRest': {
            'finalizers': [
                collapse
            ]
        },
        'staticMember': {
            'finalizers': [
                collapse
            ]
        },
        'staticMemberRest': {
            'finalizers': [
                collapse
            ]
        },
        'readonlyMember': {
            'finalizers': [
                collapse
            ]
        },
        'readonlyMemberRest': {
            'finalizers': [
                collapse
            ]
        },
        'readWriteAttribute': {
            'finalizers': [
                collapse
            ]
        },
        'attributeRest': {
            'finalizers': [
                collapse
            ]
        },
        'attributeName': {
            'finalizers': [
                collapse
            ]
        },
        'attributeNameKeyword': {
            'finalizers': [
                collapse
            ]
        },
        'inherit': {
            'finalizers': [
                collapse
            ]
        },
        'readOnly': {
            'finalizers': [
                collapse
            ]
        },
        'operation': {
            'finalizers': [
                collapse
            ]
        },
        'specialOperation': {
            'finalizers': [
                collapse
            ]
        },
        'specials': {
            'finalizers': [
                collapse
            ]
        },
        'special': {
            'finalizers': [
                collapse
            ]
        },
        'operationRest': {
            'finalizers': [
                collapse
            ]
        },
        'optionalIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'argumentList': {
            'finalizers': [
                collapse
            ]
        },
        'arguments': {
            'finalizers': [
                collapse
            ]
        },
        'argument': {
            'finalizers': [
                collapse
            ]
        },
        'optionalOrRequiredArgument': {
            'finalizers': [
                collapse
            ]
        },
        'argumentName': {
            'finalizers': [
                collapse
            ]
        },
        'ellipsis': {
            'finalizers': [
                collapse
            ]
        },
        'iterable': {
            'finalizers': [
                collapse
            ]
        },
        'optionalType': {
            'finalizers': [
                collapse
            ]
        },
        'readWriteMaplike': {
            'finalizers': [
                collapse
            ]
        },
        'readWriteSetlike': {
            'finalizers': [
                collapse
            ]
        },
        'maplikeRest': {
            'finalizers': [
                collapse
            ]
        },
        'setlikeRest': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeList': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributes': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttribute': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeRest': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeInner': {
            'finalizers': [
                collapse
            ]
        },
        'other': {
            'finalizers': [
                collapse
            ]
        },
        'argumentNameKeyword': {
            'finalizers': [
                collapse
            ]
        },
        'otherOrComma': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'singleType': {
            'finalizers': [
                collapse
            ]
        },
        'unionType': {
            'finalizers': [
                collapse
            ]
        },
        'unionMemberType': {
            'finalizers': [
                collapse
            ]
        },
        'unionMemberTypes': {
            'finalizers': [
                collapse
            ]
        },
        'nonAnyType': {
            'finalizers': [
                collapse
            ]
        },
        'bufferRelatedType': {
            'finalizers': [
                collapse
            ]
        },
        'constType': {
            'finalizers': [
                collapse
            ]
        },
        'primitiveType': {
            'finalizers': [
                collapse
            ]
        },
        'unrestrictedFloatType': {
            'finalizers': [
                collapse
            ]
        },
        'floatType': {
            'finalizers': [
                collapse
            ]
        },
        'unsignedIntegerType': {
            'finalizers': [
                collapse
            ]
        },
        'integerType': {
            'finalizers': [
                collapse
            ]
        },
        'optionalLong': {
            'finalizers': [
                collapse
            ]
        },
        'promiseType': {
            'finalizers': [
                collapse
            ]
        },
        'null_': {
            'finalizers': [
                collapse
            ]
        },
        'returnType': {
            'finalizers': [
                collapse
            ]
        },
        'identifierList': {
            'finalizers': [
                collapse
            ]
        },
        'identifiers': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeNoArgs': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeArgList': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeIdent': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeIdentList': {
            'finalizers': [
                collapse
            ]
        },
        'extendedAttributeNamedArgList': {
            'finalizers': [
                collapse
            ]
        }
    }
};
