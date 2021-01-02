const { Router } = require('express');
const mongoose = require('mongoose');

const routes = Router();

require('./models/Tarefa');
const TarefaModel = mongoose.model('Tarefa')

//listando tarefa
routes.get('/tarefas', function(request, response) {
    TarefaModel.find()
        .then((tarefas) => {
            response.json(tarefas)
        })
        .catch((err) => {
            console.log(err)
        })
});

//criando tarefa
routes.post('/tarefas', function(request, response) {
    TarefaModel.create(request.body)
        .then((data) => {
            console.log('sucesso! ')
            console.log(data)
            response.json(data)  
        })
        .catch((erro) => {
            console.log(erro)
        })
});

module.exports = routes;