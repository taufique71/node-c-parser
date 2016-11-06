var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('function_definition', function() {
    it('Should be able to require `function_definition` as a function', function () {
        var function_definition = require("../../lib/rules").function_definition;
        assert(function_definition);
        assert(typeof(function_definition), "function");
    });
    it("case_1 should be realized as function_definition", function(done){
        var function_definition = require("../../lib/rules").function_definition;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err){
                done(err);
            }
            else{
                var arrow = { "pointer": 0 };
                resulting_json = function_definition(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
