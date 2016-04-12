var assert = require('assert');

describe('specifier_qualifier_list', function() {
    it('Should be able to require `specifier_qualifier_list` as a function', function () {
        var specifier_qualifier_list = require("../lib/rules").specifier_qualifier_list;
        assert(specifier_qualifier_list);
        assert(typeof(specifier_qualifier_list), "function");
    });
});
