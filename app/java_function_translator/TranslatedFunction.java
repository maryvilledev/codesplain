package java_function_translator;

import java_function_translator.Encoder;

import java.io.PrintWriter;
import java.io.FileNotFoundException;

public abstract class TranslatedFunction {
    public void translate() {
        System.out.println("Running " + get_name() + "...");

        Encoder encoder = make_encoder();
        run(encoder);
        String js_data = encoder.make_js_data();

        String filename = "../_cache/java_func_data/" + get_name() + ".json";
        PrintWriter writer;
        try {
            writer = new PrintWriter(filename);
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
            System.out.println("Could not open file " + filename);
            return;
        }

        writer.print(js_data);
        writer.flush();
        writer.close();

        System.out.println("Wrote " + get_name());
    }

    protected abstract String get_name();
    protected abstract Encoder make_encoder();
    protected abstract void run(Encoder encoder);
}
