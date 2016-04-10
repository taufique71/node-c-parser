var assert = require('assert');

describe('direct_abstract_declarator_p', function() {
    it('Should be able to require `direct_abstract_declarator_p` as a function', function () {
        var direct_abstract_declarator_p = require("../lib/rules").direct_abstract_declarator_p;
        assert(typeof(direct_abstract_declarator_p), "function");
    });
});
