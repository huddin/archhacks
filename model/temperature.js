var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MySchema = {
	time : { type : Date, default: Date.now },
	temperature: Number
}

var temp = mongoose.model('temp', MySchema);

module.exports = temp;