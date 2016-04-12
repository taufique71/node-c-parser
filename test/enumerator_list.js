var assert = require('assert');

describe('enumerator_list', function() {
    it('Should be able to require `enumerator_list` as a function', function () {
        var enumerator_list = require("../lib/rules").enumerator_list;
        assert(enumerator_list);
        assert(typeof(enumerator_list), "function");
    });
});
