var assert = require('assert');

describe('struct_declarator', function() {
    it('Should be able to require `struct_declarator` as a function', function () {
        var struct_declarator = require("../lib/struct_declarator").struct_declarator;
        assert(typeof(struct_declarator), "function");
    });
});
