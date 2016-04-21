var assert = require('assert');
var expect = require("chai").expect;
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('assignment_operator', function() {
    it('Should be able to require `assignment_operator` as a function', function () {
        var assignment_operator = require("../lib/rules").assignment_operator;
        assert(assignment_operator);
        assert(typeof(assignment_operator), "function");
    });

    it("Should recognize '=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[ 
            { 
                lexeme: '=',
                row: 1,
                col: 1,
                tokenClass: '=',
                parent: null,
                children: null 
            } 
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
		assert(validate(resulting_json), true);
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });

    it("Should recognize '*=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '*=',
				row: 1,
				col: 1,
				tokenClass: 'MUL_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '/=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '/=',
				row: 1,
				col: 1,
				tokenClass: 'DIV_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '%=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '%=',
				row: 1,
				col: 1,
				tokenClass: 'MOD_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '+=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '+=',
				row: 1,
				col: 1,
				tokenClass: 'ADD_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '-=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '-=',
				row: 1,
				col: 1,
				tokenClass: 'SUB_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '<<=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '<<=',
				row: 1,
				col: 1,
				tokenClass: 'LEFT_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '>>=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '>>=',
				row: 1,
				col: 1,
				tokenClass: 'RIGHT_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '&=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '&=',
				row: 1,
				col: 1,
				tokenClass: 'AND_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '^=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '^=',
				row: 1,
				col: 1,
				tokenClass: 'XOR_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
    it("Should recognize '|=' as unary operator", function(){
        var assignment_operator = require("../lib/rules").assignment_operator;
        var arrow = { "pointer": 0};
        var token_stream =[
            { 
				lexeme: '|=',
				row: 1,
				col: 1,
				tokenClass: 'OR_ASSIGN',
				parent: null,
				children: null 
			}
        ];
        resulting_json = assignment_operator(token_stream, arrow);
        expect(resulting_json).to.not.be.null;
        assert(resulting_json.title, "assignment_operator");
        assert(resulting_json.children.length, 1);
    });
});
