const mongoose = require('mongoose')
//Schemas
const asanaSchema = mongoose.Schema({
  isFav: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  sanskrit: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  effect: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  watchout: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  isFeautured: {
    type: Boolean,
    default: false
  }
})

//models
exports.Asana = mongoose.model('Asana', asanaSchema)