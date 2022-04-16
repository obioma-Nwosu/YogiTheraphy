const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

//cors configuration
app.use(cors())
app.options('*', cors())

//env variables
const api = process.env.API_URL
const db = process.env.DB_URL

//routers
const asanasRouter = require('./routers/asanas')
const usersRouter = require('./routers/users')
const yogaRouter = require('./routers/yogaVideos')

//middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.use(`${api}/asanas`, asanasRouter)
app.use(`${api}/users`, usersRouter)
app.use(`${api}/yogaVideos`, yogaRouter)


mongoose.connect(`${db}`)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log('Could not connect to DB ' + err))

app.listen(3001, () => {
  console.log(api)
  console.log(`server is running on http://localhost:3001`)
})