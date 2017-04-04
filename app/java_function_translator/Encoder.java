package java_function_translator;

public interface Encoder {
    public void set_expect_input(long expect_input);
    public void train(long input, boolean output);
    public String make_js_data();
}
