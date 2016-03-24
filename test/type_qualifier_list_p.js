var assert = require('assert');

describe('type_qualifier_list_p', function() {
    it('Should be able to require `type_qualifier_list_p` as a function', function () {
        var type_qualifier_list_p = require("../lib/type_qualifier_list_p").type_qualifier_list_p;
        assert(typeof(type_qualifier_list_p), "function");
    });
});
