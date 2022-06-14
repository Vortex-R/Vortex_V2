import nodemailer from "nodemailer";
export const sendmail = async (user, qr) => {
  //TODO: make this function general/standard
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "malekhaddar8@gmail.com",
      pass: "hanover96",
    },
  });
  const mailOptions = {
    from: "malekhaddar8@gmail.com",
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
