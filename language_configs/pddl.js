let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'Pddl',
    'grammar_file': 'Pddl.g4',
    'entry_rule': 'domainName',
    'rules': {
        'pddlDoc': {
            'finalizers': [
                collapse
            ]
        },
        'domain': {
            'finalizers': [
                collapse
            ]
        },
        'domainName': {
            'finalizers': [
                collapse
            ]
        },
        'requireDef': {
            'finalizers': [
                collapse
            ]
        },
        'typesDef': {
            'finalizers': [
                collapse
            ]
        },
        'typedNameList': {
            'finalizers': [
                collapse
            ]
        },
        'singleTypeNameList': {
            'finalizers': [
                collapse
            ]
        },
        'type': {
            'finalizers': [
                collapse
            ]
        },
        'primType': {
            'finalizers': [
                collapse
            ]
        },
        'functionsDef': {
            'finalizers': [
                collapse
            ]
        },
        'functionList': {
            'finalizers': [
                collapse
            ]
        },
        'atomicFunctionSkeleton': {
            'finalizers': [
                collapse
            ]
        },
        'functionSymbol': {
            'finalizers': [
                collapse
            ]
        },
        'functionType': {
            'finalizers': [
                collapse
            ]
        },
        'constantsDef': {
            'finalizers': [
                collapse
            ]
        },
        'predicatesDef': {
            'finalizers': [
                collapse
            ]
        },
        'atomicFormulaSkeleton': {
            'finalizers': [
                collapse
            ]
        },
        'predicate': {
            'finalizers': [
                collapse
            ]
        },
        'typedVariableList': {
            'finalizers': [
                collapse
            ]
        },
        'singleTypeVarList': {
            'finalizers': [
                collapse
            ]
        },
        'constraints': {
            'finalizers': [
                collapse
            ]
        },
        'structureDef': {
            'finalizers': [
                collapse
            ]
        },
        'actionDef': {
            'finalizers': [
                collapse
            ]
        },
        'actionSymbol': {
            'finalizers': [
                collapse
            ]
        },
        'actionDefBody': {
            'finalizers': [
                collapse
            ]
        },
        'goalDesc': {
            'finalizers': [
                collapse
            ]
        },
        'fComp': {
            'finalizers': [
                collapse
            ]
        },
        'atomicTermFormula': {
            'finalizers': [
                collapse
            ]
        },
        'term': {
            'finalizers': [
                collapse
            ]
        },
        'durativeActionDef': {
            'finalizers': [
                collapse
            ]
        },
        'daDefBody': {
            'finalizers': [
                collapse
            ]
        },
        'daGD': {
            'finalizers': [
                collapse
            ]
        },
        'prefTimedGD': {
            'finalizers': [
                collapse
            ]
        },
        'timedGD': {
            'finalizers': [
                collapse
            ]
        },
        'timeSpecifier': {
            'finalizers': [
                collapse
            ]
        },
        'interval': {
            'finalizers': [
                collapse
            ]
        },
        'derivedDef': {
            'finalizers': [
                collapse
            ]
        },
        'fExp': {
            'finalizers': [
                collapse
            ]
        },
        'fExp2': {
            'finalizers': [
                collapse
            ]
        },
        'fHead': {
            'finalizers': [
                collapse
            ]
        },
        'effect': {
            'finalizers': [
                collapse
            ]
        },
        'cEffect': {
            'finalizers': [
                collapse
            ]
        },
        'pEffect': {
            'finalizers': [
                collapse
            ]
        },
        'condEffect': {
            'finalizers': [
                collapse
            ]
        },
        'binaryOp': {
            'finalizers': [
                collapse
            ]
        },
        'binaryComp': {
            'finalizers': [
                collapse
            ]
        },
        'assignOp': {
            'finalizers': [
                collapse
            ]
        },
        'durationConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'simpleDurationConstraint': {
            'finalizers': [
                collapse
            ]
        },
        'durOp': {
            'finalizers': [
                collapse
            ]
        },
        'durValue': {
            'finalizers': [
                collapse
            ]
        },
        'daEffect': {
            'finalizers': [
                collapse
            ]
        },
        'timedEffect': {
            'finalizers': [
                collapse
            ]
        },
        'fAssignDA': {
            'finalizers': [
                collapse
            ]
        },
        'fExpDA': {
            'finalizers': [
                collapse
            ]
        },
        'problem': {
            'finalizers': [
                collapse
            ]
        },
        'problemDecl': {
            'finalizers': [
                collapse
            ]
        },
        'problemDomain': {
            'finalizers': [
                collapse
            ]
        },
        'objectDecl': {
            'finalizers': [
                collapse
            ]
        },
        'init': {
            'finalizers': [
                collapse
            ]
        },
        'initEl': {
            'finalizers': [
                collapse
            ]
        },
        'nameLiteral': {
            'finalizers': [
                collapse
            ]
        },
        'atomicNameFormula': {
            'finalizers': [
                collapse
            ]
        },
        'goal': {
            'finalizers': [
                collapse
            ]
        },
        'probConstraints': {
            'finalizers': [
                collapse
            ]
        },
        'prefConGD': {
            'finalizers': [
                collapse
            ]
        },
        'metricSpec': {
            'finalizers': [
                collapse
            ]
        },
        'optimization': {
            'finalizers': [
                collapse
            ]
        },
        'metricFExp': {
            'finalizers': [
                collapse
            ]
        },
        'conGD': {
            'finalizers': [
                collapse
            ]
        }
    }
};
