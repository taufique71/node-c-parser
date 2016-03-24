var assert = require('assert');

describe('assignment_expr', function() {
    it('Should be able to require `assignment_expr` as a function', function () {
        var assignment_expr = require("../lib/assignment_expr").assignment_expr;
        assert(typeof(assignment_expr), "function");
    });
});
