/*
* this module approach to sending out sendgrid emails did not work
*/


// this is the content of this specific file
const sgMail = use('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var emailContent = function (obj) {
  const msg = {
    to: obj.to,
    from: 'do.not.reply@tirebuyer.com',
    subject: obj.subject,
    text: '',
    html: obj.html,
  };
  console.log('hello from sendgrid.js')
  sgMail.send(msg);
}

module.exports = emailContent


////
///
// if you want to use this module, include the below in your controller
/*
in the file you want to use
const Helpers = use('Helpers')
const pathSendgrid = Helpers.appRoot('sendgrid.js')
const sendgrid = use(pathSendgrid)


      const msg = {
        to: tborder.email,
        subject: 'Refund has now been applied by TireBuyer',
        html: '<strong>It is official: your refund has been applied by TireBuyer. Now it is a waiting game to see refund back on the account used to complete purchase. Refunds can take up to 5 business days depending on your financial institution.</strong>',
      };
      sendgrid(msg)

*/
