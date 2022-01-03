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




module.exports = router