var assert = require('assert');

describe('declaration', function() {
    it('Should be able to require `declaration` as a function', function () {
        var declaration = require("../lib/declaration").declaration;
        assert(typeof(declaration), "function");
    });
});