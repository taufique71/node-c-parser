var assert = require("assert");
var expect = require("chai").expect;
var jsonfile = require("jsonfile");

describe('compound_stmt', function() {
    it('Should be able to require `compound_stmt` as a function', function () {
        var compound_stmt = require("../../lib/rules").compound_stmt;
        assert(compound_stmt);
        assert(typeof(compound_stmt), "function");
    });

    it("case_1 should be realized as compound statement", function(){
        var compound_stmt = require("../../lib/rules").compound_stmt;
        var file = __dirname + "/compound_stmt/cases/case_1.js"
        jsonfile.readFile(file, function(err, token_strem){
            if(err) done(err);
            else{
                var arrow = { "pointer": 0};
                resulting_json = compound_stmt(token_stream, arrow);
                expect(resulting_json).to.not.be.null;
                expect(validate(resulting_json)).to.equal(true);
                done();
            }
        });
    });
});
