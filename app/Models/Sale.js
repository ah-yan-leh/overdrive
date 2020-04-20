'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
    static get table () {
        return 'salesdetails'
  }
}

module.exports = Sale
