const express = require('express')
const router = express.Router()
const { User } = require('../models/users')

router.get(`/`, async (req, res) => {
  const userList = await User.find()
  if(!userList){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(userList)
})

router.get(`/:id`, async (req, res) => {
  const user = await User.findById(req.params.id)
  if(!user){
    return res.status(500).json({success: false, message: `User with id ${req.params.id} cannot be found`})
  }
  return res.status(200).send(user)
})

router.post(`/` , async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: req.body.passwordHash,
    dob: req.body.dob,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin
  })

  user = await user.save()

  if(!user)
    return res.status(404).send('User cannot be created')
  
  return res.send(user)
})

router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      passwordHash: req.body.passwordHash,
      dob: req.body.dob,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin
    },
    {new: true}
  )

  if(!user)
    return res.status(404).send('User cannot be created')
  
  return res.send(user)

})

router.delete(`/:id`, (req, res) => {
  User.findByIdAndRemove(req.params.id).then(user => {

    if(user){
      return res.status(200).json({
        success: true,
        message: `User with id ${req.params.id} has been deleted`
      })}else{
        return res.status(404).json({
            success: false,
            message: `The user with id ${req.params.id} could not ne found`
          })
      }
  }).catch(err => {
    return res.status(400).json({sucess: false, error: err})
  })
  
})

module.exports = router