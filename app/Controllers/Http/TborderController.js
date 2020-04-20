'use strict'

const Tborder = use('App/Models/Tborder')
const Database = use('Database')

const sgMail = use('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


class TborderController {
    async index({response, auth}) {

        return response.redirect('/');


      }

      async search({ request, view }) {
        const tborder = await Tborder
                .query()
                .where('ordernumber', request.all().ordernumber)
                .fetch()

        return view.render('tborders.search', {
            title: 'Search results',
            tborders: tborder.toJSON(),
            ordernumber:request.all().ordernumber
          })
      } 

    async getActiveReturns({view, response}) {
      const priorityreturns = await Database.from('atdstockreturns').where('returnstage','<',5)
      //console.log('priorityreturns length',priorityreturns.length)
      return response.json(priorityreturns);
  }     
    

      async show({ params, view }) {
        const tborder = await Tborder.find(params.id); //
        const priorityreturns = await Database.from('atdstockreturns').where('tborder_id', params.id)
        const sales = await Database.from('salesdetails').where('tborder_id', params.id)
        const warranties = await Database.from('atdwarrantyreturns').where('tborder_id', params.id)
        const credits = await Database.from('creditdetails').where('tborder_id', params.id)
        return view.render('/tborders.show', { 
            order: tborder,
            priorityreturns:priorityreturns,
            sales:sales,
            warranties:warranties,
            credits:credits
        });
    }      
    
    async newEntry({view, params}) {
        const ordernumber = params.ordernumber;
        return view.render('tborders.create', {
          title: 'New order',
          ordernumber: ordernumber
        })
      }
    async create({ request, response, session, auth}) {
        const tborder = request.all();

        const posted = await auth.user.orders().create({
            name: tborder.name,
            ordernumber: tborder.ordernumber,
            user_name: auth.user.username,
            user_id: auth.user.id
        });
        const newtborder = await Database.from('tborders').where('ordernumber',request.all().ordernumber)

        session.flash({ message: 'Your order has been posted!' });
        console.log('newtborder[0].id',newtborder[0].id)
        return response.redirect('/tborders/show/'+newtborder[0].id);
    }

    async delete({ response, session, params}) {
        const tborder = await Tborder.find(params.id);

        await tborder.delete();
        session.flash({ message: 'Your order has been removed'});
        return response.redirect('/');
    }

    async edit({ params, view }) {
        const tborder = await Tborder.find(params.id);
        return view.render('/tborders.edit', { tborder: tborder });
    }

    async update ({ response, request, session, params,auth }) {
        const tborder = await Tborder.find(params.id);

        tborder.name = request.all().name;
        tborder.ordernumber = request.all().link;
        tborder.user_name = auth.user.username;

        await tborder.save();

        session.flash({ message: 'Your order has been updated. '});
        return response.redirect('/tborders/show/'+tborder.id);
    }
    async customemail({ request, response, session}) {

        const msg = {
          to: request.all().email.replace(" ",''),
          from: 'TireSellerSupport@atd-us.com',
          subject: `${request.all().subject}`,
          text: ' Test message ',
          html: `
            Hello ${request.all().firstname},
            <p>
            ${request.all().message}
            </p>
            
          `,
        };
        sgMail.send(msg);

        session.flash({ message: 'Email sent successfully!' });
        return response.redirect('/');
    }
    async notificationemail({ request, response, session}) {

        const msg = {
          to: request.all().CustomerEmail.replace(" ", ''),
          // cc: "",
          // bcc: "",
          from: 'TireSeller@atd-us.com',
          subject: `${request.all().subject}`,
          text: '   ',
          html: `
            ${request.all().message}
          `,
        };
        sgMail.send(msg);
        return  response.json(msg);
    }
}

module.exports = TborderController
