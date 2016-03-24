var assert = require('assert');

describe('initializer_list_p', function() {
    it('Should be able to require `initializer_list_p` as a function', function () {
        var initializer_list_p = require("../lib/initializer_list_p").initializer_list_p;
        assert(typeof(initializer_list_p), "function");
    });
});
