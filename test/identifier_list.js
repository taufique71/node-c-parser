var assert = require('assert');

describe('identifier_list', function() {
    it('Should be able to require `identifier_list` as a function', function () {
        var identifier_list = require("../lib/identifier_list").identifier_list;
        assert(typeof(identifier_list), "function");
    });
});
