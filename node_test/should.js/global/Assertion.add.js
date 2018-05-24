
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