var fs = require('fs');

var readerStream = fs.createReadStream('./package.json');

readerStream.on('data', function (data) {
    console.log(data.toString());
    console.log('data event');
});

readerStream.on('end', function () {
    console.log(arguments);
    console.log('end event');
});

readerStream.on('error', function(err){
    console.log(err.stack);
 });


 var data = 'hello node stream write!';
 var writeStream = fs.createWriteStream('./node_stream_1.json');
 writeStream.write(data, 'utf8');
 writeStream.end();

 writeStream.on('finish', function () {
     console.log('finish triggered');
     console.log(arguments);
 });

 writeStream.on('err', function () {
    console.log('err triggered');
    console.log(arguments);
 });



writeStream = fs.createWriteStream('./node_stream_1.json', {'flags': 'a'});
readerStream.pipe(writeStream);



readerStream = fs.createReadStream('./node_stream_2.json');

readerStream.on('data', function (data) {
    console.log(data.toString());
    console.log('data event');
});

readerStream.on('end', function () {
    console.log(arguments);
    console.log('end event');
});

readerStream.on('error', function(err){
    console.log(err.stack);
 });

 // 压缩文件
 var zlib = require('zlib');

fs.createReadStream('./package.json')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./packagezip.json.gz'));


 // 解压缩文件
fs.createReadStream('./packagezip.json.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./hh.json'));