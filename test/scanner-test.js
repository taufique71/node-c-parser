var assert = require('assert');
var scanner = require("../lib/node-c-lexer");
var fs = require("fs");
var async = require("async");

describe("Scanner test", function () {
    describe("Integers should be detected", function(){
        it("Simple integer expression should pass", function(){
            var streamOfTokens = scanner.tokenize("123");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].lexeme, "123");
            assert.equal(streamOfTokens[0].tokenClass, "INTEGER");
        });
        it("Negative integer expression should pass", function(){
            var streamOfTokens = scanner.tokenize("-123");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].lexeme, "-123");
            assert.equal(streamOfTokens[0].tokenClass, "INTEGER");
        });
        it("Positive integer expression should pass", function(){
            var streamOfTokens = scanner.tokenize("+123");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].lexeme, "+123");
            assert.equal(streamOfTokens[0].tokenClass, "INTEGER");
        });
    });
    describe("Floating point numbers should be detected", function(){
        it("Simple floating expression", function(){
            var streamOfTokens = scanner.tokenize("123.45");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].lexeme, "123.45");
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
        });
        it("Negative floating expression", function(){
            var streamOfTokens = scanner.tokenize("-123.45");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].lexeme, "-123.45");
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
        });
        it("Positive floating expression", function(){
            var streamOfTokens = scanner.tokenize("+123.45");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].lexeme, "+123.45");
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
        });
        it("Floating expression with nothing after decimal point", function(){
            var streamOfTokens = scanner.tokenize("12.");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "12.");
        });
        it("Positive floating expression with nothing after decimal point", function(){
            var streamOfTokens = scanner.tokenize("+12.");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "+12.");
        });
        it("Negative floating expression with nothing after decimal point", function(){
            var streamOfTokens = scanner.tokenize("-12.");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "-12.");
        });
        it("Floating expression with nothing before decimal point", function(){
            var streamOfTokens = scanner.tokenize(".12");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, ".12");
        });
        it("Floating expression with exponent but no decimal point", function(){
            var streamOfTokens = scanner.tokenize("5e6");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "5e6");
        });
        it("Floating expression with positive exponent but no decimal point", function(){
            var streamOfTokens = scanner.tokenize("5e+6");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "5e+6");
        });
        it("Floating expression with negative exponent but no decimal point", function(){
            var streamOfTokens = scanner.tokenize("5e-6");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "5e-6");
        });
        it("Floating expression with negative capital case exponent but no decimal point", function(){
            var streamOfTokens = scanner.tokenize("5E-6");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "5E-6");
        });
        it("Floating expression with positive exponent but nothing before decimal point", function(){
            var streamOfTokens = scanner.tokenize(".5e+6");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, ".5e+6");
        });
        it("Floating expression with positive exponent but nothing after decimal point", function(){
            var streamOfTokens = scanner.tokenize("5.e+6");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "5.e+6");
        });
        it("Standard floating expression with positive exponent", function(){
            var streamOfTokens = scanner.tokenize("123.45e+6");
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            assert.equal(streamOfTokens[0].lexeme, "123.45e+6");
        });
        it("Expression with just a decimal point", function(){
            var streamOfTokens = scanner.tokenize(".");
            assert.equal(streamOfTokens.length, 0);
        });
    });

    //describe("Character constants should be detected", function(){
        //it("Character constant with zero character", function(lexeme){
            //var streamOfTokens = scanner.tokenize("''");
            //assert.equal(streamOfTokens.length, 0);
            ////assert.equal(streamOfTokens[0].tokenClass, "FLOATING");
            ////assert.equal(streamOfTokens[0].lexeme, "123.45e+6");
        //});
        //it("Character constant with exactly one character", function(lexeme){
            //var streamOfTokens = scanner.tokenize("'a'");
            //assert.equal(streamOfTokens.length, 1);
            //assert.equal(streamOfTokens[0].tokenClass, "CHARACTER");
            //assert.equal(streamOfTokens[0].lexeme, "'a'");
        //});
        //it("Character constant with more than one character", function(lexeme){
            //var streamOfTokens = scanner.tokenize("'abc'");
            //assert.equal(streamOfTokens.length, 0);
            ////assert.equal(streamOfTokens[0].tokenClass, "CHARACTER");
            ////assert.equal(streamOfTokens[0].lexeme, "'a'");
        //});
    //});
    
    describe("String constants should be detected", function(){
        it("String constant with zero character", function(lexeme){
            var streamOfTokens = scanner.tokenize('""');
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "STRING");
            assert.equal(streamOfTokens[0].lexeme, '""');
        });
        it("String constant with exactly one character", function(lexeme){
            var streamOfTokens = scanner.tokenize('"a"');
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "STRING");
            assert.equal(streamOfTokens[0].lexeme, '"a"');
        });
        it("String constant with more than one character", function(lexeme){
            var streamOfTokens = scanner.tokenize('"abc"');
            assert.equal(streamOfTokens.length, 1);
            assert.equal(streamOfTokens[0].tokenClass, "STRING");
            assert.equal(streamOfTokens[0].lexeme, '"abc"');
        });
    });
});
