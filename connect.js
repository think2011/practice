var connect = require('connect');
var server = connect.createServer();

/**
 * 处理静态文件
 */
server.use( connect.static(__dirname + '/views') );

server.listen(3000);

