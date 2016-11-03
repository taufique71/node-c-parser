var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('declaration_list', function() {
    it('Should be able to require `declaration_list` as a function', function () {
        var declaration_list = require("../../lib/rules").declaration_list;
        assert(declaration_list);
        assert(typeof(declaration_list), "function");
    });

    it("case_1 should be realized as declaration_list", function(done){
        var declaration_list = require("../../lib/rules").declaration_list;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = declaration_list(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_2 should be realized as declaration_list", function(done){
        var declaration_list = require("../../lib/rules").declaration_list;
        var file = __dirname + "/cases/case_2.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = declaration_list(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
