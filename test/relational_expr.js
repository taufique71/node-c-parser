var assert = require('assert');

describe('relational_expr', function() {
    it('Should be able to require `relational_expr` as a function', function () {
        var relational_expr = require("../lib/rules").relational_expr;
        assert(typeof(relational_expr), "function");
    });
});
