var assert = require('assert');

describe('initializer', function() {
    it('Should be able to require `initializer` as a function', function () {
        var initializer = require("../lib/initializer").initializer;
        assert(typeof(initializer), "function");
    });
});
