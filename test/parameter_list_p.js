var assert = require('assert');

describe('parameter_list_p', function() {
    it('Should be able to require `parameter_list_p` as a function', function () {
        var parameter_list_p = require("../lib/rules").parameter_list_p;
        assert(parameter_list_p);
        assert(typeof(parameter_list_p), "function");
    });
});
