const express = require('express')
const { Asana } = require('../models/asanas')
const router = express.Router()
const { YogaVideo }= require('../models/yogaVideos')

router.get(`/`, async (req, res) => {
  const yogaList = await YogaVideo.find()
  if(!yogaList){
    res.status(500).json({success: false})
  }
  res.send(yogaList)
})

router.post(`/` , async (req, res) => {

  const asana = await Asana.findById(req.body.asana)
  if (!asana) return res.status(400).send('Invalid Asana')
  const yoga = new YogaVideo({
    isfav: req.body.isFav,
    name: req.body.name,
    level: req.body.level,
    focus: req.body.focus,
    asana: req.body.asana,
    rating: req.body.rating,
    dateCreated: req.body.dateCreated
  })

  yoga = await yoga.save()

  if(!yoga)
    return res.status(500).send('Yoga Video cannot be created')
  
    return res.send(yoga)
})


module.exports = router