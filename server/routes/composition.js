var express       = require("express");
var router        = express.Router();



// Grab a composition
router.get('/', (req,res) => {
  console.log('GOT COMP!');
  res.send('GOT COMP!');
})


// Need route -->  Edit Composition



// Need route -->  Add new Composition



// Need route -->  Delete Composition





module.exports = router;