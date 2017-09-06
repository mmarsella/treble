require('dotenv').config();
var express       = require("express");
var mongoose      = require("mongoose");
var bodyParser    = require("body-parser");
var MongoClient   = require('mongodb').MongoClient;
var app           = express();
var port          = process.env.API_PORT || 3001;
var mongoURI      = process.env.MONGO_URI;
var db            = mongoose.connection;
var api           = require('./routes/api.js'); // obj of api funcs

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

app.use('/composition', api.composition);

console.log('process --------->', process.env)
mongoose.connect(mongoURI, { useMongoClient: true });

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});