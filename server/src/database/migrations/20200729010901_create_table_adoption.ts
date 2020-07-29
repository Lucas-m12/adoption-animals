import Knex from "knex";


export const up = async(knex: Knex): Promise<void> =>
  knex.schema.createTable('adoption', table => {
    table.bigIncrements().primary(),
    table.string('name').nullable();
    table.string('specie').notNullable();
    table.string('breed').nullable();
    table.string('gender', 1).nullable();
    table.string('size').nullable();
    table.string('color').nullable();
    table.string('image').nullable();
    table.date('birth').nullable();
    table.string('identification').nullable().unique();

    table.string('id_responsible').notNullable();
    table.string('id_adopter').nullable();

    table.timestamps(true, true);
    table.integer('status').notNullable().defaultTo(1);

    table.foreign('id_responsible').references('id').inTable('users');
    table.foreign('id_adopter').references('id').inTable('users');
  });


export const down = async(knex: Knex): Promise<void> =>
  knex.schema.dropTable('adoption');

