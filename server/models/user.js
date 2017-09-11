const mongoose    = require("mongoose");

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
});

var User = mongoose.model('Users', userSchema);

module.exports = User;


// This saves a new User to the mongo client.

// var mark = new User({email:"test@test.com", password:"mark"});

// mark.save(function(err,data){
  
//   if(err) console.log('err--->', err);
//   console.log('data?--', data);

// })