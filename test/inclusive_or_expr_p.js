var assert = require('assert');

describe('inclusive_or_expr_p', function() {
    it('Should be able to require `inclusive_or_expr_p` as a function', function () {
        var inclusive_or_expr_p = require("../lib/rules").inclusive_or_expr_p;
        assert(typeof(inclusive_or_expr_p), "function");
    });
});
