var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('constant_expr', function() {
    it('Should be able to require `constant_expr` as a function', function () {
        var constant_expr = require("../lib/rules").constant_expr;
        assert(constant_expr);
        assert(typeof(constant_expr), "function");
    });

    it("Should recognize '1 < 2 ? 1 : 2' as constant expression", function(){
        var constant_expr = require("../lib/rules").constant_expr;
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
            children: null },
          { lexeme: '?',
            row: 1,
            col: 7,
            tokenClass: '?',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 9,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ':',
            row: 1,
            col: 11,
            tokenClass: ':',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 1,
            col: 13,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];

        resulting_json = constant_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("constant_expr");
    });

    it("Should recognize '1 || 0' as constant expression", function(){
        var constant_expr = require("../lib/rules").constant_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '||',
            row: 1,
            col: 3,
            tokenClass: 'OR_OP',
            parent: null,
            children: null },
          { lexeme: '0',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];

        resulting_json = constant_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("constant_expr");
    });
});
