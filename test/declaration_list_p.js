var assert = require('assert');

describe('declaration_list_p', function() {
    it('Should be able to require `declaration_list_p` as a function', function () {
        var declaration_list_p = require("../lib/rules").declaration_list_p;
        assert(typeof(declaration_list_p), "function");
    });
});
