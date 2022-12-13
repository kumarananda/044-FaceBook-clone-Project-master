const axios = require('axios')


// // for bulksmsbd.net SMS service // bulksmsbd balance will expire on 28-may, 2023
const sendSms_BD = async (number_to, message ) => {
    const apikey = process.env.BULK_SMS_API_KEY;
    const approvedSenderID = process.env.BULK_SMS_SENDER_ID ;

    try{

        await axios.post(`https://bulksmsbd.net/api/smsapi?api_key=${apikey}&type=text&number=${number_to}&senderid=${approvedSenderID}&message=${message}`)
    }catch(error){
        console.log(error);
    }
}
module.exports = {
    sendSms_BD 
}







// import Vonage from '@vonage/server-sdk';
// import axios from 'axios';

// // dependencies >>    "@vonage/server-sdk": "^2.11.2",


// // for bulksmsbd.net SMS service
// export const sendSms_B = async (number_to, message ) => {
//     const apikey = process.env.BULK_SMS_API_KEY;
//     const approvedSenderID = "8809612443880";

//     try{
//         // console.log('sms test');
//         // console.log('sms test');

//         await axios.post(`https://bulksmsbd.net/api/smsapi?api_key=${apikey}&type=text&number=${number_to}&senderid=${approvedSenderID}&message=${message}`)
//         // console.log('sms test');
//     }catch(error){
//         console.log(error);
//     }
// }








// // for Vonage SMS service
// const vonage = new Vonage({
//   apiKey: "0dc01058",
//   apiSecret: process.env.VONAGE_API_Secret
// })


// // when we use paid plan from vonage than we use prams on "sendSms = (from, to, text)"
// export const sendSms_V = () => {
//     const from = "Vonage APIs"
//     const to = "8801647544959"
//     const text = 'Instagram clone project testing'

//     vonage.message.sendSms(from, to, text, (err, responseData) => {
//         if (err) {
//             console.log(err);
//         } else {
//             if(responseData.messages[0]['status'] === "0") {
//                 console.log("Message sent successfully.");
//             } else {
//                 console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//             }
//         }
//     })
// }