const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node ' + 'demo_1_support.js ' + i, {
        cwd: __dirname,
        env: {
            a: 123
        }
    }, function (e, stdout, stderr) {
        if (e) {
            console.log(e.stack);
            console.log('Error code: ' + e.code);
            console.log('Signal received: ' + e.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function (code, signal) {
        console.log(arguments, '子进程已退出。');
    })
}