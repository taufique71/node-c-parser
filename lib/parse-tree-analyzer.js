//var extract_variable_info = function(parse_tree){
    //var variable_info = {};
    //var traverse = function(sub_tree, scope_name, type){
        //if((sub_tree === null) || (sub_tree.title === "EPSILON")) return;
        //else{
           //if(!sub_tree.title){
           
           //} 
        //}
    //};
    //traverse(parse_tree, "global", null);
    //return variable_info;
//};
//module.exports.extract_variable_info = extract_variable_info;

var extract_variable_count = function(parse_tree){
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
module.exports.extract_variable_count = extract_variable_count;
