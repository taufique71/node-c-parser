var assert = require('assert');

describe('expr', function() {
    it('Should be able to require `expr` as a function', function () {
        var expr = require("../lib/expr").expr;
        assert(typeof(expr), "function");
    });
});