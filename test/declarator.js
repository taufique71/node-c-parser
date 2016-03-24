var assert = require('assert');

describe('declarator', function() {
    it('Should be able to require `declarator` as a function', function () {
        var declarator = require("../lib/declarator").declarator;
        assert(typeof(declarator), "function");
    });
});
