'use strict'

const Priorityreturn = use('App/Models/Priorityreturn')
const Tborder = use('App/Models/Tborder')
const Database = use('Database')

const sgMail = use('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class PriorityreturnController {
    async index({view, auth}) {

        //const orders = await auth.user.priorityreturns().fetch(); // returns all orders for current user
        //const tborders = await Tborder.all() // returns all orders for team
        const orders = await Database.from('atdstockreturns').where(function () {
            this
              .where('returnstage','<', 5)
              .where('user_id', auth.user.id)
          })
    
        return view.render('priority-returns.index', {
          title: 'Priority-Returns',
          tborders: orders
        })
      }    
      async team({view, auth}) {
  
          //const orders = await auth.user.priorityreturns().fetch(); // returns all orders for current user
          //const tborders = await Tborder.all() // returns all orders for team
          const orders = await Database.from('atdstockreturns').where(function () {
              this
                .where('returnstage','<', 5)
            })
      
          return view.render('priority-returns.teamList', {
            title: 'Priority-Returns',
            tborders: orders
          })
        }    
      async newEntry({view, params}) {
        const tborder = await Tborder.find(params.id);
        return view.render('priority-returns.create', {
          title: 'Priority-Returns',
          tborder: tborder
        })
      }

      async show({ params, view }) {
        const priorityreturn = await Priorityreturn.find(params.id); 
        return view.render('/priority-returns.show', { 
            order: priorityreturn
        });
    }      
    
      async search({ request, response, view }) {
        const tborder = request.all()
        
        return view.render('/priority-returns.search', { tborder: tborder });
      }


    async create({ request, response, session, auth}) {
        const formData = request.all();

        const order = new Priorityreturn()
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
          subject: 'Return has been started by TireBuyer',
          text: 'TireBuyer has started your return. Returns typically take 7-10 business days to complete.',
          html: `<strong>TireBuyer has started your return. Returns typically take 7-10 business days to complete.
                <br> Order #: ${order.ordernumber} </strong>`,
        };
        sgMail.send(msg);

        session.flash({ message: 'Your order has been posted!' });
        return response.redirect('/priority-returns');
    }

    async delete({ response, session, params}) {
        const tborder = await Priorityreturn.find(params.id);

        await tborder.delete();
    

        const msg = {
          to: tborder.email,
          from: 'do.not.reply@tirebuyer.com',
          subject: 'Return has been CANCELLED by TireBuyer',
          text: 'TireBuyer has CANCELLED your return. If this is an error, please contact us.',
          html: '<strong>TireBuyer has CANCELLED your return. If this is an error, please contact us.</strong>',
        };
        sgMail.send(msg);
        session.flash({ message: 'Your order has been removed'});
        return response.redirect('/priority-returns');
    }

    async edit({ params, view }) {
        const tborder = await Priorityreturn.find(params.id);
        return view.render('/priority-returns.edit', { tborder: tborder });
    }

    async update ({ response, request, session, params }) {

        const order = await Priorityreturn.find(params.id);

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

        console.log('order.returnstage',order.returnstage);
        console.log('request.all().returnstage',request.all().returnstage);
        let emailSubjectLine = '';

        switch(order.returnstage) {

          case '2':
          emailSubjectLine = 'Return update: Item(s) Picked Up';
          break;
          case '3':
            emailSubjectLine = 'Return update: Item(s) Received back';
            break;
          case '4':
            emailSubjectLine = 'Refund submitted by TireBuyer';
            break;
          case '5':
            emailSubjectLine = 'Return is now complete';
            break;
          default:
            emailSubjectLine = 'Return has been Updated by TireBuyer';
        }

        const msg = {
          to: order.email,
          from: 'do.not.reply@tirebuyer.com',
          subject: emailSubjectLine,
          text: `TireBuyer is actively working on your return. A team member has updated this return.
          Current status: ${emailSubjectLine}. We will keep you posted thru email on any other actions. If you have questions about your return, feel free to call us. Order #: ${order.ordernumber} `,
          html: `TireBuyer is actively working on your return. A team member has updated this return.
          <br><strong>Current status: ${emailSubjectLine}<br></strong>
          We will keep you posted thru email on any other actions. If you have questions about your return, feel free to call us. <br><br> Order #: ${order.ordernumber} `,
        };
        sgMail.send(msg);

        session.flash({ message: 'Your order has been updated. '});
        return response.redirect('/priority-returns');
    }
}

module.exports = PriorityreturnController
