var assert = require('assert');

describe('additive_expr_p', function() {
    it('Should be able to require `additive_expr_p` as a function', function () {
        var additive_expr_p = require("../lib/rules").additive_expr_p;
        assert(additive_expr_p);
        assert(typeof(additive_expr_p), "function");
    });
});
