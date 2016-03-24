var assert = require('assert');

describe('shift_expr', function() {
    it('Should be able to require `shift_expr` as a function', function () {
        var shift_expr = require("../lib/shift_expr").shift_expr;
        assert(typeof(shift_expr), "function");
    });
});
