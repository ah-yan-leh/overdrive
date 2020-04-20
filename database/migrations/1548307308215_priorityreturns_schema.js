'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriorityreturnsSchema extends Schema {
  up () {
    this.create('priorityreturns', (table) => {
      // alter table
      table.increments()
      table.string('name', 80)
      table.string('ordernumber', 80)
      table.string('email', 150)
      table.string('order_type', 80) 
      table.string('return_method', 80) 
      table.string('pick_up_location', 80)
      table.string('return_status', 80)
      table.string('partner_order_number', 80)
      table.string('partner_po_number', 80)
      table.string('warehouse_name', 80)
      table.string('warehouse_no', 80)
      table.string('rma', 80)
      table.string('returntracking', 80) 
      table.string('ordernotes', 280)
      table.string('totalprice', 80)
      table.string('discount', 80)
      table.string('salestax', 80)
      table.string('initialshipping', 80)
      table.string('returnshipping', 80)
      table.string('restockingfee', 80)
      table.string('refundamount', 80)
      table.string('paymenttype', 80)
      table.string('invoicenumber', 80)
      table.string('locationnumber', 80)
      table.integer('returnstage', 80)
      table.integer('creditstatus', 80)
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
        email varchar(255) 
        order_type varchar(255) 
        return_method varchar(255) 
        pick_up_location varchar(255) 
        return_status varchar(255) 
        partner_order_number varchar(255) 
        partner_po_number varchar(255) 
        warehouse_name varchar(255) 
        warehouse_no varchar(255) 
        rma varchar(255) 
        rga varchar(255) 
        returntracking varchar(255) 
        ordernotes varchar(255) 
        totalprice float 
        discount float 
        salestax float 
        initialshipping float 
        returnshipping float 
        restockingfee float 
        refundamount float 
        paymenttype varchar(255) 
        invoicenumber varchar(255) 
        locationnumber varchar(255) 
        returnstage int(11) 
        creditstatus int(11) 
        eodstatus int(11) 
        approved int(11) 
        tborder_id int(11) 
        user_id int(11) 
        user_name varchar(250) 
        created_at timestamp 
        updated_at timestamp
      */
    })
  }

  down () {
    this.table('priorityreturns', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PriorityreturnsSchema
