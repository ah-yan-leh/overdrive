'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Priorityreturn extends Model {  
    static get table () {
        return 'atdstockreturns'
  }
}

module.exports = Priorityreturn
