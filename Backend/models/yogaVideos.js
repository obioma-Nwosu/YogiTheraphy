const mongoose = require('mongoose')

//Schemas
const yogaVideoSchema = mongoose.Schema({
  isFav: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  focus: {
    type: String,
    required: true
  },
  asana: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Asana',
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

yogaVideoSchema.virtual('id').get(function () {
  return this._id.toHexString();
})

yogaVideoSchema.set('toJSON', {
  virtuals: true
})

//models
exports.YogaVideo = mongoose.model('YogaVideo', yogaVideoSchema)