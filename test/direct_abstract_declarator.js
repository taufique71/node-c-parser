var assert = require('assert');

describe('direct_abstract_declarator', function() {
    it('Should be able to require `direct_abstract_declarator` as a function', function () {
        var direct_abstract_declarator = require("../lib/direct_abstract_declarator").direct_abstract_declarator;
        assert(typeof(direct_abstract_declarator), "function");
    });
});
