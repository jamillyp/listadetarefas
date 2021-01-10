const Sequelize = require('sequelize');

//config sequelize
const sequelize = new Sequelize('listaTarefa', 'root', 'SenhaDIFICIL12', {
    host: "localhost",
    dialect: "mysql"
}) ;

sequelize.authenticate().then(function(){
    console.log("banco conectado com sucesso")
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}