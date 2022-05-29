import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { contact } from "../features/auth/authSlice";

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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.1939479978228!2d-74.52790365348511!3d40.44884412026627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c3be536bc55f%3A0xb5205b8c3ee9a93e!2sWhitehall%20Gardens!5e0!3m2!1sen!2s!4v1590228785408!5m2!1sen!2s"></iframe>
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
