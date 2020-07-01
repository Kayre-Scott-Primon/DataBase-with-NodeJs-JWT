const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require("cors")
require("dotenv-safe").config();


// inciando o App
const app = express();
app.use(express.json())
app.use(cors())

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

//require('./src/models/User')
requireDir('./src/models')

//Routes
app.use('/api', require("./src/routes"))

// a aplicação ouvir a porta 3001 na rede
app.listen(3001)