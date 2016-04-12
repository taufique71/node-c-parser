var assert = require('assert');

describe('stmt', function() {
    it('Should be able to require `stmt` as a function', function () {
        var stmt = require("../lib/rules").stmt;
        assert(stmt);
        assert(typeof(stmt), "function");
    });
});
