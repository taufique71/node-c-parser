var assert = require('assert');
var expect = require("chai").expect;

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
    });
});
