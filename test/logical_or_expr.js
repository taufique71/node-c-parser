var assert = require('assert');

describe('logical_or_expr', function() {
    it('Should be able to require `logical_or_expr` as a function', function () {
        var logical_or_expr = require("../lib/logical_or_expr").logical_or_expr;
        assert(typeof(logical_or_expr), "function");
    });
});
