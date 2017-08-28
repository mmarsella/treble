require('dotenv').config();
var express       = require("express");
var mongoose      = require("mongoose");
var bodyParser    = require("body-parser");
var MongoClient   = require('mongodb').MongoClient;
var app           = express();
var router        = express.Router();
var port          = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
 	res.setHeader('Access-Control-Allow-Credentials', 'true');
 	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 	res.setHeader('Cache-Control', 'no-cache');
 	next();
});

app.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});

app.use('/api', router);


console.log('PROCESS.ENV-------->', process.env)
var mongoURI = process.env.MONGO_URI;
// console.log(mongoURI)
mongoose.connect(mongoURI, { useMongoClient: true });
var db = mongoose.connection;
// console.log(db)
// db.openUri(mongoDB, { useMongoClient: true });
// MongoClient.connect(mongoURI, function(err, db){
// 	if(err){
// 	    console.log(err);
// 	}else{
// 	    console.log("Connected to db");
// 	    db.collection('testt').insert({"doc1":"hello"},function(err,data){
// 	        if(err){
// 	        	throw(err);
// 	    	}else{
// 	     		console.log("sucessfuly inserted");
// 	    	}
// 	    });
// 	}
// });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});