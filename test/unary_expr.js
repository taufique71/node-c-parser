var assert = require('assert');

describe('unary_expr', function() {
    it('Should be able to require `unary_expr` as a function', function () {
        var unary_expr = require("../lib/rules").unary_expr;
        assert(typeof(unary_expr), "function");
    });
});
