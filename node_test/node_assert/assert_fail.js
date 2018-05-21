var assert = require('assert');

// assert.fail('ssss');

assert.throws(function () {
    assert.fail('跑出了异常')
}, '不会输出这句话，因为跑出了异常');