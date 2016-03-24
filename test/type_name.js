var assert = require('assert');

describe('type_name', function() {
    it('Should be able to require `type_name` as a function', function () {
        var type_name = require("../lib/type_name").type_name;
        assert(typeof(type_name), "function");
    });
});
