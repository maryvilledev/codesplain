let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Protobuf3',
    'grammar_file': 'Protobuf3.g4',
    'entry_rule': 'proto',
    'rules': {
        'proto': {
            'finalizers': [
                collapse
            ]
        },
        'syntax': {
            'finalizers': [
                collapse
            ]
        },
        'importStatement': {
            'finalizers': [
                collapse
            ]
        },
        'packageStatement': {
            'finalizers': [
                collapse
            ]
        },
        'option': {
            'finalizers': [
                collapse
            ]
        },
        'optionName': {
            'finalizers': [
                collapse
            ]
        },
        'topLevelDef': {
            'finalizers': [
                collapse
            ]
        },
        'message': {
            'finalizers': [
                collapse
            ]
        },
        'messageBody': {
            'finalizers': [
                collapse
            ]
        },
        'enumDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'enumBody': {
            'finalizers': [
                collapse
            ]
        },
        'enumField': {
            'finalizers': [
                collapse
            ]
        },
        'enumValueOption': {
            'finalizers': [
                collapse
            ]
        },
        'service': {
            'finalizers': [
                collapse
            ]
        },
        'rpc': {
            'finalizers': [
                collapse
            ]
        },
        'reserved': {
            'finalizers': [
                collapse
            ]
        },
        'ranges': {
            'finalizers': [
                collapse
            ]
        },
        'range': {
            'finalizers': [
                collapse
            ]
        },
        'fieldNames': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'fieldNumber': {
            'finalizers': [
                collapse
            ]
        },
        'field': {
            'finalizers': [
                collapse
            ]
        },
        'fieldOptions': {
            'finalizers': [
                collapse
            ]
        },
        'fieldOption': {
            'finalizers': [
                collapse
            ]
        },
        'oneof': {
            'finalizers': [
                collapse
            ]
        },
        'oneofField': {
            'finalizers': [
                collapse
            ]
        },
        'mapField': {
            'finalizers': [
                collapse
            ]
        },
        'keyType': {
            'finalizers': [
                collapse
            ]
        },
        'fullIdent': {
            'finalizers': [
                collapse
            ]
        },
        'messageName': {
            'finalizers': [
                collapse
            ]
        },
        'enumName': {
            'finalizers': [
                collapse
            ]
        },
        'messageOrEnumName': {
            'finalizers': [
                collapse
            ]
        },
        'fieldName': {
            'finalizers': [
                collapse
            ]
        },
        'oneofName': {
            'finalizers': [
                collapse
            ]
        },
        'mapName': {
            'finalizers': [
                collapse
            ]
        },
        'serviceName': {
            'finalizers': [
                collapse
            ]
        },
        'rpcName': {
            'finalizers': [
                collapse
            ]
        },
        'messageType': {
            'finalizers': [
                collapse
            ]
        },
        'messageOrEnumType': {
            'finalizers': [
                collapse
            ]
        },
        'emptyStatement': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        }
    }
};
