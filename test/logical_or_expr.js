var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('logical_or_expr', function() {
    it("Should be able to require `logical_or_expr` as a function", function () {
        var logical_or_expr = require("../lib/rules").logical_or_expr;
        assert(logical_or_expr);
        assert(typeof(logical_or_expr), "function");
    });

    it("Should recognize '(1 < 2)' as `logical_or_expression`", function(){
        var logical_or_expr = require("../lib/rules").logical_or_expr;
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

        resulting_json = logical_or_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("logical_or_expr");
    });
});
