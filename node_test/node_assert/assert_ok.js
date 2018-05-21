var assert = require('assert');

// assert.ok(1, 'hhh');
// assert.ok(0, 'hhh');
/**
    assert.js:42
        throw new errors.AssertionError({
        ^

    AssertionError [ERR_ASSERTION]: hhh
        at Object.<anonymous> (/Users/chengjia/霍超群/node-test/node_test/node_assert/demo_1.js:37:8)
        at Module._compile (module.js:660:30)
        at Object.Module._extensions..js (module.js:671:10)
        at Module.load (module.js:573:32)
        at tryModuleLoad (module.js:513:12)
        at Function.Module._load (module.js:505:3)
        at Function.Module.runMain (module.js:701:10)
        at startup (bootstrap_node.js:190:16)
        at bootstrap_node.js:662:3
 */

 
//  assert.ok('', '是错的')
//  assert.ok(' ', '是对的')
//  assert.ok(undefined, 'undefined是错的')
//  assert.ok(NaN, 'NaN是错的')
// assert.ok(null, 'null 是错的')
// assert.ok({}, '{} 是对的')
