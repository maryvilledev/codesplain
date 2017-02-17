let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Golang',
    'grammar_file': 'Golang.g4',
    'entry_rule': 'sourceFile',
    'rules': {
        'sourceFile': {
            'finalizers': [
                collapse
            ]
        },
        'packageClause': {
            'finalizers': [
                collapse
            ]
        },
        'importDecl': {
            'finalizers': [
                collapse
            ]
        },
        'importSpec': {
            'finalizers': [
                collapse
            ]
        },
        'importPath': {
            'finalizers': [
                collapse
            ]
        },
        'topLevelDecl': {
            'finalizers': [
                collapse
            ]
        },
        'declaration': {
            'finalizers': [
                collapse
            ]
        },
        'constDecl': {
            'finalizers': [
                collapse
            ]
        },
        'constSpec': {
            'finalizers': [
                collapse
            ]
        },
        'identifierList': {
            'finalizers': [
                collapse
            ]
        },
        'expressionList': {
            'finalizers': [
                collapse
            ]
        },
        'typeDecl': {
            'finalizers': [
                collapse
            ]
        },
        'typeSpec': {
            'finalizers': [
                collapse
            ]
        },
        'functionDecl': {
            'finalizers': [
                collapse
            ]
        },
        'function': {
            'finalizers': [
                collapse
            ]
        },
        'methodDecl': {
            'finalizers': [
                collapse
            ]
        },
        'receiver': {
            'finalizers': [
                collapse
            ]
        },
        'varDecl': {
            'finalizers': [
                collapse
            ]
        },
        'varSpec': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'statementList': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'simpleStmt': {
            'finalizers': [
                collapse
            ]
        },
        'expressionStmt': {
            'finalizers': [
                collapse
            ]
        },
        'sendStmt': {
            'finalizers': [
                collapse
            ]
        },
        'incDecStmt': {
            'finalizers': [
                collapse
            ]
        },
        'assignment': {
            'finalizers': [
                collapse
            ]
        },
        'assign_op': {
            'finalizers': [
                collapse
            ]
        },
        'shortVarDecl': {
            'finalizers': [
                collapse
            ]
        },
        'labeledStmt': {
            'finalizers': [
                collapse
            ]
        },
        'returnStmt': {
            'finalizers': [
                collapse
            ]
        },
        'breakStmt': {
            'finalizers': [
                collapse
            ]
        },
        'continueStmt': {
            'finalizers': [
                collapse
            ]
        },
        'gotoStmt': {
            'finalizers': [
                collapse
            ]
        },
        'fallthroughStmt': {
            'finalizers': [
                collapse
            ]
        },
        'deferStmt': {
            'finalizers': [
                collapse
            ]
        },
        'ifStmt': {
            'finalizers': [
                collapse
            ]
        },
        'switchStmt': {
            'finalizers': [
                collapse
            ]
        },
        'exprSwitchStmt': {
            'finalizers': [
                collapse
            ]
        },
        'exprCaseClause': {
            'finalizers': [
                collapse
            ]
        },
        'exprSwitchCase': {
            'finalizers': [
                collapse
            ]
        },
        'typeSwitchStmt': {
            'finalizers': [
                collapse
            ]
        },
        'typeSwitchGuard': {
            'finalizers': [
                collapse
            ]
        },
        'typeCaseClause': {
            'finalizers': [
                collapse
            ]
        },
        'typeSwitchCase': {
            'finalizers': [
                collapse
            ]
        },
        'typeList': {
            'finalizers': [
                collapse
            ]
        },
        'selectStmt': {
            'finalizers': [
                collapse
            ]
        },
        'commClause': {
            'finalizers': [
                collapse
            ]
        },
        'commCase': {
            'finalizers': [
                collapse
            ]
        },
        'recvStmt': {
            'finalizers': [
                collapse
            ]
        },
        'forStmt': {
            'finalizers': [
                collapse
            ]
        },
        'forClause': {
            'finalizers': [
                collapse
            ]
        },
        'rangeClause': {
            'finalizers': [
                collapse
            ]
        },
        'goStmt': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'typeName': {
            'finalizers': [
                collapse
            ]
        },
        'typeLit': {
            'finalizers': [
                collapse
            ]
        },
        'arrayType': {
            'finalizers': [
                collapse
            ]
        },
        'arrayLength': {
            'finalizers': [
                collapse
            ]
        },
        'elementType': {
            'finalizers': [
                collapse
            ]
        },
        'pointerType': {
            'finalizers': [
                collapse
            ]
        },
        'interfaceType': {
            'finalizers': [
                collapse
            ]
        },
        'sliceType': {
            'finalizers': [
                collapse
            ]
        },
        'mapType': {
            'finalizers': [
                collapse
            ]
        },
        'channelType': {
            'finalizers': [
                collapse
            ]
        },
        'methodSpec': {
            'finalizers': [
                collapse
            ]
        },
        'functionType': {
            'finalizers': [
                collapse
            ]
        },
        'signature': {
            'finalizers': [
                collapse
            ]
        },
        'result': {
            'finalizers': [
                collapse
            ]
        },
        'parameters': {
            'finalizers': [
                collapse
            ]
        },
        'parameterList': {
            'finalizers': [
                collapse
            ]
        },
        'parameterDecl': {
            'finalizers': [
                collapse
            ]
        },
        'operand': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'basicLit': {
            'finalizers': [
                collapse
            ]
        },
        'operandName': {
            'finalizers': [
                collapse
            ]
        },
        'qualifiedIdent': {
            'finalizers': [
                collapse
            ]
        },
        'compositeLit': {
            'finalizers': [
                collapse
            ]
        },
        'literalType': {
            'finalizers': [
                collapse
            ]
        },
        'literalValue': {
            'finalizers': [
                collapse
            ]
        },
        'elementList': {
            'finalizers': [
                collapse
            ]
        },
        'keyedElement': {
            'finalizers': [
                collapse
            ]
        },
        'key': {
            'finalizers': [
                collapse
            ]
        },
        'element': {
            'finalizers': [
                collapse
            ]
        },
        'structType': {
            'finalizers': [
                collapse
            ]
        },
        'fieldDecl': {
            'finalizers': [
                collapse
            ]
        },
        'anonymousField': {
            'finalizers': [
                collapse
            ]
        },
        'functionLit': {
            'finalizers': [
                collapse
            ]
        },
        'primaryExpr': {
            'finalizers': [
                collapse
            ]
        },
        'selector': {
            'finalizers': [
                collapse
            ]
        },
        'index': {
            'finalizers': [
                collapse
            ]
        },
        'slice': {
            'finalizers': [
                collapse
            ]
        },
        'typeAssertion': {
            'finalizers': [
                collapse
            ]
        },
        'arguments': {
            'finalizers': [
                collapse
            ]
        },
        'methodExpr': {
            'finalizers': [
                collapse
            ]
        },
        'receiverType': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'unaryExpr': {
            'finalizers': [
                collapse
            ]
        },
        'conversion': {
            'finalizers': [
                collapse
            ]
        },
        'eos': {
            'finalizers': [
                collapse
            ]
        }
    }
};
