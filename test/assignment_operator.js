var assert = require('assert');

describe('assignment_operator', function() {
    it('Should be able to require `assignment_operator` as a function', function () {
        var assignment_operator = require("../lib/assignment_operator").assignment_operator;
        assert(typeof(assignment_operator), "function");
    });
});
