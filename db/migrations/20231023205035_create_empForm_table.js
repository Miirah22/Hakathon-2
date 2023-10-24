/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('empForm', function (table) {
        table.increments('empNo').primary();
        table.string('fname').notNullable();
        table.integer('employee_age').notNullable(); 
        table.string('city').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('post').notNullable();
        table.date('sDate').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('empForm');
};
