var express       = require("express");
var router        = express.Router();
var db            = require('../models/');

// Query for all Tabs via the Composition id (pinged from the Composition component - on selection from CompositionList)
router.get('/single', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->', req.query);


  db.Composition.findOne({_id:req.query.cid}, function(err,comp){
    if(err){
      console.error('Error FINDING Composition --->', err);
      return res.send({status:false, data: err, message:'bad'});
    } 
    db.Tab.find({cid:req.query.cid}, function(err, tabs){
      if(err){
        console.error('Error FINDING TABS for a Composition --->', err);
        return res.send({status:false, data: err, message:'bad'});
      } 

      console.log('composition tabs-------->', tabs);
      return res.send({status:true, data: {composition: comp, tabs: tabs}, message:'ok'});
    })
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


// Creates a composition
// Then creates 4 Tabs with the new Composition's id
// Returns a composition
router.post('/new', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->',  req.query);
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

      return res.send({status:true, data: comp, message:'ok'});
    })
  })
})


// EDIT TAB
router.put('/updateTab', (req,res) => {
  console.log("-------- UPDATING TAB ----------")
  console.log('req.params---->', req.params);
  console.log('req.query---->',  req.query);
  console.log('req.body---->', req.body);

  // console.log('tab:', req.query.tabs)
  db.Tab.findOneAndUpdate({_id:req.query.id}, {data: req.body}, function(err,tab){

    console.log('err', err)
    console.log('tab', tab)
    if(err){
      console.error('Error UPDATING Composition --->', err);
      return res.send({status:false, data: err, message:'bad'});
    } 
    console.log('tab success ---->', tab)
    return res.send({status:true, data: tab, message:'ok'});
  })

  // return res.send({status:true, data: 'data', message:'ok'});

})

// EDIT COMPOSITION
router.put('/updateComposition', (req,res) => {
  console.log("-------- UPDATING COMPOSITION ----------")
  console.log('req.params---->', req.params);
  console.log('req.query---->',  req.query);
  console.log('req.body---->', req.body);

  // console.log('tab:', req.query.tabs)
  // db.Composition.findOneAndUpdate({_id:req.query.cid, data: req.query.data}, function(err,comp){
  //   if(err){
  //     console.error('Error UPDATING Composition --->', err);
  //     return res.send({status:false, data: err, message:'bad'});
  //   } 
  //   return res.send({status:true, data: comp, message:'ok'});
  // })

  return res.send({status:true, data: 'data', message:'ok'});

})

// DELETE COMPOSITION
router.post('/delete', (req,res) => {
  console.log('req.params---->', req.params);
  console.log('req.query---->', req.query);
  
  console.log('DELETE IN SERVER');
  db.Composition.findByIdAndRemove({_id:req.query.cid}, function(err, comp){
    if(err){
      console.error('Error DELETING Composition --->', err);
      return res.send({status:false, data: err, message:'bad'});
    } 
     
    console.log('comp after DELETE-->', comp);
    return res.send({status:true, data: comp, message:'ok'});
  })

})


module.exports = router;