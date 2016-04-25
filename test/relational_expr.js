var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('relational_expr', function() {
    it('Should be able to require `relational_expr` as a function', function () {
        var relational_expr = require("../lib/rules").relational_expr;
        expect(relational_expr).to.not.be.null;
        expect(typeof(relational_expr)).to.equal("function");
    });

    it("Should recognize '1 < 2' as relational expression", function(){
        var relational_expr = require("../lib/rules").relational_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '<',
            row: 1,
            col: 3,
            tokenClass: '<',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 1,
            col: 5,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];
        resulting_json = relational_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("relational_expr");
        expect(resulting_json.children.length).to.equal(2);
    });

    it("Should recognize '(1 < 2)' as relational expression", function(){
        var relational_expr = require("../lib/rules").relational_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '(',
            row: 1,
            col: 1,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 2,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '<',
            row: 1,
            col: 4,
            tokenClass: '<',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 7,
            tokenClass: ')',
            parent: null,
            children: null } 
        ];
        resulting_json = relational_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("relational_expr");
    });

    it("Should recognize 'width < length' as relational expression", function(){
        var relational_expr = require("../lib/rules").relational_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: 'width',
            row: 1,
            col: 1,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '<',
            row: 1,
            col: 7,
            tokenClass: '<',
            parent: null,
            children: null },
          { lexeme: 'length',
            row: 1,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null } 
        ];
        resulting_json = relational_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("relational_expr");
        expect(resulting_json.children.length).to.equal(2);
    });

    it("Should recognize 'width * length >= width + length' as relational expression", function(){
        var relational_expr = require("../lib/rules").relational_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: 'width',
            row: 1,
            col: 1,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '*',
            row: 1,
            col: 7,
            tokenClass: '*',
            parent: null,
            children: null },
          { lexeme: 'length',
            row: 1,
            col: 9,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '>=',
            row: 1,
            col: 16,
            tokenClass: 'GE_OP',
            parent: null,
            children: null },
          { lexeme: 'width',
            row: 1,
            col: 19,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '+',
            row: 1,
            col: 25,
            tokenClass: '+',
            parent: null,
            children: null },
          { lexeme: 'length',
            row: 1,
            col: 27,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null } 
        ];
        resulting_json = relational_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("relational_expr");
        expect(resulting_json.children.length).to.equal(2);
    });

});
