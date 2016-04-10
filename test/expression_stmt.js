var assert = require('assert');

describe('expression_stmt', function() {
    it('Should be able to require `expression_stmt` as a function', function () {
        var expression_stmt = require("../lib/rules").expression_stmt;
        assert(typeof(expression_stmt), "function");
    });
});
