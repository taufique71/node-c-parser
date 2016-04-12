var assert = require('assert');

describe('enumerator', function() {
    it('Should be able to require `enumerator` as a function', function () {
        var enumerator = require("../lib/rules").enumerator;
        assert(enumerator);
        assert(typeof(enumerator), "function");
    });
});
