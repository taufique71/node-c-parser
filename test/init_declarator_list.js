var assert = require('assert');

describe('init_declarator_list', function() {
    it('Should be able to require `init_declarator_list` as a function', function () {
        var init_declarator_list = require("../lib/rules").init_declarator_list;
        assert(init_declarator_list);
        assert(typeof(init_declarator_list), "function");
    });
});
