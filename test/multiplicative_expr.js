var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('multiplicative_expr', function() {
    it('Should be able to require `multiplicative_expr` as a function', function () {
        var multiplicative_expr = require("../lib/rules").multiplicative_expr;
        assert(multiplicative_expr);
        assert(typeof(multiplicative_expr), "function");
    });
    it("Should recognize '1 * 1' as multiplicative expression", function(){
        var multiplicative_expr = require("../lib/rules").multiplicative_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '*',
            row: 1,
            col: 3,
            tokenClass: '*',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];
        resulting_json = multiplicative_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("multiplicative_expr");
    });
    it("Should recognize '1 / 1' as multiplicative expression", function(){
        var multiplicative_expr = require("../lib/rules").multiplicative_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '/',
            row: 1,
            col: 3,
            tokenClass: '/',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];
        resulting_json = multiplicative_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("multiplicative_expr");
    });
    it("Should recognize '1 % 1' as multiplicative expression", function(){
        var multiplicative_expr = require("../lib/rules").multiplicative_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '%',
            row: 1,
            col: 3,
            tokenClass: '%',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];
        resulting_json = multiplicative_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("multiplicative_expr");
    });
});
