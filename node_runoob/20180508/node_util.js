var util = require('util');

function Child() {
    this.name = 'child';
    this.age = '23';
    this.sayName = function () {
        console.log(this.name);
    }
}

function Parent() {
    this.name = 'parent';
    this.age = '56';
    this.sayAge = function () {
        console.log(this.age);
    }
}

Parent.prototype.showName = function () {
    console.log(this.name);
}

util.inherits(Child, Parent);

var child = new Child();
var parent = new Parent();

// child.sayAge();
child.showName();
child.sayName();
parent.sayAge();
parent.showName();

var obj = {
    a: {
        b:{
            c: {
                d: 123
            }
        }
    },
    attr: 'hello world'
}
console.log(util.inspect(child));
console.log(util.inspect(obj));