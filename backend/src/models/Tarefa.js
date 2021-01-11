const { Model, DataTypes } = require('sequelize');

class Tarefa extends Model{
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING,
            descricao: DataTypes.TEXT,
            responsavel: DataTypes.STRING,
            prazo: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Tarefa;