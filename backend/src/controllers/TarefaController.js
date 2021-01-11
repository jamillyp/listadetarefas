const Tarefa = require('../models/Tarefa');

module.exports = {
    //listar todas as tarefas
    async listarTarefas(request, response){
        const tarefas = await Tarefa.findAll();
        return response.json(tarefas);
    },
    //buscar uma tarefa
    async listarTarefa(request, response){
        var id = request.params.id;
        var tarefa = await Tarefa.findByPk(id);
        if (tarefa == null) {
            console.log('não encontrado');
        } else {
            console.log(tarefa instanceof Tarefa);
            console.log('tarefa encontrada')
            console.log(tarefa)
        }
        return response.json(tarefa);
    },
    //criar tarefa
    async store(request, response){
        const {titulo, descricao, responsavel, prazo} = request.body;

        const tarefa = await Tarefa.create({titulo, descricao, responsavel, prazo});
        return response.json(tarefa); 

    },
    //deletar tarefa (preciso alterar)
    async deletarTarefa(request, response){
        await Tarefa.destroy({
            where: {
                id: request.params.id
            }
        })
        return response.json({message: 'tarefa removida com sucesso'});

    },
    //editar tarefa
    async editarTarefa(request, response){
    }
};
