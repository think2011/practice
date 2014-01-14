var connect = require('connect');
var server = connect.createServer();
var result = require('superAgent');

/**
 * 1 载入日志中间件
 * 2 载入接收值中间件
 * 3 指定静态文件路径
 * 4 请求根据get值发送给豆瓣api并反馈接口
 */
server.use(connect.logger('dev'));
server.use(connect.query());
server.use('/', connect.static('./views'));
server.use('/api', function (req, res) {
    result
        .get('http://api.douban.com/v2/movie/search')
        .query(req.query)
        .end(function (data) {
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(JSON.stringify(data.body));
        });
});

server.listen(3000);
