var assert = require('assert');

describe('parameter_type_list', function() {
    it('Should be able to require `parameter_type_list` as a function', function () {
        var parameter_type_list = require("../lib/rules").parameter_type_list;
        assert(parameter_type_list);
        assert(typeof(parameter_type_list), "function");
    });
});
