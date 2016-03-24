var assert = require('assert');

describe('direct_declarator', function() {
    it('Should be able to require `direct_declarator` as a function', function () {
        var direct_declarator = require("../lib/direct_declarator").direct_declarator;
        assert(typeof(direct_declarator), "function");
    });
});
