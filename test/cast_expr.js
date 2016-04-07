var assert = require('assert');

describe('cast_expr', function() {
    it('Should be able to require `cast_expr` as a function', function () {
        var cast_expr = require("../lib/rules").cast_expr;
        assert(typeof(cast_expr), "function");
    });
});
