var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var CommentsSchema = new Schema({
  // tab: Object
});

//export module to server.js
module.exports = mongoose.model('Comment', CommentsSchema);