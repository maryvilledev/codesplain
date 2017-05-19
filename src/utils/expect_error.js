module.exports = function(code, callback) {
    return function(err) {
        if (err.code === code) {
            return callback();
        } else {
            throw err;
        }
    };
};
