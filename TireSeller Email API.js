$(document).ready(function(){

  let orderList = [{
      "Dealer": "Brazzeal Tire",
      "accountId": 113939,
      "locationId": 20201,
      "CDMemail": "aabdi@tirebuyer.com",
      "DOSemail": "aabdi@tirebuyer.com",
      "DealerEmail": "",
      "POCname": "",
      "": "",
      "__1": "",
      "__2": "",
      "__3": "",
      "__4": "",
      "__5": "",
      "__6": ""
    },
    {
      "Dealer": "Butler Tire Service, Inc",
      "accountId": 111636,
      "locationId": 17055,
      "CDMemail": "aabdi@tirebuyer.com",
      "DOSemail": "aabdi@tirebuyer.com",
      "DealerEmail": "",
      "POCname": "",
      "": "",
      "__1": "",
      "__2": "",
      "__3": "",
      "__4": "",
      "__5": "",
      "__6": ""
    },
    {
      "Dealer": "Cartronix Plus, LLC",
      "accountId": 159434,
      "locationId": 78572,
      "CDMemail": "aabdi@tirebuyer.com",
      "DOSemail": "aabdi@tirebuyer.com",
      "DealerEmail": "",
      "POCname": "",
      "": "",
      "__1": "",
      "__2": "",
      "__3": "",
      "__4": "",
      "__5": "",
      "__6": ""
    },
    {
      "Dealer": "Crown City Tire",
      "accountId": 523753,
      "locationId": 1255122,
      "CDMemail": "aabdi@tirebuyer.com",
      "DOSemail": "aabdi@tirebuyer.com",
      "DealerEmail": "",
      "POCname": "",
      "": "",
      "__1": "",
      "__2": "",
      "__3": "",
      "__4": "",
      "__5": "",
      "__6": ""
    },
    {
      "Dealer": "Dave's Tire",
      "accountId": 305189,
      "locationId": 284058,
      "CDMemail": "aabdi@tirebuyer.com",
      "DOSemail": "aabdi@tirebuyer.com",
      "DealerEmail": "",
      "POCname": "",
      "": "",
      "__1": "",
      "__2": "",
      "__3": "",
      "__4": "",
      "__5": "",
      "__6": ""
    }
  ];
  function EmailCampaign(data){
      this._csrf = _csrf;
      this.Dealer = data.Dealer;
      this.accountId = data.accountId;
      this.locationId = data.locationId;
    this.DealerEmail = data.DealerEmail;
    this.POCname = data.POCname;
      this.DOSemail = data.DOSemail;
      this.CDMemail = data.CDMemail;
      this.subject = "TireSeller Update";
/*




*/
this.message = `
<HTML>

    <HEAD>
        <META content="text/html; charset=utf-8" http-equiv=Content-Type>
    </HEAD>

    <BODY style="PADDING-BOTTOM: 50px; PADDING-TOP: 50px; PADDING-LEFT: 0px; MARGIN: 0px; PADDING-RIGHT: 0px">
        <DIV>
            <TABLE align=center>
                <TBODY>
                    <TR>
                        <TD><B></B></TD>
                    </TR>
                </TBODY>
            </TABLE><BR><BR>
        </DIV>
        <TABLE id=wrapper style="FONT-FAMILY: Arial, Helvetica, sans-serif" cellSpacing=0 cellPadding=0 align=center
            border=0>
            <TBODY>
                <TR>
                    <TD id=header>
                        <TABLE cellSpacing=0 cellPadding=0 width="100%" bgColor=#ffffff border=0>
                            <TBODY>
                                <TR>
                                    <TD id=logo
                                        style="PADDING-BOTTOM: 5px; PADDING-TOP: 5px; PADDING-LEFT: 10px; PADDING-RIGHT: 20px">
                                        <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
                                            <TBODY>
                                                <TR>
                                                    <TD>
                                                        <IMG style="BORDER-TOP-STYLE: none; TEXT-DECORATION: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; OUTLINE-STYLE: none; BORDER-LEFT-STYLE: none; -MS-INTERPOLATION-MODE: bicubic"
                                                            border=0 alt=TireSeller
                                                            src="https://carstanza.com/images/TireSeller.png" width=345
                                                            height=51 align=left>

                                                    </TD>
                                                    <TD>
                                                        <TABLE style="FLOAT: right" cellSpacing=0 cellPadding=0
                                                            border=0>
                                                            <TBODY>
                                                                <TR>
                                                                    <TD>

                                                                        <SPAN style="FONT-FAMILY: Times, serif"></SPAN>
                                                                        </A></TD>
                                                                </TR>
                                                            </TBODY>
                                                        </TABLE>
                                                    </TD>
                                                </TR>
                                            </TBODY>
                                        </TABLE>
                                    </TD>
                                </TR>
                            </TBODY>
                        </TABLE>
                        <TABLE id=content cellSpacing=0 cellPadding=0 width=600 bgColor=#ffffff border=0>
                            <TBODY>

                                <!-- Hello section -->

                                <TR>
                                    <TD vAlign=top>
                                        <TABLE style="FONT-SIZE: 14px; PADDING-LEFT: 20px" cellSpacing=0 cellPadding=0
                                            width="100%" border=0>
                                            <TBODY>
                                                <TR>
                                                    <TD style="PADDING-RIGHT: 5px" vAlign=top></TD>
                                                    <TD style="FONT-SIZE: 16px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 20px"
                                                        vAlign=top>Hello ${this.POCname}, </TD>
                                                </TR>
                                                <TR>
                                                    <TD style="PADDING-RIGHT: 5px" vAlign=top></TD>
                                                    <TD style="FONT-SIZE: 16px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 10px"
                                                        vAlign=top>Do you want to know what I did this weekend? I have
                                                        created an automated email for generating and sending TireSeller
                                                        Code to our dealers. The code link below contains the actual
                                                        code for the dealer. With this email automation, I am also able
                                                        to cc the CDM and DOS as well.</TD>
                                                </TR>
                                                <TR>
                                                    <TD style="PADDING-RIGHT: 5px;padding-top: 20px;" vAlign=top></TD>
                                                    <TD style="FONT-SIZE: 16px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 10px"
                                                        vAlign = top > This is a custom email specific to: <br>
                                                        Business name: <strong>${this.Dealer}</strong> <br>
                                                        Account Nbr: ${this.accountId} <br>
                                                        Location Nbr: ${this.locationId}
                                                    </TD>
                                                </TR>
                                                <TR>
                                                    <TD style="PADDING-RIGHT: 5px;PADDING-TOP:25px;" vAlign=center></TD>
                                                    <TD style="FONT-SIZE: 16px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 10px"
                                                        vAlign=top>
                                                        <a href="https://carstanza.com/dealer-code/${this.Dealer}/${this.accountId}/${this.locationId}"
                                                            style="text-decoration: none; color: #FFF; background-color: #348eda; border: solid #348eda; border-width: 10px 20px; line-height: 2; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize;">See
                                                            TireSeller code here</a>
                                                    </TD>
                                                </TR>
                                                <TR>
                                                    <TD style="PADDING-RIGHT: 5px;PADDING-TOP:25px;" vAlign=center></TD>
                                                    <TD style="FONT-SIZE: 16px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #da8d34; PADDING-BOTTOM: 10px"
                                                        vAlign=top>
                                                        <a href="https://drive.google.com/file/d/1Tbsm2HmW5nPfh8SshNP6KhAME0O6Fjzi/view"
                                                            style="text-decoration: none; color: #FFF; background-color: #da8d34; border: solid #da8d34; border-width: 10px 20px; line-height: 2; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize;">See
                                                            Developer Document here</a>

                                                    </TD>
                                                </TR>

                                                <TR>
                                                    <TD style="PADDING-RIGHT: 5px;PADDING-TOP: 25px" vAlign=top></TD>
                                                    <TD style="FONT-SIZE: 16px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 30px"
                                                        vAlign=top> <strong>This is not the finished product.</strong> I
                                                        will add more enhancements to this email.</TD>
                                                </TR>

                                                <TR>
                                                    <TD style="PADDING-RIGHT: 5px;PADDING-TOP:25px;" vAlign=top></TD>
                                                    <TD style="FONT-SIZE: 16px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 10px"
                                                        vAlign=bottom> Kind regards,
                                                        <BR><BR>
                                                        Ayanle "Allen" Abdi <BR>
                                                        Technical Account Manager

                                                    </TD>
                                                </TR>

                                            </TBODY>
                                        </TABLE>
                                    </TD>
                                </TR>
                            </TBODY>
                        </TABLE>
                    </TD>
                </TR>
                <!-- End of Hello section -->

                <TR>
                    <TD style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px"
                        width="100%">
                    </TD>
                </TR>
                <TR>
                    <TD style="PADDING: 15px;" width="100%">
                        <TABLE width=600>
                            <TBODY>

                                <!-- What happens next -->
                                <TR>
                                    <TD vAlign=top>

                                        <TABLE style="FONT-SIZE: 14px; PADDING-LEFT: 20px" cellSpacing=0 cellPadding=0
                                            width="100%" border=0>
                                            <TBODY>
                                                <TR>
                                                    <TD style="PADDING-RIGHT: 10px" vAlign=top></TD>
                                                    <TD style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #1e4164; PADDING-BOTTOM: 10px"
                                                        vAlign=top></TD>
                                                </TR>
                                            </TBODY>
                                        </TABLE>
                                    </TD>
                                </TR>
                            </TBODY>
                        </TABLE>
                    </TD>
                </TR>
                <!-- End of What happens next -->

                <TR>
                    <TD style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px"
                        width="100%">
                        <TABLE style="PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 5px; PADDING-RIGHT: 20px"
                            cellSpacing=0 cellPadding=0 width=600 border=0>
                            <TBODY>
                                <TR>
                                    <TD style="VERTICAL-ALIGN: top">

                                        <TABLE id=footer cellSpacing=0 cellPadding=0 width=600 bgColor=#ffffff border=0>
                                            <TBODY>
                                                <TR>
                                                    <TD
                                                        style="PADDING-BOTTOM: 20px; PADDING-TOP: 20px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px">
                                                        <TABLE cellSpacing=0 cellPadding=0 border=0>
                                                            <TBODY>
                                                                <TR>
                                                                    <TD>
                                                                        <P
                                                                            style="FONT-SIZE: 12px; FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #455560; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 0px; PADDING-LEFT: 0px; LINE-HEIGHT: 22px; PADDING-RIGHT: 0px">
                                                                            This email was sent to:
                                                                            ${this.DealerEmail}<BR>This email was sent
                                                                            by: <A
                                                                                style="TEXT-DECORATION: underline; COLOR: #007ad9"
                                                                                href="https://www.atd-us.com/"><SPAN
                                                                                    style="TEXT-DECORATION: underline; COLOR: #007ad9">ATD-US.com</SPAN></A>
                                                                            <BR>12200 Herbert Wayne Ct Huntersville, NC
                                                                            28070 United States.</P>
                                                                    </TD>
                                                                </TR>
                                                            </TBODY>
                                                        </TABLE>
                                                    </TD>
                                                </TR>
                                            </TBODY>
                                        </TABLE>
                                    </TD>
                                </TR>
                            </TBODY>
                        </TABLE>
                        <DIV><BR>
                            <TABLE>
                                <TBODY>
                                </TBODY>
                            </TABLE><BR><BR>
                        </DIV>
    </BODY>

</HTML>

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
    customer.CustomerEmail = 'AABDI@tirebuyer.com';
    customer.POCname = "Mark";
    customer.subject = `Automated Email: ${customer.POCname}, this is the code for ${customer.Dealer}`;
    customer.POCname = "Mark";
    fun(customer);

  }
  
});

