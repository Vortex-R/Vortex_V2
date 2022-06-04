import React from "react";

function OldFooter() {
  return (
    <footer>
      <div className="w-100 pt-120 blue-layer opc1 position-relative">
        <div
          className="fixed-bg back-blend-multiply bg-color4"
          style={{
            backgroundImage: `url("../assets/images/parallax2.jpg")`,
          }}
        ></div>
        <div className="container position-relative px-16 ">
          <div className="clrs-wrap d-flex position-absolute">
            <i className="bg-color6"></i>
            <i className="bg-color7"></i>
            <i className="bg-color8"></i>
            <i className="bg-color9"></i>
            <i className="bg-color10"></i>
            <i className="bg-color11"></i>
          </div>
          <div className="footer-wrap w-100 text-center">
            <div className="footer-inner d-inline-block">
              <div className="logo d-inline-block">
                <h1 className="mb-0">
                  <a href="/" title="">
                    <img
                      className="img-fluid"
                      src={require("../assets/images/logo2.png")}
                      alt="Logo"
                    />
                  </a>
                </h1>
              </div>
              <p className="mb-0">
                Vortex_Reaction will play the role of a broadcaster of events
                organized with 360° cameras through its mobile application
              </p>
              <ul className="bottom-links list-unstyled d-flex flex-wrap justify-content-center mb-0">
                <li>
                  <a href="event-details" title="">
                    Event Details
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/about" title="">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" title="">
                    Contact Us
                  </a>
                </li>
              </ul>
              <p className="mb-0">
                <a href="/" title="">
                  VORTEX
                </a>{" "}
                - Copyright 2022 reserved By{" "}
                <a href="" title="">
                  Vortex Reaction
                </a>
              </p>
            </div>
            <div className="footer-bottom d-flex flex-wrap justify-content-between w-100">
              <p className="mb-0">
                <i className="thm-clr flaticon-headset"></i>Call Us By Email:
                <strong>contact.vortex.reaction@gmail.com</strong>
              </p>
              <div className="social-links d-inline-flex">
                <a
                  className="facebook rounded-circle"
                  href="https://www.facebook.com/Vortex.Reaction/"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="twitter rounded-circle"
                  href="#"
                  title="Twitter"
                  // target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="pinterest rounded-circle"
                  href="#"
                  title="Pinterest"
                  // target="_blank"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a
                  className="instagram rounded-circle"
                  href="#"
                  title="Instagram"
                  // target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="youtube rounded-circle"
                  href="#"
                  title="Youtube"
                  // target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default OldFooter;
