const express = require('express')
const { Asana } = require('../models/asanas')
const router = express.Router()
const { YogaVideo }= require('../models/yogaVideos')
const mongoose = require('mongoose')

//******************************GET METHODS*************************************** */

/* router.get(`/`, async (req, res) => {
  const yogaList = await YogaVideo.find()
  //const yogaList = await YogaVideo.find().select("name level -_id")
  if(!yogaList){
    return res.status(500).json({success: false})
  }
  return res.send(yogaList)
})

 */

router.get(`/` , async (req, res) => {

  let filtered = {}
  let filteredResult = await YogaVideo.find()
  if(req.query.focus) {
    filtered = {focus: req.query.focus.split(',')}
    filteredResult = await YogaVideo.find(filtered).populate('focus')
  }else if(req.query.level){
    filtered = {level: req.query.level.split(',')}
    filteredResult = await YogaVideo.find(filtered).populate('level')
  }

  if(!filteredResult){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(filteredResult)
})

router.get(`/:id`, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)){
    return res.status(400).send('Invalid Video Id')
  }
  //const yoga = await YogaVideo.findById(req.params.id)

  //This will return the details ofthe linked FK
  const yoga = await YogaVideo.findById(req.params.id).populate('asana')
  if(!yoga){
    return res.status(500).json({success: false})
  }
  return res.send(yoga)
})

router.get(`/get/Videofavourites` , async (req, res) => {
  const videoFavourites = await YogaVideo.find({isFav: true})

  if(!videoFavourites){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(videoFavourites)
})

router.get(`/get/featured` , async (req, res) => {
  const videoFeatured = await YogaVideo.find({isFeautured: true})

  if(!videoFeatured){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(videoFeatured)
})

//******************************POST METHODS*************************************** */

router.post(`/` , async (req, res) => {

  const asana = await Asana.findById(req.body.asana)
  if (!asana) return res.status(400).send('Invalid Asana')

  let yoga = new YogaVideo({
    isFav: req.body.isFav,
    name: req.body.name,
    level: req.body.level,
    focus: req.body.focus,
    asana: req.body.asana,
    rating: req.body.rating,
    dateCreated: req.body.dateCreated,
    isFeautured: req.body.isFeautured
  })

  yoga = await yoga.save()

  if(!yoga)
    return res.status(500).send('Yoga Video cannot be created')
  
  return res.send(yoga)
})

//******************************PUT METHODS*************************************** */

router.put('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)){
    return res.status(400).send('Invalid Video Id')
  }
  const asana = await Asana.findById(req.body.asana)
  if (!asana) return res.status(400).send('Invalid Asana')

  const yogaVideo = await YogaVideo.findByIdAndUpdate(
    req.params.id,
    {
      isFav: req.body.isFav,
      name: req.body.name,
      level: req.body.level,
      focus: req.body.focus,
      asana: req.body.asana,
      rating: req.body.rating,
      dateCreated: req.body.dateCreated
    },
    {new: true}
  )

  if(!yogaVideo)
    return res.status(500).send('Video cannot be updated')
  
  return res.send(yogaVideo)

})

//******************************DELETE METHODS*************************************** */
router.delete(`/:id`, (req, res) => {
  YogaVideo.findByIdAndRemove(req.params.id).then(video => {

    if(video){
      return res.status(200).json({
        success: true,
        message: `video with id ${req.params.id} has been deleted`
      })}else{
        return res.status(404).json({
            success: false,
            message: `The video with id ${req.params.id} could not ne found`
          })
      }
  }).catch(err => {
    return res.status(400).json({sucess: false, error: err})
  })
  
})

module.exports = router