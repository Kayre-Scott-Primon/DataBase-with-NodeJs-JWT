const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')



const User = mongoose.model('User');

module.exports = {
     async index(req, res) {
          const user = await User.find()

          return res.json(user)
     },

     async store(req, res){
          const user = await User.create(req.body)
          return res.json(user)
     },

     async show(req, res){
          const user = await User.findById(req.params.id)
          return res.json(user)
     },
     
     async update(req, res) {
          const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
          return res.json(user)
     },

     async destroy (req ,res){
          await User.findByIdAndRemove(req.params.id)
          return res.send()
     },

     async auth(req, res){
          const { email, password } = req.body
     
          const user = await User.findOne({ email , password })
     
          if(!user){ return res.status(400).send({error: 'User not found'})}

          const token = jwt.sign({ id: user.id }, authConfig.secret , {
               expiresIn: 345600
          })
     
          res.send({user, token})
     }
}