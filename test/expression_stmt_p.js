var assert = require('assert');

describe('expression_stmt_p', function() {
    it('Should be able to require `expression_stmt_p` as a function', function () {
        var expression_stmt_p = require("../lib/expression_stmt_p").expression_stmt_p;
        assert(typeof(expression_stmt_p), "function");
    });
});
