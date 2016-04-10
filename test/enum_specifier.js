var assert = require('assert');

describe('enum_specifier', function() {
    it('Should be able to require `enum_specifier` as a function', function () {
        var enum_specifier = require("../lib/rules").enum_specifier;
        assert(typeof(enum_specifier), "function");
    });
});
