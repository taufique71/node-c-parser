var assert = require('assert');

describe('unary_operator', function() {
    it('Should be able to require `unary_operator` as a function', function () {
        var unary_operator = require("../lib/rules").unary_operator;
        assert(unary_operator);
        assert(typeof(unary_operator), "function");
    });

    it("Should recognize '+' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 1};
        var token_stream = [{
            "lexeme": "+",
            "row": 5,
            "col": 3,
            "tokenClass": "+",
            "keyword": False,
            "parent": null,
            "child": null
        }];
    });
});
