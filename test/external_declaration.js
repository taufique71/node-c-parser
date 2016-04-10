var assert = require('assert');

describe('external_declaration', function() {
    it('Should be able to require `external_declaration` as a function', function () {
        var external_declaration = require("../lib/rules").external_declaration;
        assert(typeof(external_declaration), "function");
    });
});
