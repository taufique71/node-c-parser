var assert = require('assert');

describe('enumerator_list_p', function() {
    it('Should be able to require `enumerator_list_p` as a function', function () {
        var enumerator_list_p = require("../lib/rules").enumerator_list_p;
        assert(enumerator_list_p);
        assert(typeof(enumerator_list_p), "function");
    });
});
