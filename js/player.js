var player = require('node-mplayer');

module.exports = {
	play: function(file) {
		player.play(file);
	},
	snooze: function(time){
		setTimeout( function() {
			player.pause();
		}, time);
	},
	stop: function() {
		player.stop();
	}
}
