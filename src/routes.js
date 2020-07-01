const express = require('express')
const routes = express.Router()
const UserController = require('./contollers/UserController')
const projectController = require('./contollers/projectController')

const authMiddleware = require('./middlewares/auth')


//acessar a rota especificada
routes.get('/user', UserController.index)
routes.post('/user', UserController.store)
routes.get('/user/:id', UserController.show)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.destroy)
routes.post('/user/authenticate', UserController.auth)
routes.use(authMiddleware)
routes.get('/projects', projectController.funcao1)

module.exports = routes