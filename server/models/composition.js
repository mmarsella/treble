var mongoose = require('mongoose');
var User = require("./user");

var compSchema = new mongoose.Schema({
      data: { type: String, 
      		  default: '{"1":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"2":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"3":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"k","isInput":false}],"4":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"5":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"6":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}]}'
      		},  // the composition
      name: { type: String},
      date: { type: Date, default: Date.now },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  //may want to look into referencing the User Schema
});

var Composition = mongoose.model('Composition', compSchema);

module.exports = Composition;