var assert = require('assert');

describe('stmt', function() {
    it('Should be able to require `stmt` as a function', function () {
        var stmt = require("../lib/stmt").stmt;
        assert(typeof(stmt), "function");
    });
});
