var assert = require('assert');
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('expr', function() {
    it('Should be able to require `expr` as a function', function () {
        var expr = require("../../lib/rules").expr;
        assert(expr);
        assert(typeof(expr), "function");
    });

    it("case_1 (function call with FILE pointer type casted value as parameter) should be realized as expression", function(done){
        var expr = require("../../lib/rules").expr;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err){
                done(err);
            }
            else{
                var arrow = { "pointer": 0 };
                resulting_json = expr(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                expect(arrow.pointer).to.equal(token_stream.length);
                done();
            }
        });
    });
});
