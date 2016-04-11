var assert = require('assert');

describe('abstract_declarator', function() {
    it('Should be able to require `abstract_declarator` as a function', function () {
        var abstract_declarator = require("../lib/rules").abstract_declarator;
        assert(abstract_declarator);
        assert(typeof(abstract_declarator), "function");
    });
});
