const { Router } = require('express');

const { criarTarefa, listarTarefas, listarUmaTarefa, editarTarefa, excluirTarefa } = require('./controllers');

const routes = Router();

// rota para criar uma tarefa
routes.post('/tarefas', criarTarefa);

// rota para listar tarefas
routes.get('/tarefas', listarTarefas);

// rota para listar uma única tarefa por seu id
routes.get('/tarefas/:id', listarUmaTarefa);

// rota para editar uma tarefa por seu id
routes.put('/tarefas/:id', editarTarefa);

// rota para deletar uma tarefa por seu id
routes.delete('/tarefas/:id', excluirTarefa);

module.exports = routes;