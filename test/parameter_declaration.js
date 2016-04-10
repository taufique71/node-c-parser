var assert = require('assert');

describe('parameter_declaration', function() {
    it('Should be able to require `parameter_declaration` as a function', function () {
        var parameter_declaration = require("../lib/rules").parameter_declaration;
        assert(parameter_declaration);
        assert(typeof(parameter_declaration), "function");
    });
});
