'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WarrantySchema extends Schema {
  up () {
    this.create('warranties', (table) => {
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
      */
    })
  }

  down () {
    this.table('warranties', (table) => {
      // reverse alternations
    })
  }
}

module.exports = WarrantySchema
