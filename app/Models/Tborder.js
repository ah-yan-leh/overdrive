'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tborder extends Model {


  sales(){
    return this.hasMany('App/Models/Sale')
  }
  
    
  priorityreturns(){
    return this.hasMany('App/Models/Priorityreturn')
  }
  
  orders(){
    return this.hasMany('App/Models/Tborder')
  }  
  credits(){
    return this.hasMany('App/Models/Credit')
  }  
  warranties(){
    return this.hasMany('App/Models/Warranty')
  }
}

module.exports = Tborder
