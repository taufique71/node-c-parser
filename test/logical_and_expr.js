var assert = require('assert');

describe('logical_and_expr', function() {
    it('Should be able to require `logical_and_expr` as a function', function () {
        var logical_and_expr = require("../lib/rules").logical_and_expr;
        assert(logical_and_expr);
        assert(typeof(logical_and_expr), "function");
    });
});
