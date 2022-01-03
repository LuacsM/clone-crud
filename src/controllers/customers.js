const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index (req, res) {
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
}

async function add(req, res){
    const {
        name, 
        age,
        nameMother,
        cpf,
        tel,
        tel2,
        cep,
        address,
        numHouse,
        city,
        district,
        complement,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        nameMother,
        cpf,
        tel,
        tel2,
        cep,
        address,
        numHouse,
        city,
        district,
        complement,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.send('Cadastro realizado!')
}


function listUsers(req, res){
    res.render('listUsers', {
        title: 'Listagem de Usuários',
        users: []
    })
}


module.exports = {
    index, add, listUsers,
}