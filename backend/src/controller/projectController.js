const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const project = await connection('project')
            .join('participant', 'project.id', '=', 'participant.project_id')
            .select('*');
        return response.json(project);
    },
    async create(request, response) {
        const {
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            participants
        } = request.body;

           var name_participant = participants.map((item) => {
           return item;

        });
        try {
            const project_id = parseInt(await connection('project').insert({ name_project, date_initial, date_final, value, risk }).returning('id'));
            const result = await connection('participant').insert({ name_participant, project_id });
            return response.status(204).send('INSERTED');
        } catch (err) {
            console.log(err);
            return response.json(err.name);
        }
    },


    async delete(request, response) {
        const { id } = request.body;
        try {
            const result = await connection('project')
                .join('participant', 'project.id', '=', 'participant.project_id')
                .where('project.id', id)
                .delete();
            return response.status(204).send();
        } catch (err) {
            console.log(err);
            return response.json(err.name);
        }
    }


}