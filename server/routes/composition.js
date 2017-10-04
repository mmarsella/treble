var express       = require("express");
var router        = express.Router();
var db            = require('../models/');


router.post('/new', (req,res) => {
  console.log('reg/res', req.params, req.query);

})


// Grab one composition.
// Expect a uid and composition id.
// Should return ONE composition
// TODO: needs to be written
router.get('/', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->', req.query);
  return res.send({status:true, data:'mark'});  //change this
})

//Grab all compositions
// Expect uid
// Should return all compositions
// TODO: needs to be written
router.get('/all', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->', req.query);

  db.Composition.find({user:req.query.user},  function(err, compositions){
    if(err) return console.error('Error--->', err);

    console.log('err--->', err)
    console.log('compositions--->', compositions)
    
   

    if(compositions.length < 1 || !compositions){
    	console.log("ERROR!", err);
    	return res.status(401).send({status:false, data: null, message: 'NO COMPOSITIONS FROM SERVER' });
    }

	  return res.send({status:true, data: compositions, message:'ok'});
  })

})

// Need route -->  Edit Composition

// Need route -->  Add new Composition

// Need route -->  Delete Composition


module.exports = router;