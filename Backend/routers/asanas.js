const express = require('express')
const router = express.Router()
const { Asana } = require('../models/asanas')

router.get(`/` , async (req, res) => {
  const asanaList = await Asana.find()
  if(!asanaList){
    return res.status(500).json({success: false})
  }
  return res.send(asanaList)
})

router.post(`/` , async (req, res) => {
  const asana = new Asana({
    isFav: req.body.isFav,
    name: req.body.name,
    sanskrit: req.body.sanskrit,
    level: req.body.level,
    type: req.body.type,
    image: req.body.image,
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

module.exports = router