var mongoose = require('mongoose');

var compSchema = new mongoose.Schema({
      data: { type: String},
       uid: { type: String, unique: true}
});

var Composition = mongoose.model('Composition', compSchema);

module.exports = Composition;