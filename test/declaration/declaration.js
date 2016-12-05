var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('declaration', function() {
    it('Should be able to require `declaration` as a function', function () {
        var declaration = require("../../lib/rules").declaration;
        assert(declaration);
        assert(typeof(declaration), "function");
    });

    it("case_1 should be realized as declaration", function(done){
        var declaration = require("../../lib/rules").declaration;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = declaration(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_2 should be realized as declaration", function(done){
        var declaration = require("../../lib/rules").declaration;
        var file = __dirname + "/cases/case_2.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = declaration(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_3 should be realized as declaration", function(done){
        var declaration = require("../../lib/rules").declaration;
        var file = __dirname + "/cases/case_3.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = declaration(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
