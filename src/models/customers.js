const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: String,
    nameMother: String,
    cpf: String,
    tel: String,
    tel2: String,
    cep: String,
    address: String,
    numHouse: String,
    city: String,
    district: String,
    complement: String,
    email: String,
    password: String,
})

// MVC: MODEL - VIEW - CONTROLER

const Model = mongoose.model('customers', schema)

module.exports = Model