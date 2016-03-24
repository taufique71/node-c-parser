var assert = require('assert');

describe('struct_declarator_list_p', function() {
    it('Should be able to require `struct_declarator_list_p` as a function', function () {
        var struct_declarator_list_p = require("../lib/struct_declarator_list_p").struct_declarator_list_p;
        assert(typeof(struct_declarator_list_p), "function");
    });
});
