'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Warranty extends Model {
    static get table () {
        return 'atdwarrantyreturns'
  }
}

module.exports = Warranty
