const { Router } = require('express');
const mongoose = require('mongoose');

const routes = Router();

require('./models/Tarefa');
const TarefaModel = mongoose.model('Tarefa')

routes.post('/tarefas', function(request, response) {
    //console.log(request.body);

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