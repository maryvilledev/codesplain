let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'fortran77',
    'grammar_file': 'fortran77.g4',
    'entry_rule': 'program',
    'rules': {
        'program': {
            'finalizers': [
                collapse
            ]
        },
        'executableUnit': {
            'finalizers': [
                collapse
            ]
        },
        'mainProgram': {
            'finalizers': [
                collapse
            ]
        },
        'functionSubprogram': {
            'finalizers': [
                collapse
            ]
        },
        'subroutineSubprogram': {
            'finalizers': [
                collapse
            ]
        },
        'blockdataSubprogram': {
            'finalizers': [
                collapse
            ]
        },
        'otherSpecificationStatement': {
            'finalizers': [
                collapse
            ]
        },
        'executableStatement': {
            'finalizers': [
                collapse
            ]
        },
        'programStatement': {
            'finalizers': [
                collapse
            ]
        },
        'seos': {
            'finalizers': [
                collapse
            ]
        },
        'entryStatement': {
            'finalizers': [
                collapse
            ]
        },
        'functionStatement': {
            'finalizers': [
                collapse
            ]
        },
        'blockdataStatement': {
            'finalizers': [
                collapse
            ]
        },
        'subroutineStatement': {
            'finalizers': [
                collapse
            ]
        },
        'namelist': {
            'finalizers': [
                collapse
            ]
        },
        'statement': {
            'finalizers': [
                collapse
            ]
        },
        'subprogramBody': {
            'finalizers': [
                collapse
            ]
        },
        'wholeStatement': {
            'finalizers': [
                collapse
            ]
        },
        'endStatement': {
            'finalizers': [
                collapse
            ]
        },
        'dimensionStatement': {
            'finalizers': [
                collapse
            ]
        },
        'arrayDeclarator': {
            'finalizers': [
                collapse
            ]
        },
        'arrayDeclarators': {
            'finalizers': [
                collapse
            ]
        },
        'arrayDeclaratorExtents': {
            'finalizers': [
                collapse
            ]
        },
        'arrayDeclaratorExtent': {
            'finalizers': [
                collapse
            ]
        },
        'equivalenceStatement': {
            'finalizers': [
                collapse
            ]
        },
        'equivEntityGroup': {
            'finalizers': [
                collapse
            ]
        },
        'equivEntity': {
            'finalizers': [
                collapse
            ]
        },
        'commonStatement': {
            'finalizers': [
                collapse
            ]
        },
        'commonName': {
            'finalizers': [
                collapse
            ]
        },
        'commonItem': {
            'finalizers': [
                collapse
            ]
        },
        'commonItems': {
            'finalizers': [
                collapse
            ]
        },
        'commonBlock': {
            'finalizers': [
                collapse
            ]
        },
        'typeStatement': {
            'finalizers': [
                collapse
            ]
        },
        'typeStatementNameList': {
            'finalizers': [
                collapse
            ]
        },
        'typeStatementName': {
            'finalizers': [
                collapse
            ]
        },
        'typeStatementNameCharList': {
            'finalizers': [
                collapse
            ]
        },
        'typeStatementNameChar': {
            'finalizers': [
                collapse
            ]
        },
        'typeStatementLenSpec': {
            'finalizers': [
                collapse
            ]
        },
        'typename': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'typenameLen': {
            'finalizers': [
                collapse
            ]
        },
        'pointerStatement': {
            'finalizers': [
                collapse
            ]
        },
        'pointerDecl': {
            'finalizers': [
                collapse
            ]
        },
        'implicitStatement': {
            'finalizers': [
                collapse
            ]
        },
        'implicitSpec': {
            'finalizers': [
                collapse
            ]
        },
        'implicitSpecs': {
            'finalizers': [
                collapse
            ]
        },
        'implicitNone': {
            'finalizers': [
                collapse
            ]
        },
        'implicitLetter': {
            'finalizers': [
                collapse
            ]
        },
        'implicitRange': {
            'finalizers': [
                collapse
            ]
        },
        'implicitLetters': {
            'finalizers': [
                collapse
            ]
        },
        'lenSpecification': {
            'finalizers': [
                collapse
            ]
        },
        'characterWithLen': {
            'finalizers': [
                collapse
            ]
        },
        'cwlLen': {
            'finalizers': [
                collapse
            ]
        },
        'parameterStatement': {
            'finalizers': [
                collapse
            ]
        },
        'paramlist': {
            'finalizers': [
                collapse
            ]
        },
        'paramassign': {
            'finalizers': [
                collapse
            ]
        },
        'externalStatement': {
            'finalizers': [
                collapse
            ]
        },
        'intrinsicStatement': {
            'finalizers': [
                collapse
            ]
        },
        'saveStatement': {
            'finalizers': [
                collapse
            ]
        },
        'saveEntity': {
            'finalizers': [
                collapse
            ]
        },
        'dataStatement': {
            'finalizers': [
                collapse
            ]
        },
        'dataStatementItem': {
            'finalizers': [
                collapse
            ]
        },
        'dataStatementMultiple': {
            'finalizers': [
                collapse
            ]
        },
        'dataStatementEntity': {
            'finalizers': [
                collapse
            ]
        },
        'dse1': {
            'finalizers': [
                collapse
            ]
        },
        'dse2': {
            'finalizers': [
                collapse
            ]
        },
        'dataImpliedDo': {
            'finalizers': [
                collapse
            ]
        },
        'dataImpliedDoRange': {
            'finalizers': [
                collapse
            ]
        },
        'dataImpliedDoList': {
            'finalizers': [
                collapse
            ]
        },
        'dataImpliedDoListWhat': {
            'finalizers': [
                collapse
            ]
        },
        'assignmentStatement': {
            'finalizers': [
                collapse
            ]
        },
        'gotoStatement': {
            'finalizers': [
                collapse
            ]
        },
        'unconditionalGoto': {
            'finalizers': [
                collapse
            ]
        },
        'computedGoto': {
            'finalizers': [
                collapse
            ]
        },
        'lblRef': {
            'finalizers': [
                collapse
            ]
        },
        'labelList': {
            'finalizers': [
                collapse
            ]
        },
        'assignedGoto': {
            'finalizers': [
                collapse
            ]
        },
        'ifStatement': {
            'finalizers': [
                collapse
            ]
        },
        'arithmeticIfStatement': {
            'finalizers': [
                collapse
            ]
        },
        'logicalIfStatement': {
            'finalizers': [
                collapse
            ]
        },
        'blockIfStatement': {
            'finalizers': [
                collapse
            ]
        },
        'firstIfBlock': {
            'finalizers': [
                collapse
            ]
        },
        'elseIfStatement': {
            'finalizers': [
                collapse
            ]
        },
        'elseStatement': {
            'finalizers': [
                collapse
            ]
        },
        'endIfStatement': {
            'finalizers': [
                collapse
            ]
        },
        'doStatement': {
            'finalizers': [
                collapse
            ]
        },
        'doVarArgs': {
            'finalizers': [
                collapse
            ]
        },
        'doWithLabel': {
            'finalizers': [
                collapse
            ]
        },
        'doBody': {
            'finalizers': [
                collapse
            ]
        },
        'doWithEndDo': {
            'finalizers': [
                collapse
            ]
        },
        'enddoStatement': {
            'finalizers': [
                collapse
            ]
        },
        'continueStatement': {
            'finalizers': [
                collapse
            ]
        },
        'stopStatement': {
            'finalizers': [
                collapse
            ]
        },
        'pauseStatement': {
            'finalizers': [
                collapse
            ]
        },
        'writeStatement': {
            'finalizers': [
                collapse
            ]
        },
        'readStatement': {
            'finalizers': [
                collapse
            ]
        },
        'printStatement': {
            'finalizers': [
                collapse
            ]
        },
        'controlInfoList': {
            'finalizers': [
                collapse
            ]
        },
        'controlErrSpec': {
            'finalizers': [
                collapse
            ]
        },
        'controlInfoListItem': {
            'finalizers': [
                collapse
            ]
        },
        'ioList': {
            'finalizers': [
                collapse
            ]
        },
        'ioListItem': {
            'finalizers': [
                collapse
            ]
        },
        'ioImpliedDoList': {
            'finalizers': [
                collapse
            ]
        },
        'openStatement': {
            'finalizers': [
                collapse
            ]
        },
        'openControl': {
            'finalizers': [
                collapse
            ]
        },
        'controlFmt': {
            'finalizers': [
                collapse
            ]
        },
        'controlUnit': {
            'finalizers': [
                collapse
            ]
        },
        'controlRec': {
            'finalizers': [
                collapse
            ]
        },
        'controlEnd': {
            'finalizers': [
                collapse
            ]
        },
        'controlErr': {
            'finalizers': [
                collapse
            ]
        },
        'controlIostat': {
            'finalizers': [
                collapse
            ]
        },
        'controlFile': {
            'finalizers': [
                collapse
            ]
        },
        'controlStatus': {
            'finalizers': [
                collapse
            ]
        },
        'controlAccess': {
            'finalizers': [
                collapse
            ]
        },
        'controlPosition': {
            'finalizers': [
                collapse
            ]
        },
        'controlForm': {
            'finalizers': [
                collapse
            ]
        },
        'controlRecl': {
            'finalizers': [
                collapse
            ]
        },
        'controlBlank': {
            'finalizers': [
                collapse
            ]
        },
        'controlExist': {
            'finalizers': [
                collapse
            ]
        },
        'controlOpened': {
            'finalizers': [
                collapse
            ]
        },
        'controlNumber': {
            'finalizers': [
                collapse
            ]
        },
        'controlNamed': {
            'finalizers': [
                collapse
            ]
        },
        'controlName': {
            'finalizers': [
                collapse
            ]
        },
        'controlSequential': {
            'finalizers': [
                collapse
            ]
        },
        'controlDirect': {
            'finalizers': [
                collapse
            ]
        },
        'controlFormatted': {
            'finalizers': [
                collapse
            ]
        },
        'controlUnformatted': {
            'finalizers': [
                collapse
            ]
        },
        'controlNextrec': {
            'finalizers': [
                collapse
            ]
        },
        'closeStatement': {
            'finalizers': [
                collapse
            ]
        },
        'closeControl': {
            'finalizers': [
                collapse
            ]
        },
        'inquireStatement': {
            'finalizers': [
                collapse
            ]
        },
        'inquireControl': {
            'finalizers': [
                collapse
            ]
        },
        'backspaceStatement': {
            'finalizers': [
                collapse
            ]
        },
        'endfileStatement': {
            'finalizers': [
                collapse
            ]
        },
        'rewindStatement': {
            'finalizers': [
                collapse
            ]
        },
        'berFinish': {
            'finalizers': [
                collapse
            ]
        },
        'berFinishItem': {
            'finalizers': [
                collapse
            ]
        },
        'unitIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'formatIdentifier': {
            'finalizers': [
                collapse
            ]
        },
        'formatStatement': {
            'finalizers': [
                collapse
            ]
        },
        'fmtSpec': {
            'finalizers': [
                collapse
            ]
        },
        'formatsep': {
            'finalizers': [
                collapse
            ]
        },
        'formatedit': {
            'finalizers': [
                collapse
            ]
        },
        'editElement': {
            'finalizers': [
                collapse
            ]
        },
        'statementFunctionStatement': {
            'finalizers': [
                collapse
            ]
        },
        'sfArgs': {
            'finalizers': [
                collapse
            ]
        },
        'callStatement': {
            'finalizers': [
                collapse
            ]
        },
        'subroutineCall': {
            'finalizers': [
                collapse
            ]
        },
        'callArgumentList': {
            'finalizers': [
                collapse
            ]
        },
        'callArgument': {
            'finalizers': [
                collapse
            ]
        },
        'returnStatement': {
            'finalizers': [
                collapse
            ]
        },
        'expression': {
            'finalizers': [
                collapse
            ]
        },
        'ncExpr': {
            'finalizers': [
                collapse
            ]
        },
        'lexpr0': {
            'finalizers': [
                collapse
            ]
        },
        'lexpr1': {
            'finalizers': [
                collapse
            ]
        },
        'lexpr2': {
            'finalizers': [
                collapse
            ]
        },
        'lexpr3': {
            'finalizers': [
                collapse
            ]
        },
        'lexpr4': {
            'finalizers': [
                collapse
            ]
        },
        'aexpr0': {
            'finalizers': [
                collapse
            ]
        },
        'aexpr1': {
            'finalizers': [
                collapse
            ]
        },
        'aexpr2': {
            'finalizers': [
                collapse
            ]
        },
        'aexpr3': {
            'finalizers': [
                collapse
            ]
        },
        'aexpr4': {
            'finalizers': [
                collapse
            ]
        },
        'iexpr': {
            'finalizers': [
                collapse
            ]
        },
        'iexprCode': {
            'finalizers': [
                collapse
            ]
        },
        'iexpr1': {
            'finalizers': [
                collapse
            ]
        },
        'iexpr2': {
            'finalizers': [
                collapse
            ]
        },
        'iexpr3': {
            'finalizers': [
                collapse
            ]
        },
        'iexpr4': {
            'finalizers': [
                collapse
            ]
        },
        'constantExpr': {
            'finalizers': [
                collapse
            ]
        },
        'arithmeticExpression': {
            'finalizers': [
                collapse
            ]
        },
        'integerExpr': {
            'finalizers': [
                collapse
            ]
        },
        'intRealDpExpr': {
            'finalizers': [
                collapse
            ]
        },
        'arithmeticConstExpr': {
            'finalizers': [
                collapse
            ]
        },
        'intConstantExpr': {
            'finalizers': [
                collapse
            ]
        },
        'characterExpression': {
            'finalizers': [
                collapse
            ]
        },
        'concatOp': {
            'finalizers': [
                collapse
            ]
        },
        'logicalExpression': {
            'finalizers': [
                collapse
            ]
        },
        'logicalConstExpr': {
            'finalizers': [
                collapse
            ]
        },
        'arrayElementName': {
            'finalizers': [
                collapse
            ]
        },
        'subscripts': {
            'finalizers': [
                collapse
            ]
        },
        'varRef': {
            'finalizers': [
                collapse
            ]
        },
        'varRefCode': {
            'finalizers': [
                collapse
            ]
        },
        'substringApp': {
            'finalizers': [
                collapse
            ]
        },
        'variableName': {
            'finalizers': [
                collapse
            ]
        },
        'arrayName': {
            'finalizers': [
                collapse
            ]
        },
        'subroutineName': {
            'finalizers': [
                collapse
            ]
        },
        'functionName': {
            'finalizers': [
                collapse
            ]
        },
        'constant': {
            'finalizers': [
                collapse
            ]
        },
        'unsignedArithmeticConstant': {
            'finalizers': [
                collapse
            ]
        },
        'complexConstant': {
            'finalizers': [
                collapse
            ]
        },
        'logicalConstant': {
            'finalizers': [
                collapse
            ]
        },
        'identifier': {
            'finalizers': [
                collapse
            ]
        },
        'to': {
            'finalizers': [
                collapse
            ]
        },
        'keyword': {
            'finalizers': [
                collapse
            ]
        }
    }
};
