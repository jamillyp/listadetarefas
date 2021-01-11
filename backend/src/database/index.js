const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Tarefa = require('../models/Tarefa');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(function(){
    console.log("banco conectado com sucesso! ")
}).catch(function(err){
    console.log("falha ao se conectar com banco: "+ err)
});

Tarefa.init(connection);

module.exports = connection;