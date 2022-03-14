import nodemailer from "nodemailer";
export const sendmail = async (user, qr) => {
  //TODO: make this function general/standard
  const transporter = nodemailer.createTransport({
    host: "smtp.live.com", // hostname
    secureConnection: false, // use SSL
    port: 587, // port for secure SMTP
    auth: {
      user: "vortex-reaction@outlook.fr",
      pass: "vortex@reaction",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
  const mailOptions = {
    from: "vortex-reaction@outlook.fr",
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
