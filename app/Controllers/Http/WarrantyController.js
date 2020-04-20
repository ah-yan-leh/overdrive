'use strict'


const Warranty = use('App/Models/Warranty')
const Tborder = use('App/Models/Tborder')
const Database = use('Database')

const sgMail = use('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class WarrantyController {
  async index({view, auth}) {

    //const orders = await auth.user.warranties().fetch(); // returns all orders for current user
    //const tborders = await Tborder.all() // returns all orders for team
    const orders = await Database.from('atdwarrantyreturns').where(function () {
        this
          .where('returnstage','<', 5)
          .where('user_id', auth.user.id)
      })

    return view.render('warranties.index', {
      title: 'Warranties',
      tborders: orders
    })
  }
  async team({view, auth}) {

    //const orders = await auth.user.warranties().fetch(); // returns all orders for current user
    //const tborders = await Tborder.all() // returns all orders for team
    const orders = await Database.from('atdwarrantyreturns').where(function () {
        this
          .where('returnstage','<', 5)
      })

    return view.render('warranties.teamList', {
      title: 'Warranties',
      tborders: orders
    })
  }    
  async newEntry({view, params}) {
    const tborder = await Tborder.find(params.id);
    return view.render('warranties.create', {
      title: 'Warranties',
      tborder: tborder
    })
  }

  async show({ params, view }) {
    const priorityreturn = await Warranty.find(params.id); 
    return view.render('/warranties.show', { 
        order: priorityreturn
    });
}      

  async search({ request, response, view }) {
    const tborder = request.all()
    
    return view.render('/warranties.search', { tborder: tborder });
  }


async create({ request, response, session, auth}) {
    const formData = request.all();

    const order = new Warranty()
    order.name = formData.name;
    order.ordernumber = formData.ordernumber;
    order.email = formData.email;
    order.paymenttype = formData.paymenttype;
    order.ordernotes = formData.ordernotes;
    order.partner_order_number = formData.partner_order_number;
    order.partner_po_number = formData.partner_po_number;
    order.order_type = formData.order_type;
    order.return_method = formData.return_method;
    order.pick_up_location = formData.pick_up_location;
    order.return_status = formData.return_status;
    order.returnstage = formData.returnstage;
    order.warehouse_name = formData.warehouse_name;
    order.warehouse_no = formData.warehouse_no;
    order.rma = formData.rma;
    order.returntracking = formData.returntracking;
    order.locationnumber = formData.locationnumber;
    order.invoicenumber = formData.invoicenumber;

    order.totalprice = formData.totalprice.replace(",",'').replace("$",'').replace(" ",'')
    order.discount = '-';
    order.salestax = '-';
    order.initialshipping = formData.initialshipping;
    order.returnshipping = formData.returnshipping;
    order.restockingfee = formData.restockingfee;
    order.refundamount = formData.refundamount.replace(",",'').replace("$",'').replace(" ",'')
    order.creditstatus = 0;

    order.user_id = auth.user.id
    order.user_name = auth.user.username
    order.tborder_id = formData.tborder_id
    
    await order.save()
    

    const msg = {
      to: order.email,
      from: 'do.not.reply@tirebuyer.com',
      subject: 'Warranty return has been started by TireBuyer',
      text: 'TireBuyer has started your warranty return. Once product(s) are on the way back to us, typical warranty return takes 30-45 days to complete. Inspection is subject to manufacturer established requirements',
      html: `<strong>TireBuyer has started your warranty return. Once product(s) are on the way back to us, typical warranty return takes 30-45 days to complete. Inspection is subject to manufacturer established requirements. <br> Order #: ${order.ordernumber}</strong>`
    };
    sgMail.send(msg);

    session.flash({ message: 'Your order has been posted!' });
    return response.redirect('/warranties');
}

async delete({ response, session, params}) {
    const tborder = await Warranty.find(params.id);

    await tborder.delete();
    

    const msg = {
      to: tborder.email,
      from: 'do.not.reply@tirebuyer.com',
      subject: 'Warranty return has been cancelled by TireBuyer',
      text: 'TireBuyer has cancelled your warranty return. If this is an error, please contact us.',
      html: `<strong>TireBuyer has cancelled your warranty return. If this is an error, please contact us.<br> Order #: ${tborder.ordernumber}</strong>`
    };
    sgMail.send(msg);
    session.flash({ message: 'Your order has been removed'});
    return response.redirect('/warranties');
}

async edit({ params, view }) {
    const tborder = await Warranty.find(params.id);
    return view.render('/warranties.edit', { tborder: tborder });
}

async update ({ response, request, session, params }) {

    const order = await Warranty.find(params.id);

    order.name = request.all().name;
    order.ordernumber = request.all().ordernumber;
    order.email = request.all().email;
    order.paymenttype = request.all().paymenttype;
    order.ordernotes = request.all().ordernotes;
    order.partner_order_number = request.all().partner_order_number;
    order.partner_po_number = request.all().partner_po_number;
    order.order_type = request.all().order_type;
    order.return_method = request.all().return_method;
    order.pick_up_location = request.all().pick_up_location;
    order.return_status = request.all().return_status;
    order.returnstage = request.all().returnstage;
    order.warehouse_name = request.all().warehouse_name;
    order.warehouse_no = request.all().warehouse_no;
    order.rma = request.all().rma;
    order.returntracking = request.all().returntracking;
    order.locationnumber = request.all().locationnumber;
    order.invoicenumber = request.all().invoicenumber;

    order.totalprice = request.all().totalprice.replace(",",'').replace("$",'').replace(" ",'')
    order.discount = '-';
    order.salestax = '-';
    order.initialshipping = request.all().initialshipping;
    order.returnshipping = request.all().returnshipping;
    order.restockingfee = request.all().restockingfee;
    order.refundamount = request.all().refundamount.replace(",",'').replace("$",'').replace(" ",'')
   

    await order.save();
    

    const msg = {
      to: order.email,
      from: 'do.not.reply@tirebuyer.com',
      subject: 'Warranty return has been Updated by TireBuyer',
      text: 'TireBuyer is actively working on your warranty return. A team member has updated this warranty return and we will keep you posted thru email on any other actions. If you have questions about your warranty return, feel free to call us.',
      html: `<strong>TireBuyer is actively working on your warranty return. A team member has updated this warranty return and we will keep you posted thru email on any other actions. If you have questions about your warranty return, feel free to call us.<br> Order #: ${order.ordernumber}</strong>`
    };
    sgMail.send(msg);

    session.flash({ message: 'Your order has been updated. '});
    return response.redirect('/warranties');
}
}
module.exports = WarrantyController
