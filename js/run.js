var mysql = require('mysql'),
	connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		database : 'alarm_pi'
	}),
	moment = require('moment'),
	player = require('./player.js'),
	GPIO   = require('onoff'),
	button = new Gpio(4, 'in', 'both');

var query = 'SELECT * FROM ?? WHERE ?? >= ?',
	inserts = ['alarms', 'time', moment().format('H:m')],
	sql = mysql.format(query, inserts);

connection.connect();

setInterval( function() {
	var now = moment().format('H:m');

	connection.query(sql, function(err, rows){
		if (err) throw err;

		for(var i = 0; i < rows.length; ++i) {
			console.log(now + ' - ' + moment(rows[i].time, 'H:mm').format('H:mm'));
			if(now == moment(rows[i].time, 'H:mm').format('H:mm')) {
				console.log('hey');
			}
		}
	});

}, 1000);

button.watch(exit);

function exit() {
	connection.end();
	button.unexport();
	process.exit();
}