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
    subject:
      "Your tickets for “VR_backstage_FIH56, Orchestre National de Barbès (ONB)”",
    text: "Mr/Mrs, " + user.name,
    html:
      'Here’s your virtual ticket !</br> <h1>VR_backstage_FIH56, Orchestre National de Barbès (ONB)</h1> <img src="' +
      qr +
      '"> </br> 1 x ticket </br>Total order : Free </br><h3>sunday, july 31, 2022 at 19:00 (time: Tunisia) </h3> </br>you will receive the redirection link 1 hour before the event starts. </br>Enjoy watching :).</br>View event details: </br> https://vr-event.herokuapp.com/event-details',
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
