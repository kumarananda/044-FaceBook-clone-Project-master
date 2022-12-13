const emailHtml_old = (name, verify_link) => {

    console.log('test html');
    return(
        `<div style=" padding: 5px 20px; height: 300px; width: 100%;background-color: rgb(186, 233, 164); text-align: center;">
            <h3 style="color: rgb(226, 43, 211);">Hi ${name} Welcome to our clone site</h3>
            <h5 style="color: green;  ">Please verify your account for explore our site</h5>
            <span><a href="${verify_link}">Click</a> for verify or bellow</span>
            <span><a  href="${verify_link}">${verify_link}</a></span>
        </div>`

    )
}
const emailHtml_recoverPass = (name, verify_link) => {

    return(
        `<div style=" padding: 5px 20px; height: 300px; width: 100%;background-color: rgb(186, 233, 164); text-align: center;">
            <h3 style="color: rgb(226, 43, 211);">Hi ${name} if you want to recover your account password use bellow link.</h3>
            <span><a href="${verify_link}">Click</a> for recover password or bellow</span>
            <span><a  href="${verify_link}">${verify_link}</a></span>
        </div>`

    )
}

const emailHtml = (name, verify_link, code) => {


    return `
        <head>
            <style>
            .wrapper{
                background-color: rgb(138, 175, 81);
            }
            .header-tittle{
                font-size: 18px
            }
            </style>
        </head>
        <body style="padding:0;margin:0;">
        <div class="wrapper" style="width:100%;table-layout:fixed;padding-top:30px;padding-bottom:30px;">
            <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:600px;margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;">
            <!-- Header section -->
            <tr>
                <td height="16" style="padding:0;background-color: #fff;" class="header-section">
                <table width="100%" style="border-spacing:0;">
                    <tr>
                    <td class="two-collum" style="padding:0;text-align:left;">
                        <table width="100%" style="border-spacing:0;border-bottom: 1px solid #ddd;">
                        <tr style="display:flex; align-items: center;">
                            <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;">
                            <a href="http://localhost:3000/" style="text-decoration:none;">
                                <img style="border:0;" width="50px"  src="https://i.ibb.co/YQDGnfX/Facebook-logo.png" alt="Facebook-logo" >
                            </a>
                            </td>
                            <td class="colum2" style="padding:0;width:100%;max-width:400px;display:inline-block;">
                            <span style="color: #2377f2; display: block" class="header-tittle">Facebook Pro Account created</span>
                            <span style="color: #2377f2; margin-top: 10px">Confirm Your Account</span>
                            </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            <!-- body Section -->
            <tr>
                <td class="body-section" style="padding:0;background-color: #fff;">
                <table width="100%" style="border-spacing:0;padding: 0 10px;">
                    <tr>
                    <td class="recever-name" style="padding:0;">
                        <h3 style="color: rgb(35, 35, 35);">Hi ${name}</h3>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td class="body-section" style="padding:0;background-color: #fff;">
                <table width="100%" style="border-spacing:0;padding: 0 10px;">
                    <tr>
                    <td class="message-name" style="padding:0;">
                        <p style="color: rgb(35, 35, 35); margin: 0;">You recently Registered for Facebook Pro, To complete your registration, please  confirm your account or use code</p>
                    </td>
                    </tr>
                </table>

                </td>
            </tr>
            <tr>
                <td class="body-section" style="padding:0;background-color: #fff;">
                <table width="100%" style="border-spacing:0;padding: 30px 10px;">
                    <tr>
                    <td class="message-name" style="padding:0;">
                        <a href="${verify_link}" style="text-decoration:none;background-color:#2377f2;padding: 10px;color:#fff; border-radius: 4px;">Confirm Account</a>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td class="body-section" style="padding:0;background-color: #fff;">
                <table width="100%" style="border-spacing:0;padding: 0 10px;">
                    <tr>
                    <td class="message-name" style="padding:0;">
                        <p style="color: rgb(35, 35, 35); margin: 0;">You maybe asked for this confirmation code</p>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td class="body-section" style="padding:0;background-color: #fff;">
                <table width="100%" style="border-spacing:0;padding: 30px 10px;">
                    <tr>
                    <td class="message-name" style="padding:0;">
                        <div href="#" style="text-decoration:none; text-align:center;"> 
                            <span style="padding: 10px; background-color:#f1f2f4; color:rgb(7, 0, 0);border: none; outline: none; border-radius: 4px;  font-size: 20px; letter-spacing: 3px;">
                            FB-${code}</span>
                        </div>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            <tr>
                <td class="body-section" style="padding:0;background-color: #fff;">
                <table width="100%" style="border-spacing:0;padding: 0 10px;">
                    <tr>
                    <td class="message-name" style="padding:0;">
                        <p style="color: rgb(157, 157, 157); font-weight: 300; margin: 0;">Facebook Pro helps you communicate and stay in touch with all of your friends. once you're joined Facebook Pro. You will be able to share photoes, plan events and more.</p>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            <!-- body Section -->
            <!-- footer section -->
            <tr>
                <td class="body-section" style="padding:0;background-color: #fff;">
                <table width="100%" style="border-spacing:0;padding: 0 10px; border-top: 1px solid #ddd; margin-top: 40px;">
                    <tr>
                    <td class="recever-name" style="padding:0;">
                        <p style="color: rgb(35, 35, 35); font-size: 13px;">This message was sent to <span style="color:#2377f2;">exmple@mail.com</span> at your request</p>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
        </div>
        </body>
    `

}

module.exports = {
    emailHtml,
    emailHtml_recoverPass
}

