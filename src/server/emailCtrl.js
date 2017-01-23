//put everything necessary to send emails in this file

var nodemailer = require('nodemailer');

const user = 'william.galebach';
const password = 'gglhfddd';
const sender = 'TUFF Contact Request';

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: password
    }
};

var transport = nodemailer.createTransport(smtpConfig);

const emailCtrl = {};

emailCtrl.contactUs = function(contactInfo) {
    var mailOptions = {
        from: sender,
        to: 'william.galebach@gmail.com',
        subject: 'Uganda Future Fund contact request', // Subject line
        text: `${contactInfo.Name} at ${contactInfo.Email} submitted a contact request:
        
        Subject: ${contactInfo.Subject}

        Message: ${contactInfo.Comment}`
    };
    transport.sendMail(mailOptions, function(error, info) {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}

module.exports = emailCtrl;

