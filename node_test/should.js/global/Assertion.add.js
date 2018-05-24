
var should = require('should');

// should.Assertion.add('demo1', function () {
//     console.log('demo1 : ');
//     console.log(arguments);
// });

// should.Assertion.addChain('demo2', function () {
//     console.log('demo2 : ');
//     console.log(arguments);
// });

// should.Assertion.alias('demo1', 'demo3');

// console.log(should.PARAM_REGEXP)
// // console.log(a.finally);

// var a = new should.Assertion(42);


// // console.log(a.finally); // demo of PromiseAssertion

// a.params = {
//     operator: 'to be a num'
// }
// // a.assert(false);
// // a.assert(true);

// var b = new should.Assertion(24);
// b.params = {
//     operator: 'to be magic num'
// }
// b.fail()

// console.log(Object.keys(a).join(', '));
// console.log(a.anyOne);
// console.log(a.obj);
// console.log(Object.keys(should.Assertion).join(', '));
// console.log(Object.keys(should.Assertion.prototype).join(', '));
// console.log(typeof should.Assertion.prototype.any)
// console.log(should.Assertion.prototype.assert)

// should.Assertion.prototype.any

/**
 * .an, .of, .a, .and, .be, .have, .with, .is, .which. Use them for better readability;
 * But some (eg: .length and .property) move the assertion object to a property value, so be careful.
 */

 var obj = {
     id: 1,
     name: '张三',
     age: 23,
     sex: 'male',
     childs: ['lili']
 }

 obj.should.be.an.instanceOf(Object)
 obj.should.have.property('id')
//  obj.should.have.property('hh')
obj.should.is.an.instanceof(Object)
obj.should.is.not.an.instanceof(Array).and.which.have.property('childs').with.lengthOf(1);

// someAsyncTask(foo, function (err, result) {
//     should.not.exist(err);
//     should.exist(result);
//     result.bar.should.equal(foo);
// })

(5).should.be.exactly(5).and.be.a.Number()

/**
 * this in assertion function will be instance of should.Assertion 
 * and you must define in any way this.params object in your assertion function call before assertion check happen.
 * 
 * There you can see that assertion function do not define own this.params and 
 * instead call within the same assertion .exactly that will fill this.params.
 *  You should use this way very carefully, 
 * but you can use it.
 */

 should.Assertion.add('huo', function () {
     this.params = {
         operator: ' to be huo',
         expected: 'huo'
     }
     should(this.obj).have.property('name').and.is.equal('huo')
 })

 var obj_huo = {
     id: 2,
     name: 'huo'
 }

 obj.should.not.be.an.huo()
 obj_huo.should.be.an.huo();

 obj_huo.should.any.huo();
//  obj_huo.should.not.any.huo();
// Object.keys(obj_huo).only.property('id')

var obj_id = {
    id: 3
}
Object.keys(obj_id).should.have.an.property('0', 'id')

var obj_format = {
    id: 4,
    name: '4'
}
// console.log(should.format(obj_format));
// console.log(should.parse(should.format(obj_format)));

var obj_4 = {
    id: 4,
    name: '4'
}

should(obj_format).deepEqual(obj_4);

var a = {a: 10}, b = Object.create(null);
b.a = 10;

// a.should.be.eql(b);


[1, 2, 3].should.containDeep([3, 2]);
// [1, 2, 3].should.containDeepOrdered([3, 2]);
[1, 2, [3, 4]].should.containDeepOrdered([[3, 4]]);
({a: 1, b: {c: 2}}).should.containDeepOrdered({b: {c: 2}});

([1, 2]).should.be.an.Array();
(true).should.be.an.Boolean();
(new Date()).should.be.an.Date();

function hahaFn() {
    var args = arguments;
    should(args).is.arguments()
}
hahaFn();

should(null).null();

(123).should.be.type('number');
({}).should.empty();
({a: 1, b: 2}).should.keys('a','b');

({a: 1, b: 2}).should.keys('a');

({a: {b: {c: {d: {e: 1}}}}}).should.propertyByPath('a', 'b', 'c');

({a: {b: {c: 1}}}).should.be.eql({a: {b: {c: 1}}});
// (1).should.be.generator();
(new should.Assertion({a: 1})).generator();