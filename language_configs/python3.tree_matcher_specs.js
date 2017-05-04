module.exports = [
    {
        provides_tags: ['for_range'],

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

        // The actor will be run when a node matches.
        // The node that was matched will be available as the root variable.
        // Variables set by the pattern (:iter, :begin, :end) will also be available.
        actor: function() {
            root.tags.push('for_range');

            root.detail.push({
                'handler': 'docs',
                'template': 'for_range',
                'iter': iter.text,
                'begin': parseInt(begin.text),
                'end': parseInt(end.text),
            });
        },
    }, {
        provides_tags: ['function_call'],

        pattern: 'trailed_atom [/.NAME:name, trailer [.OPEN_PAREN, arglist:args, .CLOSE_PAREN]]',
        actor: function() {
            root.tags.push('function_call');

            root.detail.push({
                'handler': 'docs',
                'template': 'function_call',
                'name': name.text,
                'args': args.children.map(function(child) {return child.text;}),
            });
        },
    }, {
        provides_tags: ['boolean'],
        pattern: 'atom .TRUE|.FALSE',
        actor: function() {
            root.tags.push('boolean');
        },
    }, {
        provides_tags: ['negative_number'],
        pattern: 'factor [.MINUS, /number]',
        actor: function() {
            root.tags.push('negative_number');
        },
    },
];


// https://docs.python.org/3/library/functions.html#len
// https://docs.python.org/3/library/pickle.html#pickle.load
