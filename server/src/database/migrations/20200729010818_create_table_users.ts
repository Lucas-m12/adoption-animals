import Knex from "knex";


export const up = async (knex: Knex): Promise<void> => 
  knex.schema.createTable('users', table => {
    table.string('id').primary().notNullable(),
    table.string('email').unique().notNullable(),
    table.string('password').notNullable(),
    table.string('name').notNullable(),
    table.date('birth').notNullable(),
    table.timestamps(true, true);
  });


export const down = async (knex: Knex): Promise<void> => 
  knex.schema.dropTable('users');
