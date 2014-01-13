var http = require('http');
var qs = require('querystring');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url == '/') {

        var html = '<form action="/url" method="post">' +
            '<h1>Form Method Test</h1>' +
            '<p>what is your name?</p>' +
            '<input name="name" type="text" />' +
            '<input type="submit" />' +
            '</form>';
        res.end(html);
    } else if (req.url == '/url') {

        var body = '';

        req.on('data', function (chunk) {
            body += chunk;

        });

        req.on('end', function () {
            var contents = '收到内容 <code>' + JSON.stringify( qs.parse(body) ) + '</code>' + ' method <code>' + req.method + '</code>';
            res.end(contents);
        });
    } else {
        res.writeHead(404);
        res.end('404 - 找不到内容');

    }
}).listen('3000');
