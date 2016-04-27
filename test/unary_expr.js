var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('unary_expr', function() {
    it('Should be able to require `unary_expr` as a function', function () {
        var unary_expr = require("../lib/rules").unary_expr;
        assert(unary_expr);
        assert(typeof(unary_expr), "function");
    });

    it("Should recognize 'a++' as unary expression", function(){
        var unary_expr = require("../lib/rules").unary_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
              { lexeme: 'a',
                row: 1,
                col: 1,
                tokenClass: 'IDENTIFIER',
                parent: null,
                children: null },
              { lexeme: '++',
                row: 1,
                col: 2,
                tokenClass: 'INC_OP',
                parent: null,
                children: null } 
        ];

        resulting_json = unary_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("unary_expr");
    });

    it("Should recognize '++a' as unary expression", function(){
        var unary_expr = require("../lib/rules").unary_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
              { lexeme: '++',
                row: 1,
                col: 2,
                tokenClass: 'INC_OP',
                parent: null,
                children: null },
              { lexeme: 'a',
                row: 1,
                col: 1,
                tokenClass: 'IDENTIFIER',
                parent: null,
                children: null }
        ];

        resulting_json = unary_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("unary_expr");
    });

    it("Should recognize 'a--' as unary expression", function(){
        var unary_expr = require("../lib/rules").unary_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
              { lexeme: 'a',
                row: 1,
                col: 1,
                tokenClass: 'IDENTIFIER',
                parent: null,
                children: null },
              { lexeme: '--',
                row: 1,
                col: 2,
                tokenClass: 'DEC_OP',
                parent: null,
                children: null } 
        ];

        resulting_json = unary_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("unary_expr");
    });

    it("Should recognize '--a' as unary expression", function(){
        var unary_expr = require("../lib/rules").unary_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
              { lexeme: '--',
                row: 1,
                col: 2,
                tokenClass: 'DEC_OP',
                parent: null,
                children: null },
              { lexeme: 'a',
                row: 1,
                col: 1,
                tokenClass: 'IDENTIFIER',
                parent: null,
                children: null }
        ];

        resulting_json = unary_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("unary_expr");
    });

    it("Should recognize 'sizeof(int)' as unary expression", function(){
        var unary_expr = require("../lib/rules").unary_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: 'SIZEOF',
            row: 1,
            col: 1,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 7,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 1,
            col: 9,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 13,
            tokenClass: ')',
            parent: null,
            children: null } 
        ];

        resulting_json = unary_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("unary_expr");
    });

    it("Should recognize 'sizeof(a++)' as unary expression", function(){
        var unary_expr = require("../lib/rules").unary_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: 'sizeof',
            row: 1,
            col: 1,
            tokenClass: 'SIZEOF',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 7,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'a',
            row: 1,
            col: 8,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '++',
            row: 1,
            col: 9,
            tokenClass: 'INC_OP',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 11,
            tokenClass: ')',
            parent: null,
            children: null } 
        ];
        resulting_json = unary_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("unary_expr");
    });

    it("Should recognize '+ ( float ) 12' as unary expression", function(){
        var unary_expr = require("../lib/rules").unary_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '+',
            row: 1,
            col: 1,
            tokenClass: '+',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 3,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'float',
            row: 1,
            col: 5,
            tokenClass: 'FLOAT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 11,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '12',
            row: 1,
            col: 13,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];
        resulting_json = unary_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("unary_expr");
    });
});
