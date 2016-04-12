var assert = require('assert');

describe('struct_declarator_list', function() {
    it('Should be able to require `struct_declarator_list` as a function', function () {
        var struct_declarator_list = require("../lib/rules").struct_declarator_list;
        assert(struct_declarator_list);
        assert(typeof(struct_declarator_list), "function");
    });
});
