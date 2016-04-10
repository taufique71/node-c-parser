var assert = require('assert');

describe('expr_p', function() {
    it('Should be able to require `expr_p` as a function', function () {
        var expr_p = require("../lib/rules").expr_p;
        assert(typeof(expr_p), "function");
    });
});
