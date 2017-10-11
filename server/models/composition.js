var mongoose = require('mongoose');
var User = require("./user");
var Tab = require("./tab");


// A composition will have many tabs.  
var compSchema = new mongoose.Schema({
      name: { type: String},
      date: { type: Date, default: Date.now },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}  //may want to look into referencing the User Schema
});

var Composition = mongoose.model('Composition', compSchema);

module.exports = Composition;