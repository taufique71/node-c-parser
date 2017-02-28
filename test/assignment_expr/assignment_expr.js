var assert = require('assert');
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('assignment_expr', function() {
    it('Should be able to require `assignment_expr` as a function', function () {
        var assignment_expr = require("../../lib/rules").assignment_expr;
        assert(assignment_expr);
        assert(typeof(assignment_expr), "function");
    });

    it("Should recognize 'a = a + 1' as assignment expression", function(){
        var assignment_expr = require("../../lib/rules").assignment_expr;
        var arrow = { "pointer": 0};
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
          { lexeme: 'a',
            row: 1,
            col: 5,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '+',
            row: 1,
            col: 7,
            tokenClass: '+',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 9,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];

        resulting_json = assignment_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("assignment_expr");
    });

    it("Should recognize 'a += 1' as assignment expression", function(){
        var assignment_expr = require("../../lib/rules").assignment_expr;
        var arrow = { "pointer": 0};
        var token_stream = [ 
          { lexeme: 'a',
            row: 1,
            col: 1,
            tokenClass: 'IDENTIFIER',
            parent: null,
            children: null },
          { lexeme: '+=',
            row: 1,
            col: 3,
            tokenClass: 'ADD_ASSIGN',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null } 
        ];

        resulting_json = assignment_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("assignment_expr");
    });

    it("case_1 should be realized as assignment expression", function(done){
        var assignment_expr = require("../../lib/rules").assignment_expr;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = assignment_expr(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
