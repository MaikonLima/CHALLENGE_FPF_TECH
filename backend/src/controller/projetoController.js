const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const project = await connection('project').select('*');
        return response.json(project);
    },

    async getProjectById(request, response, next) {
        const id_project = request.params.id_project;

        const project = await connection('project').where('id_project', id_project).select('*');
        
        return response.json(project);
    },

    async create(request, response) {
        const {
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            name_participant,
        } = request.body;

        console.log(request.body)

        await connection('project').insert({
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            name_participant,
        });
    },


    async update(request, response) {

        const {
            id_project,
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            name_participant,
        } = request.body;

        try {
            await connection('project')
                .where('id_project', id_project)
                .update({
                    name_project,
                    date_initial,
                    date_final,
                    value,
                    risk,
                    name_participant,
                });
        } catch (err) {
            alert('Erro ao atualizar dados da empresa: {}')
        }
        
        return response.status(204).send();
    },

    async delete(request, response, next) {
        
        const id_project = request.params.id_project;

        const project = await connection('project').where('id_project', id_project).count('id_project');

        if(project[0].count == 0){
            return response.status(401).json({error: "Operação não autorizada!"});
        }

        await connection('project').where('id_project', id_project).delete();

        return response.status(200).send();
    }


}