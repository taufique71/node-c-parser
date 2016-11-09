var assert = require('assert');
var expect = require("chai").expect;
var jsonfile = require("jsonfile");

describe('declaration', function() {
    it('Should be able to require `declaration` as a function', function () {
        var declaration = require("../lib/rules").declaration;
        assert(declaration);
        assert(typeof(declaration), "function");
    });
});
