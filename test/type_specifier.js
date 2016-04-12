var assert = require('assert');

describe('type_specifier', function() {
    it('Should be able to require `type_specifier` as a function', function () {
        var type_specifier = require("../lib/rules").type_specifier;
        assert(type_specifier);
        assert(typeof(type_specifier), "function");
    });
});
