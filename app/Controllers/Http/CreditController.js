'use strict'


const Credit = use('App/Models/Credit')
const Tborder = use('App/Models/Tborder')
const Database = use('Database')

const sgMail = use('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


class CreditController {
  
  async index({view, auth}) {

    //const orders = await auth.user.credits().fetch(); // returns all orders for current user
    //const tborders = await Tborder.all() // returns all orders for team
    const orders = await Database.from('creditdetails').where(function () {
        this
          .where('deptstatus', 0)
          .where('user_id', auth.user.id)
      })

    return view.render('credits.index', {
      title: 'Credits',
      tborders: orders
    })
  }    
  
  async team({view, auth}) {

    //const orders = await auth.user.credits().fetch(); // returns all orders for current user
    //const tborders = await Tborder.all() // returns all orders for team
    const orders = await Database.from('creditdetails').where(function () {
        this
          .where('deptstatus', 0)
      })

    return view.render('credits.teamList', {
      title: 'Credits',
      tborders: orders
    })
  }    
  async newEntry({view, params}) {
    const tborder = await Tborder.find(params.id);
    return view.render('credits.create', {
      title: 'Credits',
      tborder: tborder
    })
  }

  async show({ params, view }) {
    const priorityreturn = await Credit.find(params.id); 
    return view.render('/credits.show', { 
        order: priorityreturn
    });
}      

  async search({ request, response, view }) {
    const tborder = request.all()
    
    return view.render('/credits.search', { tborder: tborder });
  }


async create({ request, response, session, auth}) {
    const formData = request.all();

    const order = new Credit()
    order.name = formData.name;

    order.ordernumber = formData.ordernumber;
    order.amount = formData.amount.replace(",",'').replace("$",'').replace(" ",'');
    order.email = formData.email;
    order.requestnotes = formData.requestnotes;
    order.paymenttype = formData.paymenttype;
    order.invoicenumber = formData.invoicenumber;
    order.locationnumber = formData.locationnumber;
    order.partner_order_number = formData.partner_order_number;
    order.partner_po_number = formData.partner_po_number;
    order.repstatus = formData.repstatus;
    order.deptstatus = 0;
    order.eodstatus = 0;
    order.approved = 0;

    order.user_id = auth.user.id
    order.user_name = auth.user.username
    order.tborder_id = formData.tborder_id
    
    

    const msg = {
      to: order.email,
      from: 'do.not.reply@tirebuyer.com',
      subject: 'Refund submitted by TireBuyer',
      text: 'Refund submitted by TireBuyer. Refunds can take up to 5 business days depending on your financial institution.',
      html: `<strong>Refund submitted by TireBuyer. Refunds can take up to 5 business days depending on your financial institution. <br> Order #: ${order.ordernumber} </strong>`
    };
    
    sgMail.send(msg);

    await order.save()

    session.flash({ message: 'Your order has been posted!' });
    return response.redirect('/credits');
}

async delete({ response, session, params}) {
    const tborder = await Credit.find(params.id);

    await tborder.delete();
    session.flash({ message: 'Your order has been removed'});
    return response.redirect('/credits');
}

async edit({ params, view }) {
    const tborder = await Credit.find(params.id);
    return view.render('/credits.edit', { tborder: tborder });
}

async update ({ response, request, session, params }) {

    const order = await Credit.find(params.id);
    order.name = request.all().name;
    order.ordernumber = request.all().ordernumber;
    order.amount = request.all().amount.replace(",",'').replace("$",'').replace(" ",'');
    order.email = request.all().email;
    order.requestnotes = request.all().requestnotes;
    order.paymenttype = request.all().paymenttype;
    order.invoicenumber = request.all().invoicenumber;
    order.locationnumber = request.all().locationnumber;
    order.partner_order_number = request.all().partner_order_number;
    order.partner_po_number = request.all().partner_po_number;
    order.repstatus = 'n/a';
    order.deptstatus = 0;
    order.eodstatus = 0;
    order.approved = 0;
   
    

    const msg = {
      to: order.email,
      from: 'do.not.reply@tirebuyer.com',
      subject: 'Refund has been updated by TireBuyer',
      text: 'Your refund request has been updated by a team member TireBuyer',
      html: `<strong>Your refund request has been updated by a team member TireBuyer. <br> Order #: ${order.ordernumber} </strong>`
    };
    sgMail.send(msg);

    await order.save();

    session.flash({ message: 'Your order has been updated. '});
    return response.redirect('/credits');
}
}
module.exports = CreditController
