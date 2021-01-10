const { query } = require('express');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const project = await connection('project').select('*');
        return response.json(project);
    },
    async create(request, response) {
        const {
            id_project,
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            name_participant,
        } = request.body;

        await connection('project').insert({
            id_project,
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            name_participant,
        });
    },


    async update(request, response) {
        // const id_header = request.headers.authorization;
        const {
            id_project,
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            name_participant,
        } = request.body;

        if (id_project === id_project) {
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
        }
        return response.status(204).send();
    },

    async delete(request, response) {
        // const { id_project } = request.body;
        
        const id_project = request.params.id_project;

        console.log(id_project);
        // const id_project = request.headers.authorization;

        // const project = await connection('project')
        // .where('id_project', id_project)
        // .select('id_project')
        // .first();

        // if(project.id_project != id_project){
        //     return response.status(401).json({error: "Operação não autorizada!"});
        // }

        // await connection('project').where('id_porject',id_project).delete();

        // return response.status(200).send();
    }


}