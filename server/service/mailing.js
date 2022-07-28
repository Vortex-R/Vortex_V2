import nodemailer from "nodemailer";
export const sendmail = async (user, qr) => {
  //TODO: make this function general/standard
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    service: "gmail",
    secure: true, // TLS requires secureConnection to be false
    port: 2525, // port for secure SMTP

    auth: {
      user: "contact.vortex.reaction@gmail.com",
      pass: "pgflbwldqlplnkur",
    },
  });
  const mailOptions = {
    from: "contact.vortex.reaction@gmail.com",

    to: user.email,
    attachDataUrls: true,
    subject: "Event Ticket",
    text: "Hello, " + user.name,
    html: 'This is your QRCode, Have fun!</br> <img src="' + qr + '">',
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
