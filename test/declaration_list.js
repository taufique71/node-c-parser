var assert = require('assert');
var expect = require("chai").expect;
var jsonfile = require("jsonfile");

describe('declaration_list', function() {
    it('Should be able to require `declaration_list` as a function', function () {
        var declaration_list = require("../lib/rules").declaration_list;
        assert(declaration_list);
        assert(typeof(declaration_list), "function");
    });
});
