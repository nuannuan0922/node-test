// assign 是浅拷贝
var obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

console.log(JSON.stringify(obj)); // {"baz":3}
var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }


var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }


var target = Object.defineProperty({}, 'foo', {
    value: 1,
    writable: false
  }); // target.foo is a read-only property
  
  Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
  // TypeError: "foo" is read-only
  // The Exception is thrown when assigning target.foo
  
  console.log(target.bar);  // 2, the first source was copied successfully.
  console.log(target.foo2); // 3, the first property of the second source was copied successfully.
  console.log(target.foo);  // 1, exception is thrown here.
  console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
  console.log(target.baz);  // undefined, the third source will not be copied either.


  var obj = {
    foo: 1,
    get bar() {
      return 2;
    }
  };
  
  var copy = Object.assign({}, obj); 
  console.log(copy); 
  // { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.
  
  // This is an assign function that copies full descriptors
  function completeAssign(target, ...sources) {
    sources.forEach(source => {
      let descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
      // by default, Object.assign copies enumerable Symbols too
      Object.getOwnPropertySymbols(source).forEach(sym => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  
  var copy = completeAssign({}, obj);
  console.log(copy);
  // { foo:1, get bar() { return 2 } }