var assert = require('assert');

describe('parameter_list', function() {
    it('Should be able to require `parameter_list` as a function', function () {
        var parameter_list = require("../lib/parameter_list").parameter_list;
        assert(typeof(parameter_list), "function");
    });
});
