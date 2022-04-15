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

app.get(`${api}/asanas` , (req, res) => {
  const asana = {
    id: 1,
    name: 'cow pose',
    image: 'some_image'
  }
  res.send(asana)
})

app.post(`${api}/asanas` , (req, res) => {
  const newAsana = req.body
  console.log(newAsana)
  res.send(newAsana)
})

mongoose.connect(`${db}`)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log('Could not connect to DB ' + err))

app.listen(3001, () => {
  console.log(api)
  console.log(`server is running on http://localhost:3001`)
})