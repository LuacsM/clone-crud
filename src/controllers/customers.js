const res = require('express/lib/response')
const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index (req, res) {
    res.render('register', {
        title: 'Cadastro de Alunos'
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
    res.render('register', {
        title: 'Cadastro de Alunos',
        message: 'Cadastro Realizado com Sucesso!',

    })
}

async function listUsers(req, res){
    const users = await CustomersModel.find()


    res.render('listUsers', {
        title: 'Listagem de Usuários',
        users,
    })
}

async function indexEdit(req, res){
    const {id} = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit',{
        title: 'Editar Usuário',
        user,
    })
}

async function pesquisa(req, res, next){

    res.render('pesquisa',{
        results: false,
        title: "Pesquisa"
    })
}

async function resultado(req, res, next){
        const users = await CustomersModel.find()
        const nome = req.query
        const aluno = nome.query

        const dados = await CustomersModel.find({
            name: aluno,
        })

        //console.log(dados)

        res.render('result', { title: 'Resultado', aluno, users, dados});
   
}


async function edit(req, res){
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

    const {id} = req.params

    const user = await CustomersModel.findById(id)
    user.name = name
    user.age = age
    user.nameMother = nameMother
    user.cpf = cpf
    user.tel = tel
    user.tel2 = tel2
    user.cep = cep
    user.address = address
    user.numHouse = numHouse
    user.city = city
    user.district = district
    user.complement = complement
    user.email = email
    user.password = password

    user.save()
    res.render('edit',{
        title: 'Editar Usuário',
        user,
        message: 'Usuário alterado com sucesso!'
    })

}


module.exports = {
    index, add, listUsers, indexEdit, edit, pesquisa, resultado,
}