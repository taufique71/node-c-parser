var assert = require('assert');

describe('function_definition', function() {
    it('Should be able to require `function_definition` as a function', function () {
        var function_definition = require("../lib/function_definition").function_definition;
        assert(typeof(function_definition), "function");
    });
});
