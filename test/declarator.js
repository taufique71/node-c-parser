var assert = require('assert');

describe('declarator', function() {
    it('Should be able to require `declarator` as a function', function () {
        var declarator = require("../lib/rules").declarator;
        assert(declarator);
        assert(typeof(declarator), "function");
    });
});
