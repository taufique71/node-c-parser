var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('translation_unit', function() {
    it('Should be able to require `translation_unit` as a function', function () {
        var translation_unit = require("../../lib/rules").translation_unit;
        assert(translation_unit);
        assert(typeof(translation_unit), "function");
    });

    it("case_1 should be realized as translation_unit", function(done){
        var translation_unit = require("../../lib/rules").translation_unit;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = translation_unit(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_2 should be realized as translation_unit", function(done){
        var translation_unit = require("../../lib/rules").translation_unit;
        var file = __dirname + "/cases/case_2.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = translation_unit(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_3 should be realized as translation_unit", function(done){
        var translation_unit = require("../../lib/rules").translation_unit;
        var file = __dirname + "/cases/case_3.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = translation_unit(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_4 should be realized as translation_unit", function(done){
        var translation_unit = require("../../lib/rules").translation_unit;
        var file = __dirname + "/cases/case_4.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = translation_unit(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_5 should be realized as translation_unit", function(done){
        var translation_unit = require("../../lib/rules").translation_unit;
        var file = __dirname + "/cases/case_5.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = translation_unit(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });

    it("case_6 should be realized as translation_unit", function(done){
        var translation_unit = require("../../lib/rules").translation_unit;
        var file = __dirname + "/cases/case_6.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = translation_unit(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                expect(arrow.pointer).to.equal(token_stream.length);
                done();
            }
        });
    });
});
