package java_function_translator;

import java_function_translator.TranslatedFunction;

import java_function_translator.functions.*;

public class JavaFunctionTranslator {
    public static void main(String[] args) {
        TranslatedFunction func = new Character_isJavaIdentifierStart_int();
        func.translate();
    }
}
