var assert = require('assert');

describe('exclusive_or_expr_p', function() {
    it('Should be able to require `exclusive_or_expr_p` as a function', function () {
        var exclusive_or_expr_p = require("../lib/rules").exclusive_or_expr_p;
        assert(exclusive_or_expr_p);
        assert(typeof(exclusive_or_expr_p), "function");
    });
});
