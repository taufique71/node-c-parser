var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('shift_expr', function() {
    it('Should be able to require `shift_expr` as a function', function () {
        var shift_expr = require("../lib/rules").shift_expr;
        assert(shift_expr);
        assert(typeof(shift_expr), "function");
    });

    it("Should recognize '1 << 1' as relational expression", function(){
        var shift_expr = require("../lib/rules").shift_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '<<',
            row: 1,
            col: 3,
            tokenClass: 'LEFT_OP',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];
        resulting_json = shift_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("shift_expr");
    });
    it("Should recognize '1 >> 1' as relational expression", function(){
        var shift_expr = require("../lib/rules").shift_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '>>',
            row: 1,
            col: 3,
            tokenClass: 'RIGHT_OP',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];
        resulting_json = shift_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("shift_expr");
    });
});
