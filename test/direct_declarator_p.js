var assert = require('assert');

describe('direct_declarator_p', function() {
    it('Should be able to require `direct_declarator_p` as a function', function () {
        var direct_declarator_p = require("../lib/direct_declarator_p").direct_declarator_p;
        assert(typeof(direct_declarator_p), "function");
    });
});