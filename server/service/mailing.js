import nodemailer from "nodemailer";
export const sendmail = async (user, qr) => {
  //TODO: make this function general/standard
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "mehdihrairi6@gmail.com",
      pass: "lol06061997mhlol",
    },
  });
  const mailOptions = {
    from: "mehdihrairi6@gmail.com",
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
