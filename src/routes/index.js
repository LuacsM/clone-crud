const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// ROTAS
router.get('/', IndexController.index)

//REGISTRO
router.get('/cadastro', CustomersController.index)
router.post('/cadastro/add', CustomersController.add)

//LISTAR
router.get('/list', CustomersController.listUsers)

//EDITAR
//router.get('/edit', CustomersController.indexEdit)
//router.post('/edit', CustomersController.edit)

module.exports = router