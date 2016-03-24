var assert = require('assert');

describe('declaration_specifiers', function() {
    it('Should be able to require `declaration_specifiers` as a function', function () {
        var declaration_specifiers = require("../lib/declaration_specifiers").declaration_specifiers;
        assert(typeof(declaration_specifiers), "function");
    });
});
