'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('salesdetails', (table) => {
      // alter table
      table.increments()
      table.string('name', 80)
      table.string('ordernumber', 80)
      table.integer('ordertype', 80)
      table.string('email', 80)
      table.integer('totalprice', 80)
      table.integer('discount', 80)
      table.integer('salestax', 80)
      table.integer('shipping', 80) 
      table.integer('amount', 80)
      table.integer('qty', 80)
      table.integer('accqty', 80)
      table.integer('status', 80) 
      table.integer('tborder_id', 80)
      table.integer('user_id', 80)
      table.string('user_name', 80) 
      table.timestamps()
      /*
        Columns:
        id int(10) UN AI PK 
        name varchar(255) 
        slug varchar(255) 
        ordernumber varchar(250) 
        ordertype int(11) 
        email varchar(255) 
        totalprice float 
        discount float 
        salestax float 
        shipping float 
        amount float 
        qty int(11) 
        accqty int(11) 
        status int(11) 
        tborder_id int(11) 
        user_id int(11) 
        user_name varchar(250) 
        table.timestamps()


      */
    })
  }

  down () {
    this.table('salesdetails', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SalesSchema
