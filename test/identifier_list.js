var assert = require('assert');

describe('identifier_list', function() {
    it('Should be able to require `identifier_list` as a function', function () {
        var identifier_list = require("../lib/rules").identifier_list;
        assert(identifier_list);
        assert(typeof(identifier_list), "function");
    });
});
