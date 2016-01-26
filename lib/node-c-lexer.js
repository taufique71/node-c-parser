var tokenRules = require("./token-rules")["tokenRules"];
var Lexer = require("lex");
var lexer = new Lexer;

var row = 1, col = 1;

var count = function(lexeme){
    for(var i = 0; i<lexeme.length; i++){
        if(lexeme[i] == '\n'){
            row = row + 1;
            col = 1;
        }
        else if(lexeme[i] == '\t'){
            col = col + (4 - (col % 4));
        }
        else{
            col = col + 1;
        }
    }
}

var tokenize = function(streamOfText){
    row = 1; col = 1;
    var streamOfTokens = [];

    lexer.addRule(tokenRules["while"], function(lexeme){
        console.log(tokenRules["while"]);
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "WHILE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["volatile"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "VOLATILE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["void"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "VOID";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["unsigned"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "UNSIGNED";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["union"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "UNION";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["typedef"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "TYPEDEF";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["switch"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SWITCH";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["struct"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "STRUCT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["static"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "STATIC";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["sizeof"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SIZEOF";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["signed"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SIGNED";
        token["parent"] = null;
        token["keyword"] = true;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["short"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SHORT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["return"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "RETURN";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["register"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "REGISTER";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["long"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LONG";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["int"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "INT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["if"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "IF";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["goto"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "GOTO";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["for"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "FOR";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["float"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "FLOAT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["extern"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "EXTERN";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["enum"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ENUM";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["else"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ELSE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["double"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DOUBLE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["do"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DO";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["default"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DEFAULT";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["continue"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONTINUE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["const"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONST";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["char"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CHAR";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["case"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CASE";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["break"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "BREAK";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["auto"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "AUTO";
        token["keyword"] = true;
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["identifier"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "IDENTIFIER";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["hexadecimal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["octal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["decimal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["char_literal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["floatWithoutPoint"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["floatWithNothingBeforePoint"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["floatWithNothingAfterPoint"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "CONSTANT";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["string_literal"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "STRING_LITERAL";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["ellipsis"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ELLIPSIS";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["right_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "RIGHT_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["left_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LEFT_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["add_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "ADD_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["sub_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "SUB_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["mul_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "MUL_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["div_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DIV_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["mod_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "MOD_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["and_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "AND_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["xor_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "XOR_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["or_assign"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "OR_ASSIGN";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["right_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "RIGHT_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["left_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LEFT_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["inc_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "INC_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["dec_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "DEC_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["ptr_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "PTR_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["and_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "AND_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["or_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "OR_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["le_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "LE_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["ge_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "GE_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["eq_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "EQ_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["ne_op"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "NE_OP";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules[";"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ";";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["{"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "{";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["}"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "}";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules[","], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ",";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules[":"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ":";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["="], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "=";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["("], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "(";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules[")"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ")";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["["], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "[";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["]"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "]";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["."], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ".";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["&"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "&";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["!"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "!";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["~"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "~";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["-"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "-";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["+"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "+";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["*"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "*";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["/"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "/";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["%"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "%";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["<"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "<";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules[">"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = ">";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["^"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "^";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["|"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "|";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["?"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "?";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["#"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "#";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["whitespace"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "WHITESPACE";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });
    lexer.addRule(tokenRules["unmatched"], function(lexeme){
        var token = {};
        token["lexeme"] = lexeme;
        token["row"] = row;
        token["col"] = col;
        token["tokenClass"] = "UNMATCHED";
        token["parent"] = null;
        token["children"] = null;
        count(lexeme);
        return token;
    });

    lexer.setInput(streamOfText);
    var x = lexer.lex();
    while(x != undefined){
        if((x.tokenClass != "UNMATCHED") && (x.tokenClass != "WHITESPACE")){
            streamOfTokens.push(x);
        }
        x = lexer.lex();
    };
    return streamOfTokens;
}
module.exports.tokenize = tokenize;
