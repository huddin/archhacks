var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MySchema = {
	time : { type : Date, default: Date.now },
	sound: Number
}

var sound = mongoose.model('sound', MySchema);

module.exports = sound;