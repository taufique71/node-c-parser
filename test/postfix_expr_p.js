var assert = require('assert');

describe('postfix_expr_p', function() {
    it('Should be able to require `postfix_expr_p` as a function', function () {
        var postfix_expr_p = require("../lib/rules").postfix_expr_p;
        assert(typeof(postfix_expr_p), "function");
    });
});
