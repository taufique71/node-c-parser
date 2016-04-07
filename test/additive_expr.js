var assert = require('assert');

describe('additive_expr', function() {
    it('Should be able to require `additive_expr` as a function', function () {
        var additive_expr = require("../lib/rules").additive_expr;
        assert(typeof(additive_expr), "function");
    });
});
