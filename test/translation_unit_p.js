var assert = require('assert');

describe('translation_unit_p', function() {
    it('Should be able to require `translation_unit_p` as a function', function () {
        var translation_unit_p = require("../lib/translation_unit_p").translation_unit_p;
        assert(typeof(translation_unit_p), "function");
    });
});
