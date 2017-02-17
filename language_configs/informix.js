let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'informix',
    'grammar_file': 'informix.g4',
    'entry_rule': 'compilation_unit',
    'rules': {
        'compilation_unit': {
            'finalizers': [
                collapse
            ]
        },
        'identifier': {
            'finalizers': [
                collapse
            ]
        },
        'mainBlock': {
            'finalizers': [
                collapse
            ]
        },
        'mainStatements': {
            'finalizers': [
                collapse
            ]
        },
        'deferStatement': {
            'finalizers': [
                collapse
            ]
        },
        'functionOrReportDefinitions': {
            'finalizers': [
                collapse
            ]
        },
        'returnStatement': {
            'finalizers': [
                collapse
            ]
        },
        'functionDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'parameterList': {
            'finalizers': [
                collapse
            ]
        },
        'parameterGroup': {
            'finalizers': [
                collapse
            ]
        },
        'globalDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'typeDeclarations': {
            'finalizers': [
                collapse
            ]
        },
        'typeDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'variableDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'indirectType': {
            'finalizers': [
                collapse
            ]
        },
        'typeIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'largeType': {
            'finalizers': [
                collapse
            ]
        },
        'numberType': {
            'finalizers': [
                collapse
            ]
        },
        'charType': {
            'finalizers': [
                collapse
            ]
        },
        'timeType': {
            'finalizers': [
                collapse
            ]
        },
        'datetimeQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'intervalQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'unitType': {
            'finalizers': [
                collapse
            ]
        },
        'yearQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'monthQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'dayQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'hourQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'minuteQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'secondQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'fractionQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'structuredType': {
            'finalizers': [
                collapse
            ]
        },
        'recordType': {
            'finalizers': [
                collapse
            ]
        },
        'arrayIndexer': {
            'finalizers': [
                collapse
            ]
        },
        'arrayType': {
            'finalizers': [
                collapse
            ]
        },
        'dynArrayType': {
            'finalizers': [
                collapse
            ]
        },
        'string': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'codeBlock': {
            'finalizers': [
                collapse
            ]
        },
        'label': {
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
        'runStatement': {
            'finalizers': [
                collapse
            ]
        },
        'assignmentStatement': {
            'finalizers': [
                collapse
            ]
        },
        'procedureStatement': {
            'finalizers': [
                collapse
            ]
        },
        'procedureIdentifier': {
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
        'condition': {
            'finalizers': [
                collapse
            ]
        },
        'logicalTerm': {
            'finalizers': [
                collapse
            ]
        },
        'logicalFactor': {
            'finalizers': [
                collapse
            ]
        },
        'quantifiedFactor': {
            'finalizers': [
                collapse
            ]
        },
        'expressionSet': {
            'finalizers': [
                collapse
            ]
        },
        'subquery': {
            'finalizers': [
                collapse
            ]
        },
        'sqlExpression': {
            'finalizers': [
                collapse
            ]
        },
        'sqlAlias': {
            'finalizers': [
                collapse
            ]
        },
        'sqlTerm': {
            'finalizers': [
                collapse
            ]
        },
        'sqlMultiply': {
            'finalizers': [
                collapse
            ]
        },
        'sqlFactor': {
            'finalizers': [
                collapse
            ]
        },
        'sqlFactor2': {
            'finalizers': [
                collapse
            ]
        },
        'sqlExpressionList': {
            'finalizers': [
                collapse
            ]
        },
        'sqlLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'sqlVariable': {
            'finalizers': [
                collapse
            ]
        },
        'sqlFunction': {
            'finalizers': [
                collapse
            ]
        },
        'dateFunction': {
            'finalizers': [
                collapse
            ]
        },
        'numberFunction': {
            'finalizers': [
                collapse
            ]
        },
        'charFunction': {
            'finalizers': [
                collapse
            ]
        },
        'groupFunction': {
            'finalizers': [
                collapse
            ]
        },
        'otherFunction': {
            'finalizers': [
                collapse
            ]
        },
        'sqlPseudoColumn': {
            'finalizers': [
                collapse
            ]
        },
        'relationalOperator': {
            'finalizers': [
                collapse
            ]
        },
        'ifCondition': {
            'finalizers': [
                collapse
            ]
        },
        'ifCondition2': {
            'finalizers': [
                collapse
            ]
        },
        'ifLogicalTerm': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'ifLogicalFactor': {
            'finalizers': [
                collapse
            ]
        },
        'simpleExpression': {
            'finalizers': [
                collapse
            ]
        },
        'addingOperator': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'multiplyingOperator': {
            'finalizers': [
                collapse
            ]
        },
        'factor': {
            'finalizers': [
                collapse
            ]
        },
        'functionDesignator': {
            'finalizers': [
                collapse
            ]
        },
        'functionIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'unsignedConstant': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        },
        'numericConstant': {
            'finalizers': [
                collapse
            ]
        },
        'variable': {
            'finalizers': [
                collapse
            ]
        },
        'entireVariable': {
            'finalizers': [
                collapse
            ]
        },
        'variableIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'indexingVariable': {
            'finalizers': [
                collapse
            ]
        },
        'componentVariable': {
            'finalizers': [
                collapse
            ]
        },
        'recordVariable': {
            'finalizers': [
                collapse
            ]
        },
        'fieldIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'structuredStatement': {
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
        'controlVariable': {
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
        'forEachStatement': {
            'finalizers': [
                collapse
            ]
        },
        'variableList': {
            'finalizers': [
                collapse
            ]
        },
        'variableOrConstantList': {
            'finalizers': [
                collapse
            ]
        },
        'caseStatement': {
            'finalizers': [
                collapse
            ]
        },
        'otherFGLStatement': {
            'finalizers': [
                collapse
            ]
        },
        'otherProgramFlowStatement': {
            'finalizers': [
                collapse
            ]
        },
        'exitTypes': {
            'finalizers': [
                collapse
            ]
        },
        'exitStatements': {
            'finalizers': [
                collapse
            ]
        },
        'continueStatements': {
            'finalizers': [
                collapse
            ]
        },
        'otherStorageStatement': {
            'finalizers': [
                collapse
            ]
        },
        'printExpressionItem': {
            'finalizers': [
                collapse
            ]
        },
        'printExpressionList': {
            'finalizers': [
                collapse
            ]
        },
        'reportStatement': {
            'finalizers': [
                collapse
            ]
        },
        'thruNotation': {
            'finalizers': [
                collapse
            ]
        },
        'fieldName': {
            'finalizers': [
                collapse
            ]
        },
        'fieldList': {
            'finalizers': [
                collapse
            ]
        },
        'keyList': {
            'finalizers': [
                collapse
            ]
        },
        'constructEvents': {
            'finalizers': [
                collapse
            ]
        },
        'constructInsideStatement': {
            'finalizers': [
                collapse
            ]
        },
        'specialAttribute': {
            'finalizers': [
                collapse
            ]
        },
        'attribute': {
            'finalizers': [
                collapse
            ]
        },
        'attributeList': {
            'finalizers': [
                collapse
            ]
        },
        'constructGroupStatement': {
            'finalizers': [
                collapse
            ]
        },
        'constructStatement': {
            'finalizers': [
                collapse
            ]
        },
        'displayArrayStatement': {
            'finalizers': [
                collapse
            ]
        },
        'displayInsideStatement': {
            'finalizers': [
                collapse
            ]
        },
        'displayEvents': {
            'finalizers': [
                collapse
            ]
        },
        'displayStatement': {
            'finalizers': [
                collapse
            ]
        },
        'errorStatement': {
            'finalizers': [
                collapse
            ]
        },
        'messageStatement': {
            'finalizers': [
                collapse
            ]
        },
        'promptStatement': {
            'finalizers': [
                collapse
            ]
        },
        'inputEvents': {
            'finalizers': [
                collapse
            ]
        },
        'inputInsideStatement': {
            'finalizers': [
                collapse
            ]
        },
        'inputGroupStatement': {
            'finalizers': [
                collapse
            ]
        },
        'inputStatement': {
            'finalizers': [
                collapse
            ]
        },
        'inputArrayStatement': {
            'finalizers': [
                collapse
            ]
        },
        'menuEvents': {
            'finalizers': [
                collapse
            ]
        },
        'menuInsideStatement': {
            'finalizers': [
                collapse
            ]
        },
        'menuGroupStatement': {
            'finalizers': [
                collapse
            ]
        },
        'menuStatement': {
            'finalizers': [
                collapse
            ]
        },
        'reservedLinePosition': {
            'finalizers': [
                collapse
            ]
        },
        'specialWindowAttribute': {
            'finalizers': [
                collapse
            ]
        },
        'windowAttribute': {
            'finalizers': [
                collapse
            ]
        },
        'windowAttributeList': {
            'finalizers': [
                collapse
            ]
        },
        'optionStatement': {
            'finalizers': [
                collapse
            ]
        },
        'optionsStatement': {
            'finalizers': [
                collapse
            ]
        },
        'screenStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sqlStatements': {
            'finalizers': [
                collapse
            ]
        },
        'cursorManipulationStatement': {
            'finalizers': [
                collapse
            ]
        },
        'columnsList': {
            'finalizers': [
                collapse
            ]
        },
        'statementId': {
            'finalizers': [
                collapse
            ]
        },
        'cursorName': {
            'finalizers': [
                collapse
            ]
        },
        'dataType': {
            'finalizers': [
                collapse
            ]
        },
        'columnItem': {
            'finalizers': [
                collapse
            ]
        },
        'dataDefinitionStatement': {
            'finalizers': [
                collapse
            ]
        },
        'dataManipulationStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sqlSelectStatement': {
            'finalizers': [
                collapse
            ]
        },
        'columnsTableId': {
            'finalizers': [
                collapse
            ]
        },
        'selectList': {
            'finalizers': [
                collapse
            ]
        },
        'headSelectStatement': {
            'finalizers': [
                collapse
            ]
        },
        'tableQualifier': {
            'finalizers': [
                collapse
            ]
        },
        'tableIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'fromTable': {
            'finalizers': [
                collapse
            ]
        },
        'tableExpression': {
            'finalizers': [
                collapse
            ]
        },
        'fromSelectStatement': {
            'finalizers': [
                collapse
            ]
        },
        'aliasName': {
            'finalizers': [
                collapse
            ]
        },
        'mainSelectStatement': {
            'finalizers': [
                collapse
            ]
        },
        'unionSelectStatement': {
            'finalizers': [
                collapse
            ]
        },
        'simpleSelectStatement': {
            'finalizers': [
                collapse
            ]
        },
        'whereStatement': {
            'finalizers': [
                collapse
            ]
        },
        'groupByStatement': {
            'finalizers': [
                collapse
            ]
        },
        'havingStatement': {
            'finalizers': [
                collapse
            ]
        },
        'orderbyColumn': {
            'finalizers': [
                collapse
            ]
        },
        'orderbyStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sqlLoadStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sqlUnLoadStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sqlInsertStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sqlUpdateStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sqlDeleteStatement': {
            'finalizers': [
                collapse
            ]
        },
        'actualParameterList': {
            'finalizers': [
                collapse
            ]
        },
        'dynamicManagementStatement': {
            'finalizers': [
                collapse
            ]
        },
        'queryOptimizationStatement': {
            'finalizers': [
                collapse
            ]
        },
        'databaseDeclaration': {
            'finalizers': [
                collapse
            ]
        },
        'clientServerStatement': {
            'finalizers': [
                collapse
            ]
        },
        'dataIntegrityStatement': {
            'finalizers': [
                collapse
            ]
        },
        'wheneverStatement': {
            'finalizers': [
                collapse
            ]
        },
        'wheneverType': {
            'finalizers': [
                collapse
            ]
        },
        'wheneverFlow': {
            'finalizers': [
                collapse
            ]
        },
        'reportDefinition': {
            'finalizers': [
                collapse
            ]
        },
        'outputReport': {
            'finalizers': [
                collapse
            ]
        },
        'formatReport': {
            'finalizers': [
                collapse
            ]
        },
        'eol': {
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
        'constantIdentifier': {
            'finalizers': [
                collapse
            ]
        }
    }
};
