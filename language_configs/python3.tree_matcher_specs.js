module.exports = [
    {
        'pattern': 'for_stmt [.FOR, /.NAME:iter, .IN, /trailed_atom [/.NAME="range", trailer\
            [.OPEN_PAREN, arglist [/.DECIMAL_INTEGER:begin, .COMMA,\
            /.DECIMAL_INTEGER:end], .CLOSE_PAREN]], .COLON, suite]',
        'profile_data': {
            '0': [1,4],
            '0a0': [2,6],
            '0a0b1': [3,6],
        },
        'actor': function() {
            root.tags.push({
                'type': 'for_range',
                'iter': iter.text,
                'begin': parseInt(begin.text),
                'end': parseInt(end.text),
            });
        },
    }, {
        'pattern': 'trailed_atom [/.NAME:name, trailer [.OPEN_PAREN, arglist:args, .CLOSE_PAREN]]',
        'actor': function() {
            console.log(name.text, args.children);
            root.tags.push({
                'type': 'function_call',
                'name': name.text,
                'args': args.children,
            });
        },
    }, {
        'pattern': 'atom .TRUE|.FALSE',
        'actor': function() {
            root.tags.push({
                'type': 'boolean',
            });
        },
    },
];


// https://docs.python.org/3/library/functions.html#len
// https://docs.python.org/3/library/pickle.html#pickle.load
