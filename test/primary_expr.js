var assert = require('assert');

describe('primary_expr', function() {
    it('Should be able to require `primary_expr` as a function', function () {
        var primary_expr = require("../lib/rules").primary_expr;
        assert(primary_expr);
        assert(typeof(primary_expr), "function");
    });
});
