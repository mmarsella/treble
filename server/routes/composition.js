var express       = require("express");
var router        = express.Router();

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
  return res.send({status:true, data:'mark'}); //change this
})

// Need route -->  Edit Composition

// Need route -->  Add new Composition

// Need route -->  Delete Composition


module.exports = router;