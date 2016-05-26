var extract_variable_info = function(parse_tree){
    var variable_info = {};
    var traverse = function(sub_tree, scope_name, type){
        if((sub_tree === null) || (sub_tree.title === "EPSILON")) return;
        else{
           if(!sub_tree.title){
           
           } 
        }
    };
    traverse(parse_tree, "global", null);
    return variable_info;
};
module.exports.extract_variable_info = extract_variable_info;

var extract_variable_count = function(parse_tree){
    var variable_count = 0;
    var traverse = function(subtree){
        if((subtree === null) || (subtree.title === "EPSILON")) return;
        else{
            if(subtree.title === "function_definition"){
                for(var i = 0; i < length(subtree.children); i++){
                    //if(subtree.children[i].title === "compount_stmt");
                }
            } 
        }
    };
    traverse(parse_tree);
    return variable_count;
};
module.exports.extract_variable_count = extract_variable_count;
