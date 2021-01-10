const dataBase = require('../../database');

const Tarefa = dataBase.sequelize.define('tarefas', {
        titulo:{
            type: dataBase.Sequelize.STRING
        },
        descricao:{
            type: dataBase.Sequelize.TEXT
        },
        responsavel:{
            type: dataBase.Sequelize.STRING
        },
        prazo:{
            type: dataBase.Sequelize.STRING
        }
});

//Tarefa.sync({force: true});

module.exports = Tarefa;