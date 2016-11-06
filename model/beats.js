var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MySchema = {
	time : { type : Date, default: Date.now },
	beats: Number
}

var beat = mongoose.model('beat', MySchema);

module.exports = beat;