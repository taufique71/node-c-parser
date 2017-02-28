var assert = require('assert');
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('expression_stmt', function() {
    it('Should be able to require `expression_stmt` as a function', function () {
        var expression_stmt = require("../../lib/rules").expression_stmt;
        assert(expression_stmt);
        assert(typeof(expression_stmt), "function");
    });

    it("Should recognize 'a = 1;' as expression statement", function(){
        var expression_stmt = require("../../lib/rules").expression_stmt;
        var arrow = { "pointer": 0 };
        var token_stream = [ 
          { lexeme: 'a',
            row: 1,
            col: 1,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '=',
            row: 1,
            col: 3,
            tokenClass: '=',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 5,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ';',
            row: 1,
            col: 6,
            tokenClass: ';',
            parent: null,
            children: null 
          } 
        ];

        resulting_json = expression_stmt(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("expression_stmt");
    });

});
