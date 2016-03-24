var assert = require('assert');

describe('identifier_list_p', function() {
    it('Should be able to require `identifier_list_p` as a function', function () {
        var identifier_list_p = require("../lib/identifier_list_p").identifier_list_p;
        assert(typeof(identifier_list_p), "function");
    });
});
