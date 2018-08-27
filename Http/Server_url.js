/**
 * Created by admin on 2017/10/11.
 */
/**
 * 加载http模块
 * 加载url模块
 */
var http = require('http');
var url = require('url');
var server = http.createServer();
server.on('listening', function () {
    console.log('listening');
    console.log(server.address());
})
server.on('request', function (req, resp) {
    console.log('request coming');
    var urlStr = url.parse(req.url);
    switch (urlStr.pathname){
        case '/':
            resp.writeHead(200, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            resp.write('<h1>欢迎进入首页</h1>');
            break;
        case '/user':
            resp.writeHead(200, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            resp.write('<h1>欢迎进入个人中心！</h1>');
            break;
        default:
            resp.writeHead(404, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            resp.write('<h1>啊哦，404 你懂的!</h1>');
            break;
    }
    resp.end();
})
server.listen(8080, 'localhost');
