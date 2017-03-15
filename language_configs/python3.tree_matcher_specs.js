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
        'actor': function(nodes) {
            nodes.root.tags.push({
                'range_loop_iter': nodes.iter.text,
                'range_loop_begin': parseInt(nodes.begin.text),
                'range_loop_end': parseInt(nodes.end.text),
            });
        },
    },
];
