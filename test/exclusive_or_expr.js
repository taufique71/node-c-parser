var assert = require('assert');

describe('exclusive_or_expr', function() {
    it('Should be able to require `exclusive_or_expr` as a function', function () {
        var exclusive_or_expr = require("../lib/rules").exclusive_or_expr;
        assert(exclusive_or_expr);
        assert(typeof(exclusive_or_expr), "function");
    });
});
