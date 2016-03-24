var assert = require('assert');

describe('multiplicative_expr_p', function() {
    it('Should be able to require `multiplicative_expr_p` as a function', function () {
        var multiplicative_expr_p = require("../lib/multiplicative_expr_p").multiplicative_expr_p;
        assert(typeof(multiplicative_expr_p), "function");
    });
});
