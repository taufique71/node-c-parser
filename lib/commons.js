var _ = require("lodash");

var EPSILON = function(token_stream, arrow){
    return {"title": "EPSILON"};
}
module.exports.EPSILON = EPSILON;

var TERMINAL = function(token_stream, arrow, tok){
    if(token_stream[arrow["pointer"]].tokenClass == tok){
        return token_stream[arrow["pointer"]++];
    }
    else{
        return null;
    }
}
module.exports.TERMINAL = TERMINAL;

var iterate_over_rules = function(token_stream, arrow, rules, child){
    var new_arrow = _.clone(arrow);
    for(var i = 0; i < rules.length; i++){
        rules[i](token_stream, new_arrow, child);
        if(child){
            break;
        }
        else{
            new_arrow[]
        }
    }
}
module.exports.iterate_over_rules = iterate_over_rules;
