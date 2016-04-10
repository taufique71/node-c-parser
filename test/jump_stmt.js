var assert = require('assert');

describe('jump_stmt', function() {
    it('Should be able to require `jump_stmt` as a function', function () {
        var jump_stmt = require("../lib/rules").jump_stmt;
        assert(jump_stmt);
        assert(typeof(jump_stmt), "function");
    });
});
