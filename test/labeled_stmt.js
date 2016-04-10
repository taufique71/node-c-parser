var assert = require('assert');

describe('labeled_stmt', function() {
    it('Should be able to require `labeled_stmt` as a function', function () {
        var labeled_stmt = require("../lib/rules").labeled_stmt;
        assert(labeled_stmt);
        assert(typeof(labeled_stmt), "function");
    });
});
