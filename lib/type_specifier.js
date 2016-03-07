/*jshint sub:true*/

/*
 *  type_specifier -> VOID
 *                  | CHAR
 *                  | SHORT
 *                  | INT
 *                  | LONG
 *                  | FLOAT
 *                  | DOUBLE
 *                  | SIGNED
 *                  | UNSIGNED
 *                  | struct_or_union_specifier
 *                  | enum_specifier
 *          
 * */

var iterate_over_rules = require("./commons").iterate_over_rules;
var TERMINAL = require("./commons").TERMINAL;
var struct_or_union_specifier = require("./struct_or_union_specifier").struct_or_union_specifier;
var enum_specifier = require("./enum_specifier").enum_specifier;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "void");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "char");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "short");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "int");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "long");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "float");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "double");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "signed");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = TERMINAL(token_stream, arrow, "unsigned");
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = struct_or_union_specifier(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = enum_specifier(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var type_specifier = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "type_specifier";
    new_node["children"] = [];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.type_specifier = type_specifier;
