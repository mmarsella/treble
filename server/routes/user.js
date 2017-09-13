var express       = require("express");
var router        = express.Router();
var db            = require('../models/');

// Log a User in -->  Should return the uid, and email
router.get('/login', (req,res) => {
	console.log('req.query', req.query);
	console.log('req.params', req.params);
	
  console.log('User stuff ----->', db.users);  
  db.User.find({username:req.query.username, password:req.query.password},  function(err,Users){
    if (err) return console.error(err);
     console.log('response-', Users);
	  return res.send({status:true, data: Users[0]});
  })
})

module.exports = router;