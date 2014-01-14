var express = require('express');

var app = express.createServer();

/**
 * 配置
 */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/**
 * 路由
 */
app.get('/', function (req, res) {
    res.render('index.ejs');
});

/**
 * 监听端口
 */
app.listen(3000);