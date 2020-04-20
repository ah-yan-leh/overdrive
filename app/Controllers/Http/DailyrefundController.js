'use strict'

const Tborder = use('App/Models/Tborder')
const Credit = use('App/Models/Credit')
const Priorityreturn = use('App/Models/Priorityreturn')
const Warranty = use('App/Models/Warranty')
const Database = use('Database')

const sgMail = use('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class DailyrefundController {
  
    async index({view}) {
  
        const credits = await Database.from('creditdetails').where(function () {
          this
            .where('deptstatus', 0)
        })
        const priorityreturns = await Database.from('atdstockreturns').where(function () {
            this
                .where('returnstage', 4)
            })
        const warranties = await Database.from('atdwarrantyreturns').where(function () {
                this
                .where('returnstage', 4)
            })
  
      return view.render('daily-refunds.index', {
        title: 'Credits',
        priorityreturns: priorityreturns,
        credits: credits,
        warranties: warranties
      })
    }    
  async refundsUpdateCredit ({ response, request, session, params }) {
      const tborder = await Credit.find(params.id);
        tborder.deptstatus = request.all().deptstatus;
      await tborder.save();
    

      const msg = {
        to: tborder.email,
        fromname: 'TireBuyer.com',
        from: 'do.not.reply@tirebuyer.com',
        subject: 'Refund has now been applied by TireBuyer',
        text: 'It is official: your refund has been applied by TireBuyer. Now it is a waiting game to see refund back on the account used to complete purchase. Refunds can take up to 5 business days depending on your financial institution.',
        html: `<strong>It is official: your refund has been applied by TireBuyer. Now it is a waiting game to see refund back on the account used to complete purchase. Refunds can take up to 5 business days depending on your financial institution.<br> Order #: ${tborder.ordernumber} </strong>`
      };
      sgMail.send(msg);

    
      session.flash({ message: 'Your order has been updated. '});
      return response.redirect('/daily-refunds');
    }
    async refundsUpdatePriorityreturn ({ response, request, session, params }) {
        const tborder = await Priorityreturn.find(params.id);
        tborder.returnstage = request.all().returnstage;
        tborder.creditstatus = request.all().creditstatus;
        await tborder.save();
    

        const msg = {
          to: tborder.email,
          from: 'do.not.reply@tirebuyer.com',
          subject: 'Refund has now been applied by TireBuyer',
          text: 'It is official: your refund has been applied by TireBuyer. Now it is a waiting game to see refund back on the account used to complete purchase. Refunds can take up to 5 business days depending on your financial institution.',
          html: `<strong>It is official: your refund has been applied by TireBuyer. Now it is a waiting game to see refund back on the account used to complete purchase. Refunds can take up to 5 business days depending on your financial institution.<br> Order #: ${tborder.ordernumber} </strong>`
        };
        sgMail.send(msg);
      
        session.flash({ message: 'Your order has been updated. '});
        return response.redirect('/daily-refunds');
      }
      async refundsUpdateWarranty ({ response, request, session, params }) {
          const tborder = await Warranty.find(params.id);
            tborder.returnstage = request.all().returnstage;
            tborder.creditstatus = request.all().creditstatus;
          await tborder.save();
    

          const msg = {
            to: tborder.email,
            from: 'do.not.reply@tirebuyer.com',
            subject: 'Refund has now been applied by TireBuyer',
            text: 'It is official: your refund has been applied by TireBuyer. Now it is a waiting game to see refund back on the account used to complete purchase. Refunds can take up to 5 business days depending on your financial institution.',
            html: `<strong>It is official: your refund has been applied by TireBuyer. Now it is a waiting game to see refund back on the account used to complete purchase. Refunds can take up to 5 business days depending on your financial institution.<br> Order #: ${tborder.ordernumber} </strong>`
          };
          sgMail.send(msg);
        
          session.flash({ message: 'Your order has been updated. '});
          return response.redirect('/daily-refunds');
        }
}

module.exports = DailyrefundController
