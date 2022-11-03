const porta = 3003

const express = require('express')
const app = express()
const banco_de_dados = require('./banco_de_dados')
const body_parser = require('body-parser')

app.use(body_parser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) =>{
    res.send(banco_de_dados.get_produtos()) // Convertido para JSON
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(banco_de_dados.get_produto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco_de_dados.salvar_produto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = banco_de_dados.salvar_produto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = banco_de_dados.excluir_produto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

