var express       = require("express");
var router        = express.Router();
var db            = require('../models/');






// Query for all Tabs via the Composition id (pinged from the Composition component - on selection from CompositionList)
router.get('/single', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->', req.query);


  db.Tab.find({cid:req.query.cid}, function(err, composition){
    console.log('composition tabs-------->', composition);
    return res.send({status:true, data: composition, message:'ok'});
  })

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

router.put('/single', (req,res) => {
  console.log('----- EDITING COMPOSITION -----')

  // The upsert = true option creates the object if it doesn't exist. defaults to false.
  db.Composition.findOneAndUpdate({id:req.query.cid, data: req.query.data}, function(err,compositions){
    if(err) return console.error('Error--->', err);

    console.log('err--->', err)
    console.log('EDIT compositions--->', compositions);

  })
})

// Need route -->  Add new Composition

// send back if insert was succesful via status


// Creates a composition
// Then creates 4 Tabs with the new Composition's id
// TODO:  Needs some cleaning up
router.post('/new', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->', req.query);

  db.Composition.create({user:req.query.user, name:req.query.name}, function(err, comp){
    if(err) return console.error('Error inserting new Composition --->', err);

    console.log('comp after insert-->', comp);
    

    db.Tab.insertMany([{cid:comp.id}, {cid:comp.id}, {cid:comp.id}, {cid:comp.id}], function(err, tabs){

      if(err) return console.error('Error inserting many Tabs --->', err);
      console.log('succesfully enter MANY TABS --->', tabs);

      comp.save(function(err){
        if(err){
          console.log("ERROR SAVING COMP",err);
          res.status(500).send(err);
        }
      })

      return res.send({status:true, data: tabs, message:'ok'});
    })


  })
})

// Need route -->  Delete Composition


module.exports = router;