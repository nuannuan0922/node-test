// global
// __filename

console.log(__filename);
console.log(__dirname);
console.trace();

// process: global.process

process.on('beforeExit', function () {
    console.log(arguments);
    console.log('beforeExit');
})

process.on('exit', function () {
    console.log(arguments);
    console.log('exit');
})

process.on('Signal', function () {
    console.log(arguments);
    console.log('Signal');
})

process.on('uncaughtException', function () {
    console.log(arguments);
    console.log('uncaughtException');
})

// console.log(process.env);

// console.log(process.versions);
// console.log(process.config);
// console.log(process.pid);
// console.log(process.arch);
// console.log(process.platform);
// console.log(process.stdout.write('Hello node global'));
// console.log(process.stderr.write('hhhh'));
// console.log(process.stdin.read());
// console.log(process.stdin.argv);


console.log(process.cwd())
// process.abort();

// process.exit(2)

// console.log(process.kill(process.getgid()));
console.log(process.getgid());
console.log(process.getuid());
console.log(process.getgroups());
console.log(process.memoryUsage());
console.log(process.uptime());