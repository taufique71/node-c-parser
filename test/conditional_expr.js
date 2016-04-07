var assert = require('assert');

describe('conditional_expr', function() {
    it('Should be able to require `conditional_expr` as a function', function () {
        var conditional_expr = require("../lib/rules").conditional_expr;
        assert(typeof(conditional_expr), "function");
    });
});
