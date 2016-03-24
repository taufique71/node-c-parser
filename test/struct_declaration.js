var assert = require('assert');

describe('struct_declaration', function() {
    it('Should be able to require `struct_declaration` as a function', function () {
        var struct_declaration = require("../lib/struct_declaration").struct_declaration;
        assert(typeof(struct_declaration), "function");
    });
});
