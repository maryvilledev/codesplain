module.exports = [
    {
        // The pattern specifies which nodes to match.
        // When a node is matched, actor will be executed.
        pattern: 'for_stmt [.FOR, /.NAME:iter, .IN, /trailed_atom [/.NAME="range", trailer\
            [.OPEN_PAREN, arglist [/.DECIMAL_INTEGER:begin, .COMMA,\
            /.DECIMAL_INTEGER:end], .CLOSE_PAREN]], .COLON, suite]',

        // This is not currently used and will be used to optimize the javascript matching function in the future.
        profile_data: {
            '0': [1,4],
            '0a0': [2,6],
            '0a0b1': [3,6],
        },

        // The string that will be pushed onto the node's tags array
        type: 'for_range',

        // The actor will be run when a node matches.
        // The node that was matched will be available as the root variable.
        // Variables set by the pattern (:iter, :begin, :end) will also be available.
        'actor': function() {
            root.tags.push({
                'type': this.type,
                'iter': iter.text,
                'begin': parseInt(begin.text),
                'end': parseInt(end.text),
            });
        },
    }, {
        pattern: 'trailed_atom [/.NAME:name, trailer [.OPEN_PAREN, arglist:args, .CLOSE_PAREN]]',
        type: 'function_call',
        actor: function() {
            console.log(name.text, args.children);
            root.tags.push({
                'type': this.type,
                'name': name.text,
                'args': args.children,
            });
        },
    }, {
        pattern: 'atom .TRUE|.FALSE',
        type: 'boolean',
        actor: function() {
            root.tags.push({
                'type': this.type,
            });
        },
    }, {
        pattern: 'factor [.MINUS, /number]',
        type: 'negative_number',
        actor: function() {
            console.log(root);
            root.tags.push({
                'type': this.type,
            });
        },
    },
];


// https://docs.python.org/3/library/functions.html#len
// https://docs.python.org/3/library/pickle.html#pickle.load
