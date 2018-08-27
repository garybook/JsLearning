/**
 * Created by admin on 2017/10/10.
 */
require('./hellojs.js');
var v3 = require('./3.js');
console.log(v3);
// console.log(module);
// setImmediate(function () {
//     console.log('setImmediate launched');
// })
// var interval = setInterval(function(){
//     var d = new Date();
//     console.log(d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
//
// }, 1000);
// setTimeout( function () {
//     // clearInterval(interval);
// }, 10000)

// console.log(process.pid);
// console.log(process.title);
// process.stdin.resume();
// process.stdin.on('data', function (ssds) {
//     console.log(ssds)
//     process.stdout.write(ssds);
// });
var fs =  require('fs');
// if (!fs.existsSync('1.txt')){
//     fs.writeFileSync('1.txt','我的nodeJs文件操作');
// }else {
//     fs.readFile('1.txt','utf-8', function (err, data) {
//         console.log(err);
//         console.log(data);
//     })
// }

fs.watch('1.txt', function (eventType, fileName) {
    console.log(eventType);
})