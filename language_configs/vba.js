let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'vba',
    'grammar_file': 'vba.g4',
    'entry_rule': 'startRule',
    'rules': {
        'startRule': {
            'finalizers': [
                collapse
            ]
        },
        'module': {
            'finalizers': [
                collapse
            ]
        },
        'moduleHeader': {
            'finalizers': [
                collapse
            ]
        },
        'moduleConfig': {
            'finalizers': [
                collapse
            ]
        },
        'moduleConfigElement': {
            'finalizers': [
                collapse
            ]
        },
        'moduleAttributes': {
            'finalizers': [
                collapse
            ]
        },
        'moduleDeclarations': {
            'finalizers': [
                collapse
            ]
        },
        'moduleOption': {
            'finalizers': [
                collapse
            ]
        },
        'moduleDeclarationsElement': {
            'finalizers': [
                collapse
            ]
        },
        'macroStmt': {
            'finalizers': [
                collapse
            ]
        },
        'moduleBody': {
            'finalizers': [
                collapse
            ]
        },
        'moduleBodyElement': {
            'finalizers': [
                collapse
            ]
        },
        'attributeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'block': {
            'finalizers': [
                collapse
            ]
        },
        'blockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'appactivateStmt': {
            'finalizers': [
                collapse
            ]
        },
        'beepStmt': {
            'finalizers': [
                collapse
            ]
        },
        'chdirStmt': {
            'finalizers': [
                collapse
            ]
        },
        'chdriveStmt': {
            'finalizers': [
                collapse
            ]
        },
        'closeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'constStmt': {
            'finalizers': [
                collapse
            ]
        },
        'constSubStmt': {
            'finalizers': [
                collapse
            ]
        },
        'dateStmt': {
            'finalizers': [
                collapse
            ]
        },
        'declareStmt': {
            'finalizers': [
                collapse
            ]
        },
        'deftypeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'deleteSettingStmt': {
            'finalizers': [
                collapse
            ]
        },
        'doLoopStmt': {
            'finalizers': [
                collapse
            ]
        },
        'endStmt': {
            'finalizers': [
                collapse
            ]
        },
        'enumerationStmt': {
            'finalizers': [
                collapse
            ]
        },
        'enumerationStmt_Constant': {
            'finalizers': [
                collapse
            ]
        },
        'eraseStmt': {
            'finalizers': [
                collapse
            ]
        },
        'errorStmt': {
            'finalizers': [
                collapse
            ]
        },
        'eventStmt': {
            'finalizers': [
                collapse
            ]
        },
        'exitStmt': {
            'finalizers': [
                collapse
            ]
        },
        'filecopyStmt': {
            'finalizers': [
                collapse
            ]
        },
        'forEachStmt': {
            'finalizers': [
                collapse
            ]
        },
        'forNextStmt': {
            'finalizers': [
                collapse
            ]
        },
        'functionStmt': {
            'finalizers': [
                collapse
            ]
        },
        'getStmt': {
            'finalizers': [
                collapse
            ]
        },
        'goSubStmt': {
            'finalizers': [
                collapse
            ]
        },
        'goToStmt': {
            'finalizers': [
                collapse
            ]
        },
        'ifThenElseStmt': {
            'finalizers': [
                collapse
            ]
        },
        'ifBlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'ifConditionStmt': {
            'finalizers': [
                collapse
            ]
        },
        'ifElseIfBlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'ifElseBlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'implementsStmt': {
            'finalizers': [
                collapse
            ]
        },
        'inputStmt': {
            'finalizers': [
                collapse
            ]
        },
        'killStmt': {
            'finalizers': [
                collapse
            ]
        },
        'letStmt': {
            'finalizers': [
                collapse
            ]
        },
        'lineInputStmt': {
            'finalizers': [
                collapse
            ]
        },
        'loadStmt': {
            'finalizers': [
                collapse
            ]
        },
        'lockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'lsetStmt': {
            'finalizers': [
                collapse
            ]
        },
        'macroConstStmt': {
            'finalizers': [
                collapse
            ]
        },
        'macroIfThenElseStmt': {
            'finalizers': [
                collapse
            ]
        },
        'macroIfBlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'macroElseIfBlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'macroElseBlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'midStmt': {
            'finalizers': [
                collapse
            ]
        },
        'mkdirStmt': {
            'finalizers': [
                collapse
            ]
        },
        'nameStmt': {
            'finalizers': [
                collapse
            ]
        },
        'onErrorStmt': {
            'finalizers': [
                collapse
            ]
        },
        'onGoToStmt': {
            'finalizers': [
                collapse
            ]
        },
        'onGoSubStmt': {
            'finalizers': [
                collapse
            ]
        },
        'openStmt': {
            'finalizers': [
                collapse
            ]
        },
        'outputList': {
            'finalizers': [
                collapse
            ]
        },
        'outputList_Expression': {
            'finalizers': [
                collapse
            ]
        },
        'printStmt': {
            'finalizers': [
                collapse
            ]
        },
        'propertyGetStmt': {
            'finalizers': [
                collapse
            ]
        },
        'propertySetStmt': {
            'finalizers': [
                collapse
            ]
        },
        'propertyLetStmt': {
            'finalizers': [
                collapse
            ]
        },
        'putStmt': {
            'finalizers': [
                collapse
            ]
        },
        'raiseEventStmt': {
            'finalizers': [
                collapse
            ]
        },
        'randomizeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'redimStmt': {
            'finalizers': [
                collapse
            ]
        },
        'redimSubStmt': {
            'finalizers': [
                collapse
            ]
        },
        'resetStmt': {
            'finalizers': [
                collapse
            ]
        },
        'resumeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'returnStmt': {
            'finalizers': [
                collapse
            ]
        },
        'rmdirStmt': {
            'finalizers': [
                collapse
            ]
        },
        'rsetStmt': {
            'finalizers': [
                collapse
            ]
        },
        'savepictureStmt': {
            'finalizers': [
                collapse
            ]
        },
        'saveSettingStmt': {
            'finalizers': [
                collapse
            ]
        },
        'seekStmt': {
            'finalizers': [
                collapse
            ]
        },
        'selectCaseStmt': {
            'finalizers': [
                collapse
            ]
        },
        'sC_Selection': {
            'finalizers': [
                collapse
            ]
        },
        'sC_Case': {
            'finalizers': [
                collapse
            ]
        },
        'sC_Cond': {
            'finalizers': [
                collapse
            ]
        },
        'sendkeysStmt': {
            'finalizers': [
                collapse
            ]
        },
        'setattrStmt': {
            'finalizers': [
                collapse
            ]
        },
        'setStmt': {
            'finalizers': [
                collapse
            ]
        },
        'stopStmt': {
            'finalizers': [
                collapse
            ]
        },
        'subStmt': {
            'finalizers': [
                collapse
            ]
        },
        'timeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'typeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'typeStmt_Element': {
            'finalizers': [
                collapse
            ]
        },
        'typeOfStmt': {
            'finalizers': [
                collapse
            ]
        },
        'unloadStmt': {
            'finalizers': [
                collapse
            ]
        },
        'unlockStmt': {
            'finalizers': [
                collapse
            ]
        },
        'valueStmt': {
            'finalizers': [
                collapse
            ]
        },
        'variableStmt': {
            'finalizers': [
                collapse
            ]
        },
        'variableListStmt': {
            'finalizers': [
                collapse
            ]
        },
        'variableSubStmt': {
            'finalizers': [
                collapse
            ]
        },
        'whileWendStmt': {
            'finalizers': [
                collapse
            ]
        },
        'widthStmt': {
            'finalizers': [
                collapse
            ]
        },
        'withStmt': {
            'finalizers': [
                collapse
            ]
        },
        'writeStmt': {
            'finalizers': [
                collapse
            ]
        },
        'fileNumber': {
            'finalizers': [
                collapse
            ]
        },
        'explicitCallStmt': {
            'finalizers': [
                collapse
            ]
        },
        'eCS_ProcedureCall': {
            'finalizers': [
                collapse
            ]
        },
        'eCS_MemberProcedureCall': {
            'finalizers': [
                collapse
            ]
        },
        'implicitCallStmt_InBlock': {
            'finalizers': [
                collapse
            ]
        },
        'iCS_B_MemberProcedureCall': {
            'finalizers': [
                collapse
            ]
        },
        'iCS_B_ProcedureCall': {
            'finalizers': [
                collapse
            ]
        },
        'implicitCallStmt_InStmt': {
            'finalizers': [
                collapse
            ]
        },
        'iCS_S_VariableOrProcedureCall': {
            'finalizers': [
                collapse
            ]
        },
        'iCS_S_ProcedureOrArrayCall': {
            'finalizers': [
                collapse
            ]
        },
        'iCS_S_MembersCall': {
            'finalizers': [
                collapse
            ]
        },
        'iCS_S_MemberCall': {
            'finalizers': [
                collapse
            ]
        },
        'iCS_S_DictionaryCall': {
            'finalizers': [
                collapse
            ]
        },
        'argsCall': {
            'finalizers': [
                collapse
            ]
        },
        'argCall': {
            'finalizers': [
                collapse
            ]
        },
        'dictionaryCallStmt': {
            'finalizers': [
                collapse
            ]
        },
        'argList': {
            'finalizers': [
                collapse
            ]
        },
        'arg': {
            'finalizers': [
                collapse
            ]
        },
        'argDefaultValue': {
            'finalizers': [
                collapse
            ]
        },
        'subscripts': {
            'finalizers': [
                collapse
            ]
        },
        'subscript': {
            'finalizers': [
                collapse
            ]
        },
        'ambiguousIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'asTypeClause': {
            'finalizers': [
                collapse
            ]
        },
        'baseType': {
            'finalizers': [
                collapse
            ]
        },
        'certainIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'comparisonOperator': {
            'finalizers': [
                collapse
            ]
        },
        'complexType': {
            'finalizers': [
                collapse
            ]
        },
        'fieldLength': {
            'finalizers': [
                collapse
            ]
        },
        'letterrange': {
            'finalizers': [
                collapse
            ]
        },
        'lineLabel': {
            'finalizers': [
                collapse
            ]
        },
        'literal': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'typeHint': {
            'finalizers': [
                collapse
            ]
        },
        'visibility': {
            'finalizers': [
                collapse
            ]
        },
        'ambiguousKeyword': {
            'finalizers': [
                collapse
            ]
        },
        'remComment': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        },
        'endOfLine': {
            'finalizers': [
                collapse
            ]
        },
        'endOfStatement': {
            'finalizers': [
                collapse
            ]
        }
    }
};
