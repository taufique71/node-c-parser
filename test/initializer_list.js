var assert = require('assert');

describe('initializer_list', function() {
    it('Should be able to require `initializer_list` as a function', function () {
        var initializer_list = require("../lib/initializer_list").initializer_list;
        assert(typeof(initializer_list), "function");
    });
});
