var fs = require('fs');

// fs.readFile('./package.json', function (e, content) {
//     if (e) {
//         return e;
//     }
//     console.log(content.toString());
// });

// var data = fs.readFileSync('./hh.json');
// console.log(data.toString());

// fs.open('./hh.json', 'r', function (e, a) {
//     console.log(e);
//     console.info(a);
// })

// fs.stat('./package.json', function (e, a) {
//     console.log(a);
// })


// fs.writeFile('./node_fs_demo_1.txt', '-----------我是node文件系统写文件的测试文件', function (e) {
//     if (e) {
//         return e;
//     }
//     console.log('数据写入成功\n');
//     console.log('-----------------开始读文件---------------')
//     var content = fs.readFileSync('./node_fs_demo_1.txt');

//     console.log(content.toString());
// });

// fs.writeFile('./node_fs_demo_2.txt', '--我是node文件系统写文件的测试文件', function (e) {
//     fs.open('./node_fs_demo_2.txt', 'r+', function (e, fd) {
//         var buf = new Buffer(1024);
//         fs.read(fd, buf, 2, 5, 3, function () {
//             console.log(arguments[2].toString());

//             fs.close(fd, function () {
//                 console.log(arguments);
//                 console.log('成功关闭文件')
//             });
//         });
//     });
// });

// fs.writeFile('./node_fs_demo_3.txt', '1234567890', function (e) {
//     fs.open('./node_fs_demo_3.txt', 'r+', function (e, fd) {
//         fs.ftruncate(fd, 3, function () {
//             console.log(arguments);
//             console.log(fs.readFileSync('./node_fs_demo_3.txt').toString())
//             fs.close(fd, function () {
//                 console.log('成功关闭文件')
//             });
//         });
//     });
// });

// fs.writeFile('./node_fs_demo_4.txt', '1234567890', function (e) {
//     fs.unlink('./node_fs_demo_4.txt', function () {
//         console.log('已删除文件');

//         // console.log(fs.readFileSync('./node_fs_demo_4.txt').toString())
//         /*
//             fs.js:663
//                 return binding.open(pathModule.toNamespacedPath(path),
//                                 ^

//                 Error: ENOENT: no such file or directory, open './node_fs_demo_4.txt'
//                     at Object.fs.openSync (fs.js:663:18)
//                     at Object.fs.readFileSync (fs.js:568:33)
//                     at /Users/chengjia/霍超群/node-test/node_runoob/20180508/node_fs.js:63:24
//                     at FSReqWrap.oncomplete (fs.js:149:20)
//         */

//         fs.readFile('./node_fs_demo_4.txt', function (e, content) {
//             if (e) {
//                 return console.log(e);
//             }
//             console.log(content.toSting())
//         });
//     })
// });

fs.mkdir('./node_fs_dir_test_1', function () {
    console.log('目录创建成功');
    fs.writeFile('./node_fs_dir_test_1/1.txt', '1', function () {
        fs.readdir('./node_fs_dir_test_1', function () {
            console.log(arguments);
            fs.rmdir(__dirname + '/node_fs_dir_test_1', function () {
                console.log('删除成功');
                console.log(arguments)
            })
        })
    });
    

   
});






















console.log('end');