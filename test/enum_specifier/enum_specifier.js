var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('enum_specifier', function() {
    it('Should be able to require `enum_specifier` as a function', function () {
        var enum_specifier = require("../../lib/rules").enum_specifier;
        assert(enum_specifier);
        assert(typeof(enum_specifier), "function");
    });

    it("case_1 should be realized as enum_specifier", function(done){
        var enum_specifier = require("../../lib/rules").enum_specifier;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = enum_specifier(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
