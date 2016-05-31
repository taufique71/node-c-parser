var variable_count = function(parse_tree){
    var declarator_count = 0;
    var function_definition_count = 0;
    var traverse = function(subtree, function_declarator){
        if((subtree === null) || (subtree.title === "EPSILON")) return;
        else if(subtree.children === null) return;
        else{
            if(subtree.title === "function_definition"){
                function_definition_count += 1;
            }
            else if(subtree.title === "declarator"){
                declarator_count += 1;
            }
            for(var i = 0; i < subtree.children.length; i++){
                traverse(subtree.children[i]);
            }
            return;
        }
    };
    traverse(parse_tree);
    return declarator_count - function_definition_count;
};
module.exports.variable_count = variable_count;

var function_definition_count = function(parse_tree){
    var function_definition_count = 0;
    var traverse = function(subtree, function_declarator){
        if((subtree === null) || (subtree.title === "EPSILON")) return;
        else if(subtree.children === null) return;
        else{
            if(subtree.title === "function_definition"){
                function_definition_count += 1;
            }
            for(var i = 0; i < subtree.children.length; i++){
                traverse(subtree.children[i]);
            }
            return;
        }
    };
    traverse(parse_tree);
    return function_definition_count;
};
module.exports.function_definition_count = function_definition_count;
