var connect = require('connect'),
    users = require('./users.json');

/**
 * create server
 */
var server = connect(
    connect.logger('dev'),

    connect.bodyParser(),

    connect.cookieParser(),

    connect.session( {secret: 'my app secret'} ),

    function (req, res ,next) {
        // 进入注册页
        console.log(req.session.name); // 在控制台输出session
        if ( req.url == '/' && req.method == 'GET' && !req.session.logged_in ) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(
                '<form action="/login" method="post">' +
                    '<label>帐号</label> <input type="text" name="name" />' +
                    '<label>密码</label> <input type="password" name="password" />' +
                    '<input type="submit" value="立即登陆" />' +
                    '</form>'
            )
        } else {
            next();
        }
    },

    function (req, res, next) {
        // 验证页
        if ( req.url == '/login' && req.method == 'POST' ) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            console.log(req.body);
            if ( req.body.name != users.name ||  req.body.password != users.password ) {
                res.end('Bad username/password <a href="/">go back</a>');
            } else {
                req.session.logged_in = true;
                req.session.name = users.name;
                res.end('pass');
            }
        } else {
            next();
        }
    },

    function (req, res, next) {
        // 通过验证页
        if ( req.url == '/' && req.session.logged_in ) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(
                'welcome back, <b>'+ req.session.name +'</b>.' +
                    '<a href="/logout">Logout</a>'
            )
        } else {
            next();
        }
    },

    function (req, res, next) {
        // 注销页
        if ( req.url == '/logout' ) {
            res.writeHead(200);
            req.session.logged_in = false;
            res.end('logout success');
        } else {
            next();
        }
    }
);

server.listen(3000);