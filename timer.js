var moment 	= require('moment'),
	now 	= moment();

module.exports = {
	run: function(alarms) {
		setInterval(function() {
			if( check(alarms) ){
				//trigger music
			}
		}, 1000);
	}
}

function check(time) {
	//loop through alarms that are later than now and check 
	return time == moment().format("h:ma");
}
