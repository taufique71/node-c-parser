var assert = require('assert');

describe('iteration_stmt', function() {
    it('Should be able to require `iteration_stmt` as a function', function () {
        var iteration_stmt = require("../lib/iteration_stmt").iteration_stmt;
        assert(typeof(iteration_stmt), "function");
    });
});
