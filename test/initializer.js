var assert = require('assert');

describe('initializer', function() {
    it('Should be able to require `initializer` as a function', function () {
        var initializer = require("../lib/rules").initializer;
        assert(initializer);
        assert(typeof(initializer), "function");
    });
});
