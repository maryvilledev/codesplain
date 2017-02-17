let fs = require('fs');

let compile = require('./app/compile');

fs.readdir('grammars-v4/', function(err, lang_dirs) {
    if (err) throw err;

    lang_dirs.forEach(function(lang_dir) {
        if (lang_dir.indexOf('.') !== -1) {return;}

        fs.readdir('grammars-v4/' + lang_dir, function(err, lang_files) {
            if (err) throw err;

            let found_g4_file = false;
            lang_files.forEach(function(file) {
                if (file.slice(-3) !== '.g4') {return;}

                console.log('Processing file grammars-v4/' + lang_dir + '/' + file + '...');

                let file_path = 'grammars-v4/' + lang_dir + '/' + file;
                fs.readFile(file_path, 'utf8', function(err, data) {
                    if (err) throw err;

                    if (data.indexOf('@parser::members') !== -1) {return;}
                    if (data.indexOf('@lexer::members') !== -1) {return;}

                    let language = file.slice(0, lang_dir.length);
                    if (language.toLowerCase() !== lang_dir) {
                        console.log('File ' + file_path + ' does not match the directory, ' + lang_dir + ', skipping...');
                        return;
                    }

                    let first_rule = data.match(/\n([a-zA-Z0-9_]+)\s*\:/);
                    if (!first_rule) {
                        console.log('File ' + file_path + ' does not have a first rule, skipping...');
                        return;
                    }

                    if (found_g4_file) {return;}
                    found_g4_file = true;

                    let config = {
                        'language': language,
                        'grammar_file': file,
                        'entry_rule': first_rule[1],
                        'rules': {},
                    };

                    compile(config, function(err, cache_dir) {
                        let parser;
                        try {
                            parser = require(cache_dir + '/' + language + 'Parser')[language + 'Parser'];
                        } catch (err) {
                            return;
                        }

                        new parser().ruleNames.forEach(function(rule_name) {
                            config.rules[rule_name] = {'finalizers': ['collapse']};
                        });

                        let obj_str = JSON.stringify(config, null, 4).replace(/"collapse"/g, 'collapse').replace(/"/g, '\'');
                        let write_str = 'let collapse = require(\'../app/finalizers.js\').collapse;\n\nmodule.exports = ' + obj_str + ';\n';

                        fs.writeFile('language_configs_generated/' + lang_dir + '.js', write_str, function(err) {
                            if (err) throw err;
                        });
                    });
                });
            });
        });
    });
});
