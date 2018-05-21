// equal 相当于两个等于号

var assert = require('assert');

// assert.equal(Math.max(1, 99), 100)
/**
    assert.js:42
        throw new errors.AssertionError({
        ^
    AssertionError [ERR_ASSERTION]: 99 == 100
        at Object.<anonymous> (/Users/chengjia/霍超群/node-test/node_test/node_assert/demo_1.js:3:20)
        at Module._compile (module.js:657:14)
        at Object.Module._extensions..js (module.js:671:10)
        at Module.load (module.js:573:32)
        at tryModuleLoad (module.js:513:12)
        at Function.Module._load (module.js:505:3)
        at Function.Module.runMain (module.js:701:10)
        at startup (bootstrap_node.js:190:16)
        at bootstrap_node.js:662:3
    Waiting for the debugger to disconnect...
    AssertionError: 99 == 100
    errors.js:86
        at Object.<anonymous> (/Users/chengjia/霍超群/node-test/node_test/node_assert/demo_1.js:3:20)
        at Module._compile (module.js:657:14)
        at Object.Module._extensions..js (module.js:671:10)
        at Module.load (module.js:573:32)
        at tryModuleLoad (module.js:513:12)
        at Function.Module._load (module.js:505:3)
        at Function.Module.runMain (module.js:701:10)
        at startup (bootstrap_node.js:190:16)
        at bootstrap_node.js:662:3
 */


// assert.equal(Math.max(1, 99), 99)
// assert.equal(Math.max(1, 99), '99')



// assert.equal(2, '2', '数字和字母不相等'); // 没有输出

// assert.notEqual(1, '1', '数字和字符串相等')
/**
    assert.js:42
        throw new errors.AssertionError({
        ^

    AssertionError [ERR_ASSERTION]: 数字和字符串相等
        at Object.<anonymous> (/Users/chengjia/霍超群/node-test/node_test/node_assert/demo_1.js:57:8)
        at Module._compile (module.js:660:30)
        at Object.Module._extensions..js (module.js:671:10)
        at Module.load (module.js:573:32)
        at tryModuleLoad (module.js:513:12)
        at Function.Module._load (module.js:505:3)
        at Function.Module.runMain (module.js:701:10)
        at startup (bootstrap_node.js:190:16)
        at bootstrap_node.js:662:3
 */



//  assert.equal(1, 1, '数字1 和 数字1 相等')
//  assert.equal(0, 0, '数字0 和 数字0 数字相等')
//  assert.equal(NaN, NaN, 'NaN 和 NaN 不相等')
//  assert.equal(0, '', '0 和空字符串 相等')
//  assert.equal(undefined, null, 'undefined 和null 相等')
//  assert.equal({}, {}, '{} 和 {} 不相等')
