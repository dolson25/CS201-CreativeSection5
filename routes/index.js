var express = require('express');
var router = express.Router();

/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/surveyDB'); //Connects to a mongo database called "commentDB"

var first = true;

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});


if(first){
	db.collection('flavors').remove();
	db.collection('sports').remove();
	db.collection('siblings').remove();
	db.collection('skills').remove();
}

var flavorSchema = mongoose.Schema({ //Defines the Schema for this database
Flavor: String,
VoteCount: Number
});

var sportSchema = mongoose.Schema({
	Sport: String,
	VoteCount: Number
});

var siblingSchema = mongoose.Schema({
	SiblingTotal: Number,
	VoteCount: Number
});

var skillSchema = mongoose.Schema({
	SkillTotal: Number,
	VoteCount: Number
});

var Flavor = mongoose.model('Flavor', flavorSchema); //Makes an object from that schema as a model
var Sport = mongoose.model('Sport', sportSchema);
var Sibling = mongoose.model('Sibling', siblingSchema);
var Skill = mongoose.model('Skill', skillSchema);

if(first){
	var flavors = ["chocolate", "vanilla", "rockyRoad", "strawberry", "other", "total"]
	
	for(f of flavors){
		var newFlavor = new Flavor({Flavor:f,VoteCount:0});
		console.log(newFlavor);
		newFlavor.save(function(err, post) {
  			if(err) return console.error(err);
  			console.log(post);
		});
	}

	var sports = ["basketball", "volleyball", "soccer", "football", "other", "total"]
	
	for(s of sports){
		var newSport = new Sport({Sport:s,VoteCount:0});
		console.log(newSport);
		newSport.save(function(err, post) {
  			if(err) return console.error(err);
  			console.log(post);
		});
	}

	//siblings and skill are a bit different
	var newSibling = new Sibling({SiblingCount:0,VoteCount:0});
	newSibling.save(function(err, post) {
		if(err) return console.error(err);
		console.log(post);
	});	
	
	var newSkill = new Skill({SkillCount:0,VoteCount:0});
	newSkill.save(function(err, post) {
		if(err) return console.error(err);
		console.log(post);
	});	

}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/flavors', function(req, res, next) {
	console.log("POST flavor route"); //[1]
	console.log(req.body);

	Flavor.findOneAndUpdate({Flavor:req.body["flavor"]}, {$inc:{VoteCount:1}},function(err, result){
	  if(err) return console.log(err);
	});

	Flavor.findOneAndUpdate({Flavor:"total"}, {$inc:{VoteCount:1}},function(err, result){
	  if(err) return console.log(err)
	});

	Flavor.find(function(err, flavorList){
	  if(err) return console.log(err);
	  console.log(flavorList);
	});

  	res.sendStatus(200);
});

router.post('/sports', function(req, res, next) {
	console.log("POST sports route");
	console.log(req.body);


	Sport.findOneAndUpdate({Sport:req.body["sport"]}, {$inc:{VoteCount:1}},function(err, result){
	  if(err) return console.log(err);
	});

	Sport.findOneAndUpdate({Sport:"total"}, {$inc:{VoteCount:1}},function(err, result){
	  if(err) return console.log(err)
	});


	Sport.find(function(err, sportList){
	  if(err) return console.log(err);
	  console.log(sportList);
	});

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


/* GET results from database */
router.get('/flavors', function(req, res, next) {
    console.log("In the GET route?");
    Flavor.find(function(err,flavorList) { //Calls the find() method on your database
       if (err) 
           return console.error(err); //If there's an error, print it out
       else {
           console.log(flavorList); //Otherwise console log the comments you found
    
           res.json(flavorList); 
       }
    })
});


module.exports = router;
