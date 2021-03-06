package java_function_translator.functions;

import java_function_translator.TranslatedFunction;
import java_function_translator.Encoder;
import java_function_translator.RangeEncoder;

public class Character_isJavaIdentifierPart_int extends TranslatedFunction {
    protected String get_name() {
        return "Character_isJavaIdentifierPart_int";
    }

    protected Encoder make_encoder() {
        return new RangeEncoder();
    }

    protected void run(Encoder encoder) {
        for (long i = 0; i <= 0x10FFFF; i++) {
            boolean res = Character.isJavaIdentifierPart((int) i);
            encoder.train(i, res);
        }
    }
}
