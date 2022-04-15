const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

require('dotenv/config')

const api = process.env.API_URL
const db = process.env.DB_URL


//Schemas
const asanaSchema = mongoose.Schema({
  isFav: Boolean,
  name: String,
  sanskrit: String,
  level: Array,
  type: Array,
  image: String,
  effect: String,
  description: String,
  watchout: String
})

//models
const Asana = mongoose.model('Asana', asanaSchema)

app.get(`${api}/asanas` , async (req, res) => {
  const asanaList = await Asana.find()
  if(!asanaList){
    res.status(500).json({success: false})
  }
  res.send(asanaList)
})

app.post(`${api}/asanas` , (req, res) => {
  const asana = new Asana({
    isFav: req.body.isFav,
    name: req.body.name,
    sanskrit: req.body.sanskrit,
    level: req.body.level,
    type: req.body.type,
    image: req.body.image,
    effect: req.body.effect,
    description: req.body.description,
    watchout: req.body.watchout,
  })

  asana.save().then((createdAsana => {
    res.status(201).json(createdAsana)
  })).catch((err) => {
    res.status(500).json({
      error: err,
      success: false
    })
  })
})

mongoose.connect(`${db}`)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log('Could not connect to DB ' + err))

app.listen(3001, () => {
  console.log(api)
  console.log(`server is running on http://localhost:3001`)
})