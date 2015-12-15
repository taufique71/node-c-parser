var assert = require('assert');
var parser = require("../index");

describe('helloWorld test', function () {
    it('should pass', function () {
        assert.equal("Hello world!!!", parser.helloWorld("Hello world!!!"));
    });
});
