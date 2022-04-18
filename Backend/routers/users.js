const express = require('express')
const router = express.Router()
const { User } = require('../models/users')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//******************************GET METHODS*************************************** */
router.get(`/`, async (req, res) => {
  const userList = await User.find().select('-passwordHash')
  if(!userList){
    return res.status(500).json({success: false})
  }
  return res.status(200).send(userList)
})

router.get(`/:id`, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)){
    return res.status(400).send('Invalid user Id')
  }

  const user = await User.findById(req.params.id).select('-passwordHash')
  if(!user){
    return res.status(500).json({success: false, message: `User with id ${req.params.id} cannot be found`})
  }
  return res.status(200).send(user)
})

router.get(`/get/count` , async (req, res) => {
  const userCount = await User.countDocuments()

  if(!userCount){
    return res.status(500).json({success: false})
  }
  return res.status(200).send({total: userCount})
})

//******************************POST METHODS*************************************** */
router.post(`/` , async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    dob: req.body.dob,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin
  })

  user = await user.save()

  if(!user)
    return res.status(404).send('User cannot be created')
  
  return res.send(user)
})


router.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email})
  const secret = process.env.secret

  if(!user){
    return res.status(400).send('This user was not found')
  }

  if(user && bcrypt.compareSync(req.body.password, user.passwordHash)){
    const token = jwt.sign(
      {
        userId : user.id,
        isAdmin: user.isAdmin
      },
      secret,
      {expiresIn: '1d'}
    )
    return res.status(200).send({user: user.email, token: token})
  }else{
    return res.status(400).send('Email or Password is wrong!')
  }

})

router.post(`/register` , async (req, res) => {
  const duplicate = await User.findOne({email: req.body.email})

  if(duplicate){
    return res.status(400).send('Email adress already exists')
  }
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    dob: req.body.dob,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin
  })

  user = await user.save()

  if(!user)
    return res.status(404).send('User cannot be created')
  
  return res.send(user)
})


//******************************PUT METHODS*************************************** */
router.put('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)){
    return res.status(400).send('Invalid user Id')
  }
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


//******************************DELETE METHODS*************************************** */

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