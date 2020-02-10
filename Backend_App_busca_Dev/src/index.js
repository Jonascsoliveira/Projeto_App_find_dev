const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://appdevs:appdevs@clusteraulanode-38zzv.mongodb.net/devs_for_rent?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(cors( {origin:'http://localhost:3000'}))
app.use(express.json())//precisa vir antes das rotas,para ser interpretado
app.use(routes)

app.listen(3333)
