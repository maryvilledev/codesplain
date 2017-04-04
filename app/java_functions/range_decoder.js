// A range is a sequence of consecutive inputs that return the same boolean output.
// Data should be an array of range lengths
// If func = module.exports([2, 8, 5, 5]):
// Then func(0) -> false
// Then func(1) -> false
// Then func(2) -> true
// Then func(3) -> true
// ...
// Then func(10) -> false
// Then func(11) -> false
// ...


module.exports = function(data) {
    // Convert data from an array of range lengths to an array of range start/end indices

    let acc = 0;
    data = data.map(function(val) {
        acc += val;
        return acc;
    });

    // This function takes an input value, and returns whether it's inside a true range or false range.
    return function(search_val) {
        let min_index = 0;
        let max_index = data.length - 1;

        while (min_index <= max_index) {
            // This takes the average of min_index and max_index, and floors the result.
            // Using division will give a floating point answer
            let cur_index = (min_index + max_index) >> 1;
            let range_min = data[cur_index];
            let range_max = data[cur_index + 1];

            if (search_val < range_min) {
                // Search to the left of the range minimum
                max_index = cur_index - 1;
            } else if (search_val >= range_max) {
                // Search to the right of the range minimum
                min_index = cur_index + 1;
            } else {
                // At this point, range_min <= search_val < range_max
                // We've reached the end of our search
                // The only thing left to do is figure out if it's a  range
                // If cur_index is even, we are inside a range.
                return !!(cur_index % 2);
            }
        }

        return false;
    };
};
