"use strict";
class ConsoleErrorListener {
    constructor(callback) {
        this.callback = callback;
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.callback({
            'type': 'syntaxError',
            'begin': offendingSymbol.start,
            'end': offendingSymbol.stop + 1,
            'msg': msg,
        });
    }

    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    }

    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    }

    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    }
}

module.exports = ConsoleErrorListener;
