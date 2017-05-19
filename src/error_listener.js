let antlr = require('antlr4');

function ErrorListener(callback) {
    antlr.error.ErrorListener.call(this);
    this.callback = callback;
    return this;
}

ErrorListener.prototype = Object.create(antlr.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;

ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.callback({
        'type': 'syntaxError',
        'begin': offendingSymbol.start,
        'end': offendingSymbol.stop + 1,
        'msg': msg,
    });
};

ErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
};

ErrorListener.prototype.reportAttemptingFullContext = function(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
};

ErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
};

module.exports = ErrorListener;
