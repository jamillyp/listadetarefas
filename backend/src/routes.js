const express = require('express');
const TarefaController = require('./controllers/TarefaController');

const routes = express.Router();

// rota para criar uma tarefa
routes.post('/criarTarefa', TarefaController.store);

// rota para listar tarefas
routes.get('/listarTarefas', TarefaController.listarTarefas);

// rota para listar uma unica tarefa
routes.get('/listarTarefa/:id', TarefaController.listarTarefa);

// rota para editar tarefas
//routes.put('/editarTarefa/:id');

// rota para deletar tarefa
routes.delete('/deletarTarefa/:id');

module.exports = routes;