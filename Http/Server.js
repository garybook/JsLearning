/**
 * Created by admin on 2017/10/11.
 */
/**
 * 加载http模块
 */
var http = require('http');
var server = http.createServer();
server.on('listening', function () {
    console.log('listening');
    console.log(server.address());
})
server.on('request', function (req, resp) {
    console.log('request coming');
    console.log(req.url);
    // console.log(resp);
      resp.writeHead(404,'',{
          'content-type':'text/html'
      });

    resp.write('<h1>hello</h1>');
    resp.end();
})
server.listen(8080,'localhost');
