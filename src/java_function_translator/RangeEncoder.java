package java_function_translator;

import java_function_translator.Encoder;

import java.util.List;
import java.util.ArrayList;

public class RangeEncoder implements Encoder {
    private long prev_range_start;
    private boolean prev_output;
    private long expect_input;

    // Array that contains a list of
    private List<Long> range_splits;

    public class UnexpectedInputException extends IllegalArgumentException {
        UnexpectedInputException(long got, long expected) {
            super("Unexpected input " + got + ", expected " + expected);
        }
    }

    public RangeEncoder() {
        this.prev_range_start = 0;
        this.prev_output = false;
        this.expect_input = 0;
        this.range_splits = new ArrayList<Long>();
    }

    public void set_expect_input(long expect_input) {
        this.expect_input = expect_input;
    }

    public void train(long input, boolean output) {
        // Make sure train is called on sequential input
        if (input != expect_input) {
            throw new UnexpectedInputException(input, expect_input);
        }
        expect_input = input + 1;

        // If the output is different from the last output, then add a new range split
        if (output != prev_output) {
            prev_output = output;
            range_splits.add(input - prev_range_start);
            prev_range_start = input;
        }
    }

    public String make_js_data() {
        if (prev_output) {
            // If the previous output was true, add an extra index to make it false
            range_splits.add(expect_input - prev_range_start);
        }

        // Convert range_splits to a JSON array
        StringBuilder res = new StringBuilder();
        res.append("[");
        for (Long l : range_splits) {
            res.append(String.valueOf(l));
            res.append(",");
        }
        res.deleteCharAt(res.length() - 1);
        res.append("]");
        return res.toString();
    }
}
