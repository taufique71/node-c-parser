var assert = require('assert');
var parser = require("../index");
var fs = require("fs");
var async = require("async");

describe('helloWorld test', function () {
    it('should pass', function () {
        assert.equal("Hello world!!!", parser.helloWorld("Hello world!!!"));
    });
});

describe('Scanner test', function () {
    it('Keywords should be recognized', function () {
        var streamOfTokens = parser.tokenize("auto\nbreak\ncase\nchar\nconst\ncontinue\ndefault\ndo\ndouble\nelse\nenum\nextern");
        //console.log(streamOfTokens);
        assert.equal(streamOfTokens[0]["tokenClass"], "KEYWORD");
        assert.equal(streamOfTokens[0]["lexeme"], "auto");
        assert.equal(streamOfTokens[1]["tokenClass"], "KEYWORD");
        assert.equal(streamOfTokens[1]["lexeme"], "break");
        assert.equal(streamOfTokens[2]["tokenClass"], "KEYWORD");
        assert.equal(streamOfTokens[2]["lexeme"], "case");
        assert.equal(streamOfTokens[3]["tokenClass"], "KEYWORD");
        assert.equal(streamOfTokens[3]["lexeme"], "char");
        assert.equal(streamOfTokens[4]["tokenClass"], "KEYWORD");
        assert.equal(streamOfTokens[4]["lexeme"], "const");
    });
    it("Identifiers should be detected", function(){
        var streamOfTokens = parser.tokenize("wow while do foo _foo foo1 1foo _foo1 foo$asd");
        console.log(streamOfTokens);
        assert.equal("1", "1");
    });
    it("Integers should be detected", function(){
        var streamOfTokens = parser.tokenize("1232123 1.4343 +121 -121");
        console.log(streamOfTokens);
        assert.equal("1", "1");
    });
});