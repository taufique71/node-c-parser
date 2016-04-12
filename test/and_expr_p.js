var assert = require('assert');

describe('and_expr_p', function() {
    it('Should be able to require `and_expr_p` as a function', function () {
        var and_expr_p = require("../lib/rules").and_expr_p;
        assert(and_expr_p);
        assert(typeof(and_expr_p), "function");
    });
});
