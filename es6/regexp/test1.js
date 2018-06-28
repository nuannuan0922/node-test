var reg = /d(b+)d/gi;
var result1 = reg.exec('asdfdbbbbdwer');

console.log(reg, result1);
console.log(reg.lastIndex); // 10


var reg2 = /(\w)\s(\w)/;
var str2 = 'John Amy';
var afterStr2 = str2.replace(reg2, "$2, $1");
console.log(str2, afterStr2);

// var reg3 = /(\w)\s(\w)/;
// var str3 = 'John Amy';
// var afterStr3 = reg3[Symbol.split](str3, "$2, $1")
// console.log(afterStr3);