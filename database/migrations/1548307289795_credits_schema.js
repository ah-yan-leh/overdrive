'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreditsSchema extends Schema {
  up () {
    this.create('credits', (table) => {
      // alter table
      table.increments()
      table.string('name', 80)
      table.string('ordernumber', 80)
      table.integer('amount', 80)
      table.string('email', 80)
      table.string('requestnotes', 80) 
      table.string('paymenttype', 80)
      table.string('invoicenumber', 80)
      table.string('locationnumber', 80)
      table.string('partner_order_number', 80)
      table.string('partner_po_number', 80)
      table.integer('repstatus', 80)
      table.integer('deptstatus', 80) 
      table.integer('eodstatus', 80)
      table.integer('approved', 80)
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
amount float 
email varchar(255) 
requestnotes varchar(255) 
paymenttype varchar(255) 
invoicenumber varchar(255) 
locationnumber varchar(255) 
partner_order_number varchar(255) 
partner_po_number varchar(255) 
repstatus varchar(255) 
deptstatus varchar(255) 
eodstatus varchar(255) 
approved int(11) 
tborder_id int(11) 
user_id int(11) 
user_name varchar(1000) 
created_at timestamp 
updated_at timestamp
      */
    })
  }

  down () {
    this.table('credits', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CreditsSchema
