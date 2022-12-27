
const nodemailer = require('nodemailer');


/**
 * send Activation Link
 */
const sendActivationLink = async (to, subject, text, html) => {

    try{

        let transport = nodemailer.createTransport({
            host: process.env.Mail_HOST,
            port : process.env.MAIL_PORT,
            auth: {
              user: process.env.MAIL_ID,
              pass: process.env.MAIL_APP_PASS
            }
        });
        
        await transport.sendMail({
            from    : `Facebook Pro <${process.env.MAIL_ID}`,
            to      : to,
            subject : subject,
            text    : text ,
            html    : html
        })

    }catch(error){
        console.log(error);
    }
}
/**
 * send Activation Link
 */
const sendResetPassLink = async (to, subject, text, html) => {

    try{
        
        let transport = nodemailer.createTransport({
            host: process.env.Mail_HOST,
            port : process.env.MAIL_PORT,
            auth: {
              user: process.env.MAIL_ID,
              pass: process.env.MAIL_APP_PASS
            }
        });
        
        await transport.sendMail({
            from    : `Facebook Pro <${process.env.MAIL_ID}`,
            to      : to,
            subject : subject,
            text    : text ,
            html    : html
        })

    }catch(error){
        console.log(error);
    }
}




module.exports = {
    sendActivationLink,
    sendResetPassLink,
}


