'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TbordersSchema extends Schema {
  up () {
    this.create('tborders', (table) => {
      // alter table
      table.increments()
      table.string('name', 80)
      table.string('ordernumber', 80) 
      table.integer('user_id', 80)
      table.string('user_name', 80) 
      table.timestamps()
      /*
        Columns:
        id int(10) UN AI PK 
        name varchar(255) 
        ordernumber varchar(200) 
        user_id int(11) 
        user_name varchar(250) 
        created_at timestamp 
        updated_at timestamp

      */
    })
  }

  down () {
    this.table('tborders', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TbordersSchema
