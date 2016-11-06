var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MySchema = {
	name: String,
	age: Number
}

var myUser = mongoose.model('myuser', MySchema);

module.exports = myUser;