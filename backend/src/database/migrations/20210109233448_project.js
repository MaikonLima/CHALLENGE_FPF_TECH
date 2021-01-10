
exports.up = function (knex) {
    return knex.schema.createTable('project', function (table) {
        table.increments('id_project').primary();
        table.string('name_project');
        table.date('date_initial');
        table.date('date_final');
        table.decimal('value');
        table.integer('risk');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('project');
};
