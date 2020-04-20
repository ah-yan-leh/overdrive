'use strict'


const Sale = use('App/Models/Sale')
const Tborder = use('App/Models/Tborder')
const Database = use('Database')

class SaleController {
  async index() {
  return response.redirect('sales.daily');
}    
async newEntry({view, params}) {
  const tborder = await Tborder.find(params.id);
  return view.render('sales.create', {
    title: 'Sales',
    tborder: tborder
  })
}

async show({ params, view }) {
  const priorityreturn = await Sale.find(params.id); 
  return view.render('/sales.show', { 
      order: priorityreturn
  });
}      

async dailysales({response}) {
  var date = new Date();
  let dateISO = date.toISOString()

  let fromdate = dateISO.split('T')[0];
  let todate = dateISO.split('T')[0];

  fromdate = `${fromdate}T00:00:00.000Z`;
  todate = `${todate}T23:59:59.000Z`;
  
  console.log('fromdate =>', fromdate)
  console.log('todate =>', todate)
  const sales = await Database.from('salesdetails').where(function () {
    this
    .whereBetween('created_at', [fromdate, todate])
  })
  return response.json(sales);
}     

async search({ request, response }) {
  let tborder = request.all();

  let d1 = tborder.fromdate;
  let d2 = tborder.todate;  
  let fromdate = `${d1}T00:00:00.000Z`;
  let todate = `${d2}T23:00:00.000Z`;

  console.log('fromdate =>', fromdate)
  console.log('todate =>', todate)
  
  const result = await Database.from('salesdetails').where(function () {
    this
    .whereBetween('created_at', [fromdate,todate])
  })
  return response.json(result);
}

async create({ request, response, session, auth}) {
  var date = new Date();
  var dateISO = date.toISOString()
  console.log('dateISO => ',dateISO)
  const formData = request.all();

  const order = new Sale()
  order.name = formData.name
  order.ordernumber = formData.ordernumber

  order.ordertype = formData.ordertype
  order.email = 'N/A'
  order.totalprice = formData.totalprice.replace(",",'').replace("$",'').replace(" ",'')
  order.discount = formData.discount
  order.salestax = formData.salestax
  order.shipping = formData.shipping
  order.amount = formData.totalprice - formData.salestax - formData.shipping
  order.qty = formData.qty
  order.accqty = formData.accqty
  order.status =  0
  order.created_at = formData.dateOne;
  order.updated_at = request.all().dateOne;
  order.user_id = auth.user.id
  order.user_name = auth.user.username
  order.tborder_id = formData.tborder_id
  
  await order.save()

  session.flash({ message: `<strong>${formData.ordernumber}, ${formData.name}</strong> has been posted!` });
  return response.redirect(`/tborders/show/${formData.tborder_id}`);
}

async delete({ response, session, params}) {
  const tborder = await Sale.find(params.id);

  await tborder.delete();
  session.flash({ message: 'Your order has been removed'});
  return response.redirect('/sales/search');
}

async edit({ params, view }) {
  const tborder = await Sale.find(params.id);
  return view.render('/sales.edit', { tborder: tborder });
}

async update ({ response, request, session, params }) {
  const order = await Sale.find(params.id);
  order.name = request.all().name
  order.ordernumber = request.all().ordernumber

  order.ordertype = request.all().ordertype
  order.email = 'N/A'
  order.totalprice = request.all().totalprice.replace(",",'').replace("$",'').replace(" ",'')
  order.discount = request.all().discount
  order.salestax = request.all().salestax
  order.shipping = request.all().shipping
  order.amount = request.all().totalprice - request.all().salestax - request.all().discount - request.all().shipping
  order.qty = request.all().qty
  order.accqty = request.all().accqty
  order.status =  0
  order.created_at = request.all().dateOne;
  await order.save();
  console.log('order =>',order)
  session.flash({ message: 'Your order has been updated. '});
  return response.redirect('/sales/search');
}
}


module.exports = SaleController
