var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('compound_stmt', function() {
    it('Should be able to require `compound_stmt` as a function', function () {
        var compound_stmt = require("../../lib/rules").compound_stmt;
        assert(compound_stmt);
        assert(typeof(compound_stmt), "function");
    });

    it("case_1 should be realized as compound statement", function(done){
        var compound_stmt = require("../../lib/rules").compound_stmt;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = compound_stmt(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_2 should be realized as compound statement", function(done){
        var compound_stmt = require("../../lib/rules").compound_stmt;
        var file = __dirname + "/cases/case_2.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = compound_stmt(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_3 should be realized as compound statement", function(done){
        var compound_stmt = require("../../lib/rules").compound_stmt;
        var file = __dirname + "/cases/case_3.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = compound_stmt(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_4 should be realized as compound statement", function(done){
        var compound_stmt = require("../../lib/rules").compound_stmt;
        var file = __dirname + "/cases/case_4.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = compound_stmt(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
