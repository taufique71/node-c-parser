var assert = require('assert');

describe('pointer', function() {
    it('Should be able to require `pointer` as a function', function () {
        var pointer = require("../lib/rules").pointer;
        assert(pointer);
        assert(typeof(pointer), "function");
    });
});
