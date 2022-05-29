import React from "react";
import OldFooter from "../components/OldFooter";
import OldHeader from "../components/OldHeader";

function Contact() {
  return (
    <>
      <OldHeader />
      <section>
        <div className="w-100 pt-180 pb-180 page-title-wrap text-center black-layer opc5 position-relative">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(assets/images/parallax8.jpg)" }}
          ></div>
          <div className="container">
            <div className="page-title-inner d-inline-block">
              <h1 className="mb-0">Contact Us</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" title="">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-140 position-relative mb-36">
          <div className="container">
            {/* <div className="contact-info-wrap text-center w-100">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="contact-info-box mb-40 w-100">
                    <i className="thm-clr rounded-circle fas fa-map-marker-alt"></i>
                    <h4 className="mb-0">Location</h4>
                    <p className="mb-0">
                      Grand Conference Hall - 881 <br /> 7th Ave New York, NY
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="contact-info-box mb-40 w-100">
                    <i className="thm-clr rounded-circle flaticon-people"></i>
                    <h4 className="mb-0">Call Now</h4>
                    <p className="mb-0">
                      <span className="d-block">Phone: 123 46 778</span>
                      <span className="d-block">Office: 123 456 789</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="contact-info-box mb-40 w-100">
                    <i className="thm-clr rounded-circle fas fa-envelope-open"></i>
                    <h4 className="mb-0">Mail Info</h4>
                    <p className="mb-0">
                      <a href="" title="">
                        username@domain.com
                      </a>{" "}
                      <br />{" "}
                      <a href="" title="">
                        officenameemail@domain.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
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
                      action="#"
                      method="post"
                      id="email-form"
                    >
                      <div className="form-group w-100">
                        <div className="response w-100"></div>
                      </div>
                      <div className="row mrg20">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="w-100 fname"
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <input
                            className="w-100 lname"
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <input
                            className="w-100 email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <input
                            className="w-100 phone"
                            type="tel"
                            name="phone"
                            placeholder="Phone No"
                            required
                          />
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                          <textarea
                            className="w-100 contact_message"
                            name="contact_message"
                            placeholder="Event Details"
                            required
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
      {/* <section>
        <div className="w-100 pt-100 pb-100 position-relative">
          <div className="container">
            <div className="sponsors-wrap w-100">
              <div className="sponsor-caro">
                <div className="sr-box text-center w-100">
                  <a href="" title="">
                    <img
                      className="img-fluid d-inline-block"
                      src="assets/images/resources/sponsor-img1-1.png"
                      alt="Sponsor Image 1"
                    />
                  </a>
                </div>
                <div className="sr-box text-center w-100">
                  <a href="" title="">
                    <img
                      className="img-fluid d-inline-block"
                      src="assets/images/resources/sponsor-img1-2.png"
                      alt="Sponsor Image 2"
                    />
                  </a>
                </div>
                <div className="sr-box text-center w-100">
                  <a href="" title="">
                    <img
                      className="img-fluid d-inline-block"
                      src="assets/images/resources/sponsor-img1-3.png"
                      alt="Sponsor Image 3"
                    />
                  </a>
                </div>
                <div className="sr-box text-center w-100">
                  <a href="" title="">
                    <img
                      className="img-fluid d-inline-block"
                      src="assets/images/resources/sponsor-img1-4.png"
                      alt="Sponsor Image 4"
                    />
                  </a>
                </div>
                <div className="sr-box text-center w-100">
                  <a href="" title="">
                    <img
                      className="img-fluid d-inline-block"
                      src="assets/images/resources/sponsor-img1-5.png"
                      alt="Sponsor Image 5"
                    />
                  </a>
                </div>
                <div className="sr-box text-center w-100">
                  <a href="" title="">
                    <img
                      className="img-fluid d-inline-block"
                      src="assets/images/resources/sponsor-img1-6.png"
                      alt="Sponsor Image 6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <OldFooter />
    </>
  );
}

export default Contact;
