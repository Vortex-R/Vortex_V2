import nodemailer from "nodemailer";
export const sendmail = async (mail) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mehdihrairi6@gmail.com",
      pass: "lol06061997mhlol",
    },
  });

  const mailOptions = {
    from: "mehdihrairi6@gmail.com",
    to: mail,
    subject: "Event Ticket",
    text: "Hello mehdi, welcome on board.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
