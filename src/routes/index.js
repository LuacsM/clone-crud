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

//PESQUISAR
//router.get('/pesquisa', CustomersController.pesquisa)
	
/* GET home page. */
router.get('/pesquisa', function(req, res, next) {
  res.render('pesquisa', { results: false, title: "Pesquisa" });
});

//router.get('/sesult', CustomersController.resultado)

router.get('/result', CustomersController.resultado);


//EDITAR
router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id', CustomersController.edit)

router.get('/search', CustomersController.listUsers)


module.exports = router