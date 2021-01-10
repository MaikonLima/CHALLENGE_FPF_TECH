
exports.up = function(knex) {
  return knex.schema.createTable('participant', function(table){
    table.increments();
    table.string('name_participant');

    table.string('project_id').notNullable();

    table.foreign('project_id').references('id_project').inTable('project');

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('participant');
};
