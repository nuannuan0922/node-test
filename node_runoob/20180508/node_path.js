var path = require('path');

console.log('path normalization ------ ' + path.normalize('/a/b/c/d/../e.txt'))
console.log('joint path -------------- ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
console.log('path join --------------- ' + path.join('/a/b', 'c', 'd/e.txt'))
console.log('path resolve ------------ ' + path.resolve('index.html'))
console.log('path isAbsolute --------- ' + path.isAbsolute('index.html'))
console.log('path isAbsolute --------- ' + path.isAbsolute(path.resolve('index.html')))
console.log('path dirname ------------ ' + path.dirname(path.resolve('index.html')))
console.log('path basename ----------- ' + path.basename(path.resolve('index.html')))
console.log('path extname ------------ ' + path.extname(path.resolve('index.html')))
console.log('path parse -------------- ' + path.parse('/a/b/c/d/e.txt'))
console.log('path format ------------- ' + path.format(path.parse('/a/b/c/d/e.txt')))
console.log('path sep ---------------- ' + path.sep)
console.log('path delimiter ---------- ' + path.delimiter)
console.log('path win32 -------------- ' + path.win32)
console.log('path posix -------------- ' + path.posix)