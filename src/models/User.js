// campos e tipos de valores
//https://www.youtube.com/watch?v=KKTX1l3sZGk
//https://skylab.rocketseat.com.br/node/curso-node-js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     email: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true
     },
     creatAt: {
          type: Date,
          default: Date.now
     },
     token: {
          type: String,
     }
})

mongoose.model('User',UserSchema)