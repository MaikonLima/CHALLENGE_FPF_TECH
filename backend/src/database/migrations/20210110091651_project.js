
exports.up = function (knex) {
    return knex.schema.createTable('project', function (table) {
        table.increments('id_project').primary();
        table.string('name_project').notNullable();
        table.date('date_initial').notNullable();
        table.date('date_final').notNullable();
        table.decimal('value').notNullable();
        table.integer('risk',2).notNullable();
        table.string('name_participant').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('project');
};
