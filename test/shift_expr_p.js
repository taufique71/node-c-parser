var assert = require('assert');

describe('shift_expr_p', function() {
    it('Should be able to require `shift_expr_p` as a function', function () {
        var shift_expr_p = require("../lib/rules").shift_expr_p;
        assert(shift_expr_p);
        assert(typeof(shift_expr_p), "function");
    });
});
