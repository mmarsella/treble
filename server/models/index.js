require('dotenv').config();
const mongoose    = require("mongoose");
var mongoURI      = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useMongoClient: true });
mongoose.set("debug",true);
var db            = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports.User = require("./user");
module.exports.Composition = require("./composition");