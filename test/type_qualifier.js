var assert = require('assert');

describe('type_qualifier', function() {
    it('Should be able to require `type_qualifier` as a function', function () {
        var type_qualifier = require("../lib/rules").type_qualifier;
        assert(type_qualifier);
        assert(typeof(type_qualifier), "function");
    });
});
