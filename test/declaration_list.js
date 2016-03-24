var assert = require('assert');

describe('declaration_list', function() {
    it('Should be able to require `declaration_list` as a function', function () {
        var declaration_list = require("../lib/declaration_list").declaration_list;
        assert(typeof(declaration_list), "function");
    });
});
