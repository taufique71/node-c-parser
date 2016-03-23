var assert = require('assert');

describe('translation_unit', function() {
    it('Should be able to require `translation_unit` as a function', function () {
        var translation_unit = require("../lib/translation_unit").translation_unit;
        assert(typeof(translation_unit), "function");
    });
});
