var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('buyTicket', function (from, to) {
	console.log('Buy ticket:Form ' + from + ' To ' + to);
});

emitter.on('error', function (err) {
	console.log('错误:' + err);
});

emitter.emit('buyTicket', '广州', '益阳');
emitter.emit('buyTicket', '益阳', '广州');