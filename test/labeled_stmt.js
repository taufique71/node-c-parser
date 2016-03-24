var assert = require('assert');

describe('labeled_stmt', function() {
    it('Should be able to require `labeled_stmt` as a function', function () {
        var labeled_stmt = require("../lib/labeled_stmt").labeled_stmt;
        assert(typeof(labeled_stmt), "function");
    });
});
