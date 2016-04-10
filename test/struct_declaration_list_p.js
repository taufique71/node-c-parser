var assert = require('assert');

describe('struct_declaration_list_p', function() {
    it('Should be able to require `struct_declaration_list_p` as a function', function () {
        var struct_declaration_list_p = require("../lib/rules").struct_declaration_list_p;
        assert(typeof(struct_declaration_list_p), "function");
    });
});
