var assert = require('assert');

assert.deepEqual(1, '1', '数字1 和 字母1 deepEqual')
assert.deepEqual({}, {}, '{} 和 {} deepEqual');
assert.deepEqual(null, null, 'null 和 null deepEqual');
// assert.deepEqual({a: 1}, {a: 2}, '{a: 1} 和 {a: 2} not deepEqual');
// assert.deepEqual({a: 1}, {a: 1}, '{a: 1} 和 {a: 1}     deepEqual');
assert.deepEqual({a: {b: {c : {d: 1}}}}, {a: {b: {c : {d: 1}}}}, '{a: {b: {c : {d: 1}}}} 和 {a: {b: {c : {d: 1}}}}     deepEqual');
assert.deepEqual({a: {b: {c : {d: [1]}}}}, {a: {b: {c : {d: [1]}}}}, '{a: {b: {c : {d: [1]}}}} 和 {a: {b: {c : {d: [1]}}}}     deepEqual');
