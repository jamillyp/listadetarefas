const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    responsavel: String,
    prazo: String
});

module.exports = mongoose.model('Tarefa', TarefaSchema);