var child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['demo_2_support.js', i], {
        cwd: __dirname
    });
    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    workerProcess.on('close', function (code) {
        console.log('子进程已退出。退出码 ' + code)
    });
}