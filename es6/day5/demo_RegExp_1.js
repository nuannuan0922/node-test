var x = '\uD83D\uDC2A'
console.log(x.length);
console.log(/^\uD83D/.test(x));// true
console.log(/^\uD83D/u.test(x));// false

var s = '𠮷';

console.log(/^.$/.test(s)); // false
console.log(/^.$/u.test(s)); // true

// console.log(String.fromCharCode('\u212A'))
// console.log(String.fromCharCode('\u004B'))
console.log(String.fromCharCode(75))

console.log(/[a-z]/iu.test('\u212A'));