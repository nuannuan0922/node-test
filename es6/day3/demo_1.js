// let [(a)] = [1];
// let {x: (c)} = {};
// let ({x: c}) = {};


// [1, undefined, 3].map((x = 'yes') => x);

// function move({x, y} = { x: 0, y: 0 }) {
//     return [x, y];
//   }
  
//   console.log(move({x: 3, y: 8})); // [3, 8]
//   console.log(move({x: 3})); // [3, undefined]
//   console.log(move({})); // [undefined, undefined]
//   console.log(move()); // [0, 0]

// function move({x = 0, y = 0} = {}) {
//     return [x, y];
// }

// console.log(move({x: 3, y: 8}))
// console.log(move({x: 3}))
// console.log(move({}))
// console.log(move())


// var x = [[1, 2], [3, 4]].map(([a, b]) => a + b);
// // [[1, 2], [3, 4]].map(function (item) {
// //     a = item[0];
// //     b = item[1];
// //     return a+b;
// // })
// // [3, 7]
// console.log(x);


// 报错
// let { foo: {bar}} = {baz: 'baz'};



// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };

// var {loc: a, loc: {start: b, start: {line: c, column: d}}} = node;
// console.log(a, b, c, d);


// var obj = {
//     p: [
//         'hello',
//         {y : 'world'}
//     ]
// }

// var {p, p: [b, {y}]} = obj;
// console.log(b, y);


// let {foo: baz, foo} = {foo: 'aaa'};
// console.log(foo, baz);

// let {foo, foo: baz} = {foo: 'aaa'};
// console.log(foo, baz);

// let {foo: baz} = {foo: 'aaa'};
// console.log(foo, baz);


// let {foo = a()} = {};
// function a() {
//     console.log('run a');
//     return 'bbb';
// }
// console.log(foo);


// let {foo = a()} = {foo: 'aaa'};
// function a() {
//     console.log('run a');
//     return 'bbb';
// }
// console.log(foo);

// let {foo, bar} = {foo: 'aaa'};
// console.log(foo, bar);
// let {foo} = {foo: 'aaa', bar: 'bbb'};
// console.log(foo);
// let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
// console.log(foo, bar);


// let a = 1;
// let b = 2;
// let c = 3;

// let arr = [a, b, c];

// console.log(arr.toString());

// let [a, [[b], c]] = [1, [[2], 3]];
// console.log(a, b, c);

// let [, , c] = [1, 2, 3];

// console.log(c);

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head, tail);

// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x, y, z);


// let [foo = true] = [];
// console.log(foo);

// function a() {
//     console.log('run a');
//     return 'a';
// }

// let [v = a()] = [];
