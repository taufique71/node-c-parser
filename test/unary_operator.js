var assert = require('assert');

describe('unary_operator', function() {
    it('Should be able to require `unary_operator` as a function', function () {
        var unary_operator = require("../lib/rules").unary_operator;
        assert(typeof(unary_operator), "function");
    });
});
