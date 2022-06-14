import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { contact } from "../features/auth/authSlice";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    mssages: "",
  });

  const { email, subject, messages } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const messageData = {
      email,
      subject,
      messages,
    };
    dispatch(contact(messageData));
    toast("The message has been sent successfully");
  };

  return (
    <section>
      <div className="w-100 pt-140 position-relative mb-36">
        <div className="container">
          <div className="contact-map-wrap mt-65 style2 w-100">
            <div className="sec-title mb-45 w-100 text-center">
              <div className="sec-title-inner pt-0 d-inline-block">
                <span className="d-block thm-clr">Connect With Us</span>
                <h2 className="mb-0">
                  If You Have Any Questions <br /> Please Contact Us
                </h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="contact-map w-100" id="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6388.520908509601!2d10.185055264281232!3d36.81227824291445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34640c80c0dd%3A0xf01b39a17160c6fb!2sCity%20of%20Culture!5e0!3m2!1sen!2stn!4v1655163835196!5m2!1sen!2stn"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="contact-form-wrap p-0 w-100">
                  <form
                    className="w-100"
                    // action="#"
                    // method="post"
                    // id="email-form"
                    onSubmit={onSubmit}
                  >
                    <div className="form-group w-100">
                      <div className="response w-100"></div>
                    </div>
                    <div className="row mrg20">
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <input
                          className="w-100 email"
                          type="email"
                          placeholder="Email Address"
                          required
                          name="email"
                          value={email}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <input
                          className="w-100 phone"
                          type="text"
                          placeholder="Subject"
                          required
                          name="subject"
                          value={subject}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <textarea
                          className="w-100 contact_message"
                          placeholder="Details"
                          required
                          name="messages"
                          value={messages}
                          onChange={onChange}
                        ></textarea>
                        <button
                          className="thm-btn fill-btn"
                          id="submit"
                          type="submit"
                        >
                          Start Discussion<span></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
