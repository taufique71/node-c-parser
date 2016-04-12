var assert = require('assert');

describe('equality_expr', function() {
    it('Should be able to require `equality_expr` as a function', function () {
        var equality_expr = require("../lib/rules").equality_expr;
        assert(equality_expr);
        assert(typeof(equality_expr), "function");
    });
});
