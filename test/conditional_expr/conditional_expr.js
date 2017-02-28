var assert = require('assert');
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('conditional_expr', function() {
    it('Should be able to require `conditional_expr` as a function', function () {
        var conditional_expr = require("../../lib/rules").conditional_expr;
        assert(conditional_expr);
        assert(typeof(conditional_expr), "function");
    });

    it("Should recognize '1 < 2 ? 1 : 2' as conditional expression", function(){
        var conditional_expr = require("../../lib/rules").conditional_expr;
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

        resulting_json = conditional_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("conditional_expr");
    });

    it("Should recognize '(1 < 2) ? 1 : 2' as conditional expression", function(){
        var conditional_expr = require("../../lib/rules").conditional_expr;
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
            children: null },
          { lexeme: '?',
            row: 1,
            col: 9,
            tokenClass: '?',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 11,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ':',
            row: 1,
            col: 13,
            tokenClass: ':',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 1,
            col: 15,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null }
        ];

        resulting_json = conditional_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("conditional_expr");
    });

    it("Should recognize '((1 < 2) ? 1 : 2)' as conditional expression", function(){
        var conditional_expr = require("../../lib/rules").conditional_expr;
        var arrow = { "pointer": 0};
        var token_stream = [
          { lexeme: '(',
            row: 1,
            col: 1,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: '(',
            row: 1,
            col: 2,
            tokenClass: '(',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 3,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '<',
            row: 1,
            col: 5,
            tokenClass: '<',
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
            children: null },
          { lexeme: '?',
            row: 1,
            col: 10,
            tokenClass: '?',
            parent: null,
            children: null },
          { lexeme: '1',
            row: 1,
            col: 12,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ':',
            row: 1,
            col: 14,
            tokenClass: ':',
            parent: null,
            children: null },
          { lexeme: '2',
            row: 1,
            col: 16,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: ')',
            row: 1,
            col: 17,
            tokenClass: ')',
            parent: null,
            children: null }
        ];

        resulting_json = conditional_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("conditional_expr");
    });

    it("Should recognize '1 || 0' as conditional expression", function(){
        var conditional_expr = require("../../lib/rules").conditional_expr;
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

        resulting_json = conditional_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("conditional_expr");
        expect(arrow.pointer).to.equal(token_stream.length);
    });

    it("Should recognize '1 && 0' as conditional expression", function(){
        var conditional_expr = require("../../lib/rules").conditional_expr;
        var arrow = { "pointer": 0};
        var token_stream = [
          { lexeme: '1',
            row: 1,
            col: 1,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null },
          { lexeme: '&&',
            row: 1,
            col: 3,
            tokenClass: 'AND_OP',
            parent: null,
            children: null },
          { lexeme: '0',
            row: 1,
            col: 6,
            tokenClass: 'CONSTANT',
            parent: null,
            children: null }
        ];

        resulting_json = conditional_expr(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        expect(validate(resulting_json)).to.equal(true);
        expect(resulting_json.title).to.equal("conditional_expr");
        expect(arrow.pointer).to.equal(token_stream.length);
    });

    it("case_1 should be realized as conditional_expr", function(done){
        var conditional_expr = require("../../lib/rules").conditional_expr;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = conditional_expr(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                expect(arrow.pointer).to.equal(token_stream.length);
                done();
            }
        });
    });
});
