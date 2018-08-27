/**
 * Created by admin on 2017/10/12.
 */
'use strict'
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var server = http.createServer();
var htmlBasePath = __dirname+'/html/';

server.listen(8080,'localhost');
server.on('request', function (req,resp) {
    var urlStr = url.parse(req.url);
    switch (urlStr.pathname){
        case '/':
            resp.writeHead(200, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            sendData(htmlBasePath+'index.html', req, resp);
            break;
        case '/user':
            resp.writeHead(200, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            sendData(htmlBasePath+'user.html', req, resp);
            break;
        case '/login':
            resp.writeHead(200, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            console.log(querystring.parse(urlStr.query));
            sendData(htmlBasePath+'login.html', req, resp);
            break;
        case '/login/check':
            resp.writeHead(200, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            if (req.method==='POST'){
                var postData='';
                req.on('data', function (data) {
                    postData+=data;
                })
                req.on('end',function () {
                    console.log('end');
                    var tmpData = querystring.parse(postData);
                    console.log(tmpData.username);
                })
            }
            console.log(querystring.parse(urlStr.query));
            sendData(htmlBasePath+'login.html', req, resp);
            break;
        default:
            resp.writeHead(404, '', {
                'content-type': 'text/html;charset=utf-8'
            });
            sendData(htmlBasePath+'404.html', req, resp);
            break;
    }

})

function sendData(path, req, resp) {
    fs.readFile(path, function (err, data) {
        if (err){
            resp.write('<h1>啊哦，404 你懂的!</h1>');
            resp.end();
        }else {
            resp.write(data);
            resp.end();
        }
    })

}