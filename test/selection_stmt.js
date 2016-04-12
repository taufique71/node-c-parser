var assert = require('assert');

describe('selection_stmt', function() {
    it('Should be able to require `selection_stmt` as a function', function () {
        var selection_stmt = require("../lib/rules").selection_stmt;
        assert(selection_stmt);
        assert(typeof(selection_stmt), "function");
    });
});
