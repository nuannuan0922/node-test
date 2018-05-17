// var s = '𠮷'

// console.log(s.length);
// console.log(s.charAt(0));
// console.log(s.charAt(1));
// console.log(s.charCodeAt(0));
// console.log(s.charCodeAt(1));

// let s = '𠮷a';
// console.log(s.codePointAt(0));
// console.log(s.codePointAt(1));
// console.log(s.codePointAt(2));
// console.log(s.codePointAt(3));

// let s = '𠮷a';
// console.log(s.codePointAt(0).toString(16))
// console.log(s.codePointAt(2).toString(16))

// let s = '𠮷a';
// for (let char of s) {
//     console.log(char.codePointAt(0).toString(16));
// }


// let s = '𠮷a';

// function is32Bit(str) {
//     return str.codePointAt(0) > 0xFFFF;
// }
// console.log(is32Bit('𠮷'));
// console.log(is32Bit('a'));

// let s = 'Hello World! ';
// console.log(s.includes('or'));
// console.log(s.startsWith('He'));
// console.log(s.endsWith('d!'));

// let s = 's';
// console.log(s.repeat(5));
// console.log(s.repeat(0));
// console.log(s.repeat(3.4));
// console.log(s.repeat(3.6));
// console.log(s.repeat(-0.6));
// // console.log(s.repeat(-2));
// /*
// RangeError: Invalid count value
//     at String.repeat (native)
// */
// console.log(s.repeat(NaN));
// // console.log(s.repeat(Infinity));
// /*
// RangeError: Invalid count value
//     at String.repeat (native)
//     at Object.<anonymous> (/Users/chengjia/霍超群/node-test/es6/day4/demo_1.js:47:15)
//     at Module._compile (module.js:660:30)
//     at Object.Module._extensions..js (module.js:671:10)
//     at Module.load (module.js:573:32)
//     at tryModuleLoad (module.js:513:12)
//     at Function.Module._load (module.js:505:3)
//     at Function.Module.runMain (module.js:701:10)
//     at startup (bootstrap_node.js:190:16)
//     at bootstrap_node.js:662:3
// */

// // console.log(s.repeat('Infinity'));
// /*
// RangeError: Invalid count value
//     at String.repeat (native)
//     at Object.<anonymous> (/Users/chengjia/霍超群/node-test/es6/day4/demo_1.js:47:15)
//     at Module._compile (module.js:660:30)
//     at Object.Module._extensions..js (module.js:671:10)
//     at Module.load (module.js:573:32)
//     at tryModuleLoad (module.js:513:12)
//     at Function.Module._load (module.js:505:3)
//     at Function.Module.runMain (module.js:701:10)
//     at startup (bootstrap_node.js:190:16)
//     at bootstrap_node.js:662:3
//  */

// console.log(s.repeat('4'));
// console.log(s.repeat('4ssss'));

// let s = 'xxx';

// console.log(s.padStart(10, 'ab'));
// console.log(s.padEnd(10, 'ab'))
// console.log(s.padStart(2, 'ab'))
// console.log(s.padEnd(2, 'ab'))
// console.log(s.padStart(5, '123456'))
// console.log(s.padEnd(5, '123456'))
// console.log(s.padStart(5))
// console.log(s.padEnd(5))

// let x = `In 
// Javascript \n hshshs!`

// console.log(x);

// let x = `first line
// seconde line`
// console.log(x);


// let x = `first line
// this
// seconde line`
// console.log(x);


// let x = `first line
// ${this}
// seconde line`
// console.log(x);

// var s = `first line ----------------------s
// second line ------------------------------s`
// let x = `first line -----------------------x
// ${s}
// seconde line ------------------------------x`
// console.log(s, x);


// var s = `first line ----------------------s
// second line ------------------------------s`
// let x = `first line -----------------------x ${s} seconde line ------------------------------x`
// console.log(s, x);

// let name = "Bob", time = "today";
// console.log(`Hello ${name}, how are you ${time}?`)


// function returnStr() {
//     return 'Hello World!'
// }
// console.log(`hahaha  ${returnStr()} hahahah`);

// const temp = addrs => `Hello ----------
// ${addrs.map(addr => `
// inner hello *************
// ${addr.firstName + addr.lastName}
// inner hello *************
// `)}
// ---------orld`

// var data = [
//     {firstName: 'a', lastName: 'b'},
//     {firstName: 'c', lastName: 'd'}
// ]

// console.log(temp(data));

// var data = [
//     {firstName: 'a', lastName: 'b'},
//     {firstName: 'c', lastName: 'd'}
// ]
// let template = `
// <ul>
//     <% for (var i = 0; i < 3; i++) { %>
//         <li> <%= data[i].firstName + data[i].lastName %></li>
//     <% } %>
// </ul>
// `
// console.log(template);

// echo('<ul>');

// console.log`hello world`
// console.log('hello world');

// function tag(argArr, argInt1, argInt2) {
//     for (var i = 0; i < argArr.length; i++) {
//         console.log(`*${argArr[i]}*`);
//     }
//     console.log(argInt1, argInt2);
//     return 'OK';
// }
// var a = 5, b = 10;
// console.log(tag`Hello ${a + b} World ${a*b} !`);
// console.log(tag(['Hello ', ' World ', ' !'], a + b, a * b))

// function passthru(literals, ...values) {
//     let output = '';
//     for (let i = 0; i < literals.length; i++) {
//         output += literals[i] + (values[i] || '')
//     }
//     return output;
// }
// var a = 5, b = 10;
// console.log(passthru`Hello ${a + b} World ${a*b} !`)


// var a = 5, b = 10;
// console.log`${a + b} hello world`;









































