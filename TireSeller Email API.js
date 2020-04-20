$(document).ready(function(){

  let orderList = [
    {
      "OrderNumber": 230871382,
      "PaymentChannel": "EBAY",
      "DealerLocationID": 97676,
      "DealerName": "029971 FIRESTONE",
      "DealerAddress1": "6977 FRIARS RD STE 140",
      "DealerAddress2": "",
      "DealerCity": "SAN DIEGO",
      "DealerState": "CA",
      "DealerZIP": 92108,
      "DealerPhone": "619-297-6440",
      "DealerEmail": "029971@bfusa.com",
      "OrderCreationDate": "7/29/2019 23:38",
      "OrderShippedDate": "8/2/2019 16:05",
      "ProductCode": "TV093001490",
      "ProductName": "Wildpeak A/T3W",
      "ProductSize": "265/70R16",
      "ProductDescription": "Take your truck anywhere, in any weather, with this ruggedly built, technology-packed all-terrain tire. Now with a free 2-year road hazard protection. Some exclusions apply; see warranty for details.",
      "CustomerEmail": "ayanle.abdi@gmail.com"
    }
  ];
  function EmailCampaign(data){
      this._csrf = _csrf;
      this.OrderNumber = data.OrderNumber;
      this.PaymentChannel = data.PaymentChannel;
      this.DealerLocationID = data.DealerLocationID;
      this.DealerName = data.DealerName;
      this.DealerAddress1 = data.DealerAddress1;
      this.DealerAddress2 = data.DealerAddress2;
      this.DealerCity = data.DealerCity;
      this.DealerState = data.DealerState;
      this.DealerZIP = data.DealerZIP;
      this.DealerPhone = data.DealerPhone;
      this.DealerEmail = data.DealerEmail;
      this.OrderCreationDate = data.OrderCreationDate;
      this.OrderShippedDate = data.OrderShippedDate;
      this.ProductCode = data.ProductCode;
      this.ProductName = data.ProductName;
      this.ProductSize = data.ProductSize;
      this.ProductDescription = data.ProductDescription;
      this.CustomerEmail = data.CustomerEmail;
      this.subject = "TireSeller Update";
/*




*/
this.message = `
<HTML><HEAD>
  <META content="text/html; charset=utf-8" http-equiv=Content-Type></HEAD>
  <BODY style="PADDING-BOTTOM: 50px; PADDING-TOP: 50px; PADDING-LEFT: 0px; MARGIN: 0px; PADDING-RIGHT: 0px">
  <DIV>
  <TABLE align=center>
  <TBODY>
  <TR>
  <TD><B></B></TD></TR></TBODY></TABLE><BR><BR></DIV>
  <TABLE id=wrapper style="FONT-FAMILY: Arial, Helvetica, sans-serif" cellSpacing=0 cellPadding=0 align=center border=0>
  <TBODY>
  <TR>
  <TD id=header>
  <TABLE cellSpacing=0 cellPadding=0 width="100%" bgColor=#ffffff border=0>
  <TBODY>
  <TR>
  <TD id=logo style="PADDING-BOTTOM: 5px; PADDING-TOP: 5px; PADDING-LEFT: 10px; PADDING-RIGHT: 20px">
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
  <TD>
  <IMG style="BORDER-TOP-STYLE: none; TEXT-DECORATION: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; OUTLINE-STYLE: none; BORDER-LEFT-STYLE: none; -MS-INTERPOLATION-MODE: bicubic" border=0 alt=eBay src="https://carstanza.com/images/TireSeller.png" width=345 height=51 align=left>
  
  </TD>
  <TD>
  <TABLE style="FLOAT: right" cellSpacing=0 cellPadding=0 border=0>
  <TBODY>
  <TR>
  <TD >
  
  <SPAN style="FONT-FAMILY: Times, serif"></SPAN> </A></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>
  <TABLE id=content cellSpacing=0 cellPadding=0 width=600 bgColor=#ffffff border=0>
  <TBODY>

  
  <!-- Hello section -->
  
  <TR>
  <TD vAlign=top>
  <H3 style="FONT-SIZE: 18px; FONT-FAMILY: Arial, Helvetica, sans-serif; FONT-WEIGHT: normal; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 20px; PADDING-LEFT: 0px; MARGIN: 12px 0px 7px 20px; LINE-HEIGHT: 18px; PADDING-RIGHT: 0px">Hello,</H3>
  <TABLE style="FONT-SIZE: 14px; PADDING-LEFT: 20px" cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
  <TD style="PADDING-RIGHT: 10px" vAlign=top></TD>
  <TD style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 10px" vAlign=top>Your order has been delivered to the tire installation shop below. Please call the installer at the phone number provided to schedule an installation appointment. </TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR>
  <!-- End of Hello section -->
  
  
  
  
  <TR>
  <TD style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px" width="100%">
  </TD></TR>
  <TR>
  <TD style="PADDING: 15px;" width="100%">
  <TABLE style="BORDER-BOTTOM: #f58b00 3px solid" width=600>
  <TBODY>
  
  <!-- What happens next -->
  <TR>
  <TD vAlign=top>

  <TABLE style="FONT-SIZE: 14px; PADDING-LEFT: 20px" cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
  <TD style="PADDING-RIGHT: 10px" vAlign=top></TD>
  <TD style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 10px" vAlign=top></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR>
  <!-- End of What happens next -->
  
  
  
  <TR>
  <TD style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px" width="100%">
  <TABLE style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px" cellSpacing=0 cellPadding=0 width=600 border=0>
  <TBODY>
  <TR>
  <TD>
  <H3 style="FONT-SIZE: 18px; FONT-FAMILY: Arial, Helvetica, sans-serif; FONT-WEIGHT: normal; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 4px 0px 5px; LINE-HEIGHT: 18px; PADDING-RIGHT: 0px">Items delivered to an installer:</H3></TD></TR>
  <TR>
  <TD>
  <P style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; TEXT-ALIGN: left; MARGIN: 0px 0px 10px; LINE-HEIGHT: 12px"><STRONG>You ordered size ${this.ProductSize} in the ${this.ProductName}.</STRONG></P></TD></TR>
  <TR>
  <TD style="VERTICAL-ALIGN: top">
  
  
  <TABLE style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #455560; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px" width=600>
  <TBODY>
  <TR>
  <TD>
  <H3 style="FONT-SIZE: 18px; FONT-WEIGHT: normal; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 20px 0px 5px; LINE-HEIGHT: 18px; PADDING-RIGHT: 0px">We'll deliver it to your local installer: </H3>
  <P style="FONT-FAMILY: Arial, Helvetica, sans-serif"><STRONG>${this.DealerName}</STRONG><BR><STRONG>${this.DealerAddress1}</STRONG><BR><STRONG>${this.DealerAddress2}</STRONG><BR><STRONG>${this.DealerCity}, ${this.DealerState} ${this.DealerZIP} </STRONG><BR><STRONG>${this.DealerPhone}</STRONG><BR></P></TD></TR></TBODY></TABLE>
  <TABLE cellSpacing=0 cellPadding=0 width=600 bgColor=#f3f4f5 border=0>
  <TBODY>
  <TR>
  <TD style="VERTICAL-ALIGN: top">
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR bgColor=#ffffff>
  <TD colSpan=2>
  <P style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #455560; TEXT-ALIGN: right; MARGIN: 10px 20px 5px 10px; LINE-HEIGHT: 15px"><STRONG>Installation rates* due at time of service</STRONG></P></TD></TR></TBODY></TABLE>
  </TD></TR>
  <TR>
  <TD>
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
  <TD style="PADDING-BOTTOM: 10px; PADDING-TOP: 10px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px">
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
  <TD></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR>
  <TR>
  <TD>
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
  <TD style="PADDING-BOTTOM: 10px; PADDING-TOP: 10px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px">
  <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
  <TD class=fullWidth style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px">
  <TABLE style="FONT-FAMILY: Arial, Helvetica, sans-serif" cellSpacing=0 cellPadding=0 width=560 border=0>
  <TBODY>
  <TR>
  <TD style="PADDING-BOTTOM: 20px; PADDING-TOP: 20px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px">
  <P style="FONT-SIZE: 12px; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 0px; PADDING-LEFT: 0px; LINE-HEIGHT: 12px; PADDING-RIGHT: 0px">Thanks again for shopping with TireBuyer! </P>
  <P style="FONT-SIZE: 12px; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 0px; PADDING-LEFT: 0px; LINE-HEIGHT: 12px; PADDING-RIGHT: 0px"><STRONG>The TireBuyer Team</STRONG></P></TD></TR></TBODY></TABLE></TD></TR>
  <TR>
  <TD class="fullWidth questions" style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px">
  <TABLE style="FONT-FAMILY: Arial, Helvetica, sans-serif" cellSpacing=0 cellPadding=0 width=560 border=0>
  <TBODY>
  <TR>
  <TD style="PADDING-BOTTOM: 10px; PADDING-TOP: 10px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px">
  <P style="FONT-SIZE: 12px; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 0px; PADDING-LEFT: 0px; LINE-HEIGHT: 12px; PADDING-RIGHT: 0px"><STRONG>Questions?</STRONG> </P>
  <TABLE style="FONT-FAMILY: Arial, Helvetica, sans-serif" cellSpacing=0 cellPadding=0 border=0>
  <TBODY>
  <TR>
  <TD style="BORDER-RIGHT: #1e4164 1px solid; PADDING-RIGHT: 10px">
  <P style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #455560; TEXT-ALIGN: left; LINE-HEIGHT: 12px"><A style="FONT-SIZE: 12px; COLOR: #007ad9; LINE-HEIGHT: 12px" href="mailto:TireSeller@atd-us.com">Contact us at TireSeller@atd-us.com</A> </P></TD>
  </TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>
  <TABLE id=footer cellSpacing=0 cellPadding=0 width=600 bgColor=#ffffff border=0>
  <TBODY>
  <TR>
  <TD style="PADDING-BOTTOM: 20px; PADDING-TOP: 20px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px">
  <TABLE cellSpacing=0 cellPadding=0 border=0>
  <TBODY>
  <TR>
  <TD>
  <P style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 0px; PADDING-LEFT: 0px; LINE-HEIGHT: 22px; PADDING-RIGHT: 0px">This email was sent to: ${this.CustomerEmail}<BR>This email was sent by: <A style="TEXT-DECORATION: underline; COLOR: #007ad9" href="https://www.atd-us.com/"><SPAN style="TEXT-DECORATION: underline; COLOR: #007ad9">ATD-US.com</SPAN></A> <BR>12200 Herbert Wayne Ct Huntersville, NC 28070 United States.</P></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>
  <DIV><BR>
  <TABLE>
  <TBODY>
  </TBODY></TABLE><BR><BR></DIV></BODY></HTML>

  `;
  }
  
  let _csrf = "Pv2GHuU5-D9AinedKnSCXev712hGg0ZGVB6M";
  let ODurl = 'http://127.0.0.1:3230/notificationemail'
      let fun = function(x){
                  $.ajax({
                          url: ODurl,
                          type: "POST",
                          dataType: 'json',
                          data: JSON.stringify(x),
                          contentType: 'application/json;charset=UTF-8',
                          success : function(result) {
                              // you can see the result from the console
                              // tab of the developer tools
                              console.log(result);
                          },
                          error: function(xhr, resp, text) {
                              console.log(xhr, resp, text);
                          }
                      })
            }

  
for (var index in orderList ) {  
      // for customers
      let customer = new EmailCampaign(orderList[index]);
      fun(customer);

  //     // copy to Dylan
  //     customer.CustomerEmail = 'dlindsey@tirebuyer.com';
  //     customer.subject = `Dylan: eBay Installer Delivery Confirmation for Ord# ${customer.OrderNumber}`;
  //     fun(customer);
  //     console.log('confirmation to Dylan',customer.CustomerEmail)

  // // copy to Steve
  //     customer.CustomerEmail = 'smiller@tirebuyer.com';
  //     customer.subject = `Steve: eBay Installer Delivery Confirmation for Ord# ${customer.OrderNumber}`;
  //     fun(customer);

  //     //copy to me
  //       customer.CustomerEmail = 'aabdi@tirebuyer.com';
  //       customer.subject = `Ayanle: eBay Installer Delivery Confirmation for Ord# ${customer.OrderNumber}`;
  //       fun(customer);
  }
  
});

