var assert = require('assert');

describe('type_qualifier_list', function() {
    it('Should be able to require `type_qualifier_list` as a function', function () {
        var type_qualifier_list = require("../lib/type_qualifier_list").type_qualifier_list;
        assert(typeof(type_qualifier_list), "function");
    });
});
