const nodemailer = require('nodemailer')

const composemail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Abasskola10@gmail.com',
        pass: 'ujyq ihsx kwgw cidf'
    }
})

function sendmail(params) {
    composemail.sendMail({
        from: 'Abasskola10@gmail.com',
        to: 'Abasskola10@yahoo.com',
        subject: 'Email Verification',
        text: "Hey Abass< verify your email",
         
    })
    .then((result=>{
        console.log(result);
    }))
    .catch(err=>{
        console.log('There is an error ');
    })
}
sendmail()