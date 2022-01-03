const express = require('express')
const path = require("path")

const db = require('./database')
const routes = require('./routes')

const app = express()

//conecção com o banco de dados
db.connect()


//definnindo template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos PÚBLICOS
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extends: true}))

// ROTAS
app.get('/', (req, res) => { // pode resumir como "req" e "res"
    res.render('index', {
        title: 'Getag - Home'
    })
})

// definindo as rotas
app.use('/', routes)


// 404 error (not found)
app.use((req, res)=>{ // middleware
    res.send('Página não encontrada!')
})


// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listening on port ${port}`))

