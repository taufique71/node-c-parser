var assert = require('assert');

describe('stmt_list_p', function() {
    it('Should be able to require `stmt_list_p` as a function', function () {
        var stmt_list_p = require("../lib/rules").stmt_list_p;
        assert(typeof(stmt_list_p), "function");
    });
});
