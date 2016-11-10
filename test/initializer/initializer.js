var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");
var Ajv = require("ajv");
var ajv = new Ajv();
var schema = require("../../lib/parse-tree-schema");
var validate = ajv.compile(schema);

describe('initializer', function() {
    it('Should be able to require `initializer` as a function', function () {
        var initializer = require("../../lib/rules").initializer;
        assert(initializer);
        assert(typeof(initializer), "function");
    });

    it("case_1 should be realized as initializer", function(done){
        var initializer = require("../../lib/rules").initializer;
        var file = __dirname + "/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_stream){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0 };
                resulting_json = initializer(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
