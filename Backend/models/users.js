const mongoose = require('mongoose')
//Schemas
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

userSchema.virtual('id').get(function () {
  return this._id.toHexString();
})

userSchema.set('toJSON', {
  virtuals: true
})
//models
exports.User = mongoose.model('User', userSchema)