'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolesSchema extends Schema {
  up () {
    this.create('roles', (table) => {
      // alter table
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 254)
      table.timestamps()
      /*
        Columns:
        id int(10) UN AI PK 
        name varchar(40) 
        email varchar(100) 
        description varchar(255) 
        created_at timestamp 
        updated_at timestamp
      */
    })
  }

  down () {
    this.table('roles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = RolesSchema
