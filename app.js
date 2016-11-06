var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var myUser = require('./model/model.js');

/*** DB FILES ***/

var temp = require('./model/temperature.js');
var beat = require('./model/beats.js');
var sound = require('./model/sound.js');

/*** DB FILES END ***/
var plotly = require('plotly')('huddin', 'ry5m4i6wz7');

bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json());
app.set('view engine', 'ejs');


var middleware = require('./middleware.js');

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

mongoose.connect('mongodb://localhost/myapp');



/******* DB CONNECTIONS *********/

/*--------- Data Recorders-------*/


app.get('/pressure', function(req, res){

	/*
	var tmp = myUser({
	  name: 'Peter Quill',
	  age: 60
	});


	tmp.save(function(err){
		if (err) {
			console.log(err);
		}
	});
	*/
	res.send(req.headers.pressure);
});
/*
var tagline = "EJS IS WORKING NOW"
var myVar = [
  {
    x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
    y: [1, 3, 6],
    type: 'scatter'
  }
  
];



app.get('/', function(req, res){
	res.sendfile('./public/index.html');
});

app.get('/createuser', function(req, res){
	var tmp = myUser({
	  name: 'Peter Quill',
	  age: 60
	});


	tmp.save(function(err){
		if (err) {
			console.log(err);
		}
	});

	tmp = myUser({
	  name: 'Haris',
	  age: 45
	});


	tmp.save(function(err){
		if (err) {
			console.log(err);
		}
	});

	tmp = myUser({
	  name: 'Uddin',
	  age: 95
	});


	tmp.save(function(err){
		if (err) {
			console.log(err);
		}
	});

	res.send('User made and saved');
});



app.get('/showuser', function(req, res){
	var projections = {
		_id:false,
		__v:false,
		age:false

	};

	var projections2 = {
		_id:false,
		__v:false,
		name:false

	};
	
	

	myUser.find({},projections, function(err, users) {
  		if (err) throw err;
  		
  		console.log(users);

  		myUser.find({}, projections2, function(err, name){
  			if (err) throw err;
  			console.log(name);
  			res.render('./index', {
				myVar: [
					{
						x: name,
						y: users,
						type: 'scatter'
					}
				],
				tagline: 'xyz'
			});
  		});
  		
	});


});

app.post('/pressure', function(req, res){
	console.log(req);
	res.status(200).send();
});




app.get('/hello', function(req, res){
	var tagline = req.body.param;
	res.render('./index', {
		myVar: myVar,
		tagline: tagline
	});
});


app.post('/pressure', function(req, res){
	console.log(req);
	res.status(200).send();
});


// app.get('/temp', function(req, res){
// 	res.send('here');
// 	console.log(req.query.xys);
// });



*/
app.listen(process.env.PORT || 3000, function(){
	console.log('Application Started')
});