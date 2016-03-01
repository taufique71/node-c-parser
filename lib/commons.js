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
