var assert = require('assert');

describe('and_expr', function() {
    it('Should be able to require `and_expr` as a function', function () {
        var and_expr = require("../lib/rules").and_expr;
        assert(and_expr);
        assert(typeof(and_expr), "function");
    });
});
