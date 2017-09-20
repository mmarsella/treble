var mongoose = require('mongoose');
var User = require("./user");

var compSchema = new mongoose.Schema({
      data: { type: String},
      name: { type: String},
       uid: { type: String},
       user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  //may want to look into referencing the User Schema
});

var Composition = mongoose.model('Composition', compSchema);

module.exports = Composition;