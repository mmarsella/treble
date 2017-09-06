var express       = require("express");
var router        = express.Router();



// Grab a composition
router.get('/', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->', req.query);
  return res.send({status:true, data:'mark'});
})


// Need route -->  Edit Composition



// Need route -->  Add new Composition



// Need route -->  Delete Composition





module.exports = router;