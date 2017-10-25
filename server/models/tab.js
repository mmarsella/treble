var mongoose = require('mongoose');
var Composition = require("./composition");


// TODO:  add a method on this model to add default data in a cleaner way
var tabSchema = new mongoose.Schema({
      data: { type: Object, 
      		  default: {"1":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"2":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"3":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"4":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"5":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}],"6":[{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false},{"val":"","isInput":false}]}
      		},  // the composition
      name: { type: String},
      date: { type: Date, default: Date.now },
      cid: { type: mongoose.Schema.Types.ObjectId, ref: 'Composition' }  
});

var Tab = mongoose.model('Tab', tabSchema);

module.exports = Tab;