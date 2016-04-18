var assert = require('assert');
var expect = require("chai").expect;

describe('unary_operator', function() {
    it('Should be able to require `unary_operator` as a function', function () {
        var unary_operator = require("../lib/rules").unary_operator;
        assert(unary_operator);
        assert(typeof(unary_operator), "function");
    });

    it("Should recognize '&' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 0};
        var token_stream = [{
            "lexeme": "&",
            "row": 5,
            "col": 3,
            "tokenClass": "&",
            "keyword": false,
            "parent": null,
            "child": null
        }];
        resulting_json = unary_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
    });

    it("Should recognize '*' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 0};
        var token_stream = [{
            "lexeme": "*",
            "row": 5,
            "col": 3,
            "tokenClass": "*",
            "keyword": false,
            "parent": null,
            "child": null
        }];
        resulting_json = unary_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
    });

    it("Should recognize '+' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 0};
        var token_stream = [{
            "lexeme": "+",
            "row": 5,
            "col": 3,
            "tokenClass": "+",
            "keyword": false,
            "parent": null,
            "child": null
        }];
        resulting_json = unary_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
    });

    it("Should recognize '-' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 0};
        var token_stream = [{
            "lexeme": "-",
            "row": 5,
            "col": 3,
            "tokenClass": "-",
            "keyword": false,
            "parent": null,
            "child": null
        }];
        resulting_json = unary_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
    });

    it("Should recognize '~' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 0};
        var token_stream = [{
            "lexeme": "~",
            "row": 5,
            "col": 3,
            "tokenClass": "~",
            "keyword": false,
            "parent": null,
            "child": null
        }];
        resulting_json = unary_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
    });

    it("Should recognize '!' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 0};
        var token_stream = [{
            "lexeme": "!",
            "row": 5,
            "col": 3,
            "tokenClass": "!",
            "keyword": false,
            "parent": null,
            "child": null
        }];
        resulting_json = unary_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
    });

    it("Should reject '!=' as unary operator", function(){
        var unary_operator = require("../lib/rules").unary_operator;
        var arrow = { "pointer": 0};
        var token_stream = [{
            "lexeme": "!=",
            "row": 5,
            "col": 3,
            "tokenClass": "!=",
            "keyword": false,
            "parent": null,
            "child": null
        }];
        resulting_json = unary_operator(token_stream, arrow);
        expect(resulting_json).to.be.null;
    });
});
