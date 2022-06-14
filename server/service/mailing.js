import nodemailer from "nodemailer";
export const sendmail = async (user, qr) => {
  //TODO: make this function general/standard
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vortexreaction@gmail.com",
      pass: "123456-Aa",
    },
  });
  const mailOptions = {
    from: "vortexreaction@gmail.com",
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
