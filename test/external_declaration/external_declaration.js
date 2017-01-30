var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('external_declaration', function() {
    it('Should be able to require `external_declaration` as a function', function () {
        var external_declaration = require("../../lib/rules").external_declaration;
        assert(external_declaration);
        assert(typeof(external_declaration), "function");
    });

    it("case_1 should be realized as external_declaration", function(done){
        var external_declaration = require("../../lib/rules").external_declaration;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = external_declaration(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
