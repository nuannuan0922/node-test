Function.prototype.bind = function () {
    var args1 = arguments[0]; // 传入的this;
    var solidArgs = Array.prototype.slice.call(arguments, 1);
    var fn = this; // 要返回的方法;

    var FNOP = function () {};
    var toReturn = function () {
        var args = Array.prototype.slice.call(arguments, 0);

        fn.apply(this instanceof FNOP ? this : args1, solidArgs.concat(args));
    }
    FNOP.prototype = this.prototype;
    toReturn.prototype = new FNOP();

    return toReturn;
}

function test(name, age) {
    console.log(this);
    var height = '180cm';
    console.log(name);
    console.log(age);
    console.log(this.getSex())
    console.log(height);
}
test.prototype.getSex = function () {
    return 'femail';
}

var obj = {
    a: 1,
    name: 'blob'
}
var bindFn = test.bind(obj, obj.name);
new bindFn();