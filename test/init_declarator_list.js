var assert = require('assert');

describe('init_declarator_list', function() {
    it('Should be able to require `init_declarator_list` as a function', function () {
        var init_declarator_list = require("../lib/init_declarator_list").init_declarator_list;
        assert(typeof(init_declarator_list), "function");
    });
});
