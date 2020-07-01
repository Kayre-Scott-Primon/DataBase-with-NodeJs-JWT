const mongoose = require('mongoose')

/*const authMiddleware = require('./middlewares/auth')
const express = require('express')
const router = express.Router()
router.use(authMiddleware)*/

const User = mongoose.model('User');

module.exports = {
     async funcao1( req, res){
          res.send({ ok: true , user: req.userId})
     }
}
