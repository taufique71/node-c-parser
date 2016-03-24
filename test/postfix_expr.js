var assert = require('assert');

describe('postfix_expr', function() {
    it('Should be able to require `postfix_expr` as a function', function () {
        var postfix_expr = require("../lib/postfix_expr").postfix_expr;
        assert(typeof(postfix_expr), "function");
    });
});
