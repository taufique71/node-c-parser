var assert = require('assert');

describe('init_declarator_list_p', function() {
    it('Should be able to require `init_declarator_list_p` as a function', function () {
        var init_declarator_list_p = require("../lib/init_declarator_list_p").init_declarator_list_p;
        assert(typeof(init_declarator_list_p), "function");
    });
});
