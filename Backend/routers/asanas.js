const express = require('express')
const router = express.Router()
const { Asana } = require('../models/asanas')
const mongoose = require('mongoose')


//******************************GET METHODS*************************************** */
router.get(`/` , async (req, res) => {

  let filtered = {}
  let filteredResult = await Asana.find()
  if(req.query.type) {
    filtered = {type: req.query.type.split(',')}
    filteredResult = await Asana.find(filtered).populate('type')
  }else if(req.query.level){
    filtered = {level: req.query.level.split(',')}
    filteredResult = await Asana.find(filtered).populate('level')
  }

  if(!filteredResult){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(filteredResult)
})

/* router.get(`/` , async (req, res) => {
  const asanaList = await Asana.find()
  if(!asanaList){
    return res.status(500).json({success: false})
  }
  return res.send(asanaList)
}) */

router.get(`/:id` , async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)){
    return res.status(400).send('Invalid asana Id')
  }
  const asana = await Asana.findById(req.params.id)
  if(!asana){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(asana)
})

router.get(`/get/count` , async (req, res) => {
  const asanaCount = await Asana.countDocuments()

  if(!asanaCount){
    return res.status(500).json({success: false})
  }
  return res.status(200).send({total: asanaCount})
})

router.get(`/get/featured` , async (req, res) => {
  const asanaFeatured = await Asana.find({isFeautured: true})

  if(!asanaFeatured){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(asanaFeatured)
})

router.get(`/get/favourites` , async (req, res) => {
  const asanaFavourites = await Asana.find({isFav: true})

  if(!asanaFavourites){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(asanaFavourites)
})


//******************************POST METHODS*************************************** */

router.post(`/` , async (req, res) => {
  let asana = new Asana({
    isFav: req.body.isFav,
    name: req.body.name,
    sanskrit: req.body.sanskrit,
    level: req.body.level,
    type: req.body.type,
    images: req.body.images,
    effect: req.body.effect,
    description: req.body.description,
    watchout: req.body.watchout,
    rating: req.body.rating,
    dateCreated: req.body.dateCreated,
    isFeautured: req.body.isFeautured,
  })

  asana = await asana.save()
  
  if(!asana)
    return res.status(500).send('Asana cannot be created')
  
  return res.send(asana)
})


//******************************PUT METHODS*************************************** */
router.put('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)){
    return res.status(400).send('Invalid user Id')
  }
  const asana = await Asana.findByIdAndUpdate(
    req.params.id,
    {
      isFav: req.body.isFav,
      name: req.body.name,
      sanskrit: req.body.sanskrit,
      level: req.body.level,
      type: req.body.type,
      images: req.body.images,
      effect: req.body.effect,
      description: req.body.description,
      watchout: req.body.watchout,
      rating: req.body.rating,
      dateCreated: req.body.dateCreated,
      isFeautured: req.body.isFeautured,
    },
    {new: true}
  )

  if(!asana)
    return res.status(404).send('Asana cannot be updated')
  
  return res.send(asana)

})


//******************************DELETE METHODS*************************************** */

router.delete(`/:id`, (req, res) => {
  Asana.findByIdAndRemove(req.params.id).then(asana => {

    if(asana){
      return res.status(200).json({
        success: true,
        message: `Asana with id ${req.params.id} has been deleted`
      })}else{
        return res.status(404).json({
            success: false,
            message: `The asana with id ${req.params.id} could not ne found`
          })
      }
  }).catch(err => {
    return res.status(400).json({sucess: false, error: err})
  })
  
})



module.exports = router