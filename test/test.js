var assert = require('assert');
var parser = require("../index");
var fs = require("fs");
var async = require("async");

describe('helloWorld test', function () {
    it('should pass', function () {
        assert.equal("Hello world!!!", parser.helloWorld("Hello world!!!"));
    });
});
