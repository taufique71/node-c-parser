var assert = require('assert');

describe('storage_class_specifier', function() {
    it('Should be able to require `storage_class_specifier` as a function', function () {
        var storage_class_specifier = require("../lib/rules").storage_class_specifier;
        assert(storage_class_specifier);
        assert(typeof(storage_class_specifier), "function");
    });
});
