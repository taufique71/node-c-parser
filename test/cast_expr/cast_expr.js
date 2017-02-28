var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('cast_expr', function() {
    it('Should be able to require `cast_expr` as a function', function () {
        var cast_expr = require("../../lib/rules").cast_expr;
        assert(cast_expr);
        assert(typeof(cast_expr), "function");
    });

    it("Should recognize '(float) (int) 3.1416' as cast expression", function(){
        var cast_expr = require("../../lib/rules").cast_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '(',
            row: 1,
            col: 1,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'float',
            row: 1,
            col: 3,
            tokenClass: 'FLOAT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 9,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 11,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'int',
            row: 1,
            col: 12,
            tokenClass: 'INT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 15,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '3.1416',
            row: 1,
            col: 17,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];

        resulting_json = cast_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("cast_expr");
    });

    it("Should recognize '(float) 12' as cast expression", function(){
        var cast_expr = require("../../lib/rules").cast_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '(',
            row: 1,
            col: 1,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: 'float',
            row: 1,
            col: 3,
            tokenClass: 'FLOAT',
            keyword: true,
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 9,
            tokenClass: ')',
            parent: null,
            children: null },
          { lexeme: '12',
            row: 1,
            col: 11,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];

        resulting_json = cast_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("cast_expr");
    });
});
