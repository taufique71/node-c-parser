var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('equality_expr', function() {
    it('Should be able to require `equality_expr` as a function', function () {
        var equality_expr = require("../lib/rules").equality_expr;
        assert(equality_expr);
        assert(typeof(equality_expr), "function");
    });

    it("Should recognize '1 == 2' as equality expression", function(){
        var equality_expr = require("../lib/rules").equality_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
            { 
                lexeme: '1',
                row: 1,
                col: 1,
                tokenClass: 'CONSTANT',
                parent: null,
                children: null 
            },
            { 
                lexeme: '==',
                row: 1,
                col: 3,
                tokenClass: 'EQ_OP',
                parent: null,
                children: null 
            },
            { 
                lexeme: '2',
                row: 1,
                col: 6,
                tokenClass: 'CONSTANT',
                parent: null,
                children: null 
            } 
        ];
        resulting_json = equality_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("equality_expr");
        expect(resulting_json.children.length).to.equal(2);
    });

    it("Should recognize '(1 == 2)' as equality expression", function(){
        var equality_expr = require("../lib/rules").equality_expr;
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
          { lexeme: '==',
            row: 1,
            col: 4,
            tokenClass: 'EQ_OP',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 1,
            col: 7,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 8,
            tokenClass: ')',
            parent: null,
            children: null } 
        ];
        resulting_json = equality_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("equality_expr");
    });

    it("Should recognize '1 != 2' as equality expression", function(){
        var equality_expr = require("../lib/rules").equality_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
            { 
                lexeme: '1',
                row: 1,
                col: 1,
                tokenClass: 'CONSTANT',
                parent: null,
                children: null 
            },
            { 
                lexeme: '!=',
                row: 1,
                col: 3,
                tokenClass: 'NE_OP',
                parent: null,
                children: null 
            },
            { 
                lexeme: '2',
                row: 1,
                col: 6,
                tokenClass: 'CONSTANT',
                parent: null,
                children: null 
            } 
        ];
        resulting_json = equality_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("equality_expr");
        expect(resulting_json.children.length).to.equal(2);
    });

    it("Should recognize '1 > 2 == 0' as equality expression", function(){
        var equality_expr = require("../lib/rules").equality_expr;
        var arrow = { "pointer": 0};
        var token_stream = [
              { lexeme: '1',
                row: 1,
                col: 2,
                tokenClass: 'CONSTANT',
                parent: null,
                children: null },
              { lexeme: '>',
                row: 1,
                col: 4,
                tokenClass: '>',
                parent: null,
                children: null },
              { lexeme: '2',
                row: 1,
                col: 6,
                tokenClass: 'CONSTANT',
                parent: null,
                children: null },
              { lexeme: '==',
                row: 1,
                col: 9,
                tokenClass: 'EQ_OP',
                parent: null,
                children: null },
              { lexeme: '0',
                row: 1,
                col: 12,
                tokenClass: 'CONSTANT',
                parent: null,
                children: null } 
        ];
        resulting_json = equality_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("equality_expr");
        expect(resulting_json.children.length).to.equal(2);
    });
});

