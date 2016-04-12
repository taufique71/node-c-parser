var assert = require('assert');

describe('init_declarator', function() {
    it('Should be able to require `init_declarator` as a function', function () {
        var init_declarator = require("../lib/rules").init_declarator;
        assert(init_declarator);
        assert(typeof(init_declarator), "function");
    });
});
