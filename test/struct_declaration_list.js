var assert = require('assert');

describe('struct_declaration_list', function() {
    it('Should be able to require `struct_declaration_list` as a function', function () {
        var struct_declaration_list = require("../lib/rules").struct_declaration_list;
        assert(struct_declaration_list);
        assert(typeof(struct_declaration_list), "function");
    });
});
