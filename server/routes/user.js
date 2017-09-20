var express       = require("express");
var router        = express.Router();
var db            = require('../models/');

// Log a User in -->  Should return the uid, and email
router.get('/login', (req,res) => {
	console.log('req.query', req.query);
	console.log('req.params', req.params);
	
  console.log('User stuff ----->', db.users);  
  db.User.findOne({username:req.query.username, password:req.query.password},  function(err,user){
    if(err) return console.error('Error--->', err);

    console.log('err--->', err)
    console.log('user--->', user)
    
    if(!user){
    	console.log("ERROR!", err);
    	return res.status(401).send({status:false, data: null, message: 'Invalid email and/or password' });
    }

	  return res.send({status:true, data: user, message:'ok'});
  })
})

module.exports = router;