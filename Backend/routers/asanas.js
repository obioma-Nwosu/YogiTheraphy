const express = require('express')
const router = express.Router()
const { Asana } = require('../models/asanas')
const mongoose = require('mongoose')

router.get(`/` , async (req, res) => {
  const asanaList = await Asana.find()
  if(!asanaList){
    return res.status(500).json({success: false})
  }
  return res.send(asanaList)
})

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