var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'accesscodenodemailer@gmail.com',
        pass: '1234QWERasdf'
    }
});

var sendMail = function (data) {
    var mailOptions = {
        from: data.email,
        to: 'ltdebelen@trends.com.ph',
        subject: data.subject,
        html: data.message
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = sendMail;