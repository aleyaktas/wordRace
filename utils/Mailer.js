require("dotenv").config();
var nodemailer = require("nodemailer");

const mailSender = (email, username, message) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,

    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  var mailOptions = {
    from: "wordracewebsite@gmail.com",
    to: `${email}`,
    subject: "Forgot Password",
    text: `Hello ${username};\n\nYour code for reset password: ${message}\nPlease change your password.\n\nThank you for using WordRace!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = mailSender;
