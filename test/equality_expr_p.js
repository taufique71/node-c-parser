var assert = require('assert');

describe('equality_expr_p', function() {
    it('Should be able to require `equality_expr_p` as a function', function () {
        var equality_expr_p = require("../lib/equality_expr_p").equality_expr_p;
        assert(typeof(equality_expr_p), "function");
    });
});