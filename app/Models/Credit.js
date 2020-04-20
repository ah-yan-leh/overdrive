'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Credit extends Model {
    static get table () {
        return 'creditdetails'
  }
}

module.exports = Credit
