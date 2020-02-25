const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const cors = require('cors')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('',{ //utilizar string de conexão do mongoDB com usuário e senha
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(cors())//{origin:'http://localhost:3000'}
app.use(express.json())//precisa vir antes das rotas,para ser interpretado
app.use(routes)

server.listen(3333)
