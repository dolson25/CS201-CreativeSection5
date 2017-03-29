var express = require('express');
var router = express.Router();

/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/commentDB22'); //Connects to a mongo database called "commentDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String,
Comment: String
});

var Comment = mongoose.model('Comment', commentSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/flavors', function(req, res, next) {
	console.log("POST flavor route"); //[1]
	console.log(req.body);

	//new flavar
	var newcomment = new Comment(req.body); //[3]
	//console.log(newcomment); //[3]
	
	//save flavor
	newcomment.save(function(err, post) { //[4]
 		 if (err) return console.error(err);
  		console.log(post);
  	res.sendStatus(200);
	});
});

router.post('/sports', function(req, res, next) {
	console.log("POST sports route");
	console.log(req.body);

	//new sport
	//put in db

	res.sendStatus(200);
});

router.post('/siblings', function(req, res, next) {
	console.log("POST siblings route");
	console.log(req.body);

	//new sibling or just add
	//put in db
	
	res.sendStatus(200);
});

router.post('/skills', function(req, res, next) {
	console.log("POST skills route");
	console.log(req.body);

	//db stuff

	res.sendStatus(200)
});

router.post('/comments', function(req, res, next) {
	console.log("POST comments route");
	console.log(req.body);

	//db stuff

	res.sendStatus(200);
});

/* GET comments from database */
router.get('/comment', function(req, res, next) {
console.log("In the GET route?");
Comment.find(function(err,commentList) { //Calls the find() method on your database
  if (err) return console.error(err); //If there's an error, print it out
  else {
    console.log(commentList); //Otherwise console log the comments you found
    
   res.json(commentList); 
  }
})
});

router.get('/delete', function(req, res, next) {
console.log("In Delete");

//delete commenets
collection = db.collection('comments');
collection.remove();

res.json('{deleted:yup}');
});

module.exports = router;
