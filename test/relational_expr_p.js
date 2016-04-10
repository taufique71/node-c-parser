var assert = require('assert');

describe('relational_expr_p', function() {
    it('Should be able to require `relational_expr_p` as a function', function () {
        var relational_expr_p = require("../lib/rules").relational_expr_p;
        assert(typeof(relational_expr_p), "function");
    });
});
