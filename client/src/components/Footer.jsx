import React from "react";

function Footer() {
  return (
    <footer>
      <div className="w-100 pt-120 blue-layer opc1 position-relative">
        <div
          className="fixed-bg back-blend-multiply bg-color4"
          style={{
            backgroundImage: `url("../assets/images/parallax2.jpg")`,
          }}
        ></div>
        <div className="container position-relative">
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
                  <a href="index.html" title="">
                    <img
                      className="img-fluid"
                      src={require("../assets/images/logo2.png")}
                      alt="Logo"
                    />
                  </a>
                </h1>
              </div>
              <p className="mb-0">
                Lorem ipsum dolor sit con dctum Loriem facili id tellus Loreor
                sit a conseetur Sed li conectetureget orci m Lorem facili id
                tellu Loriem Ipsom ilm facilisis.......
              </p>
              <ul className="bottom-links list-unstyled d-flex flex-wrap justify-content-center mb-0">
                <li>
                  <a href="" title="">
                    Corporate Form
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    Event Booking Form
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    Faq's
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    Contact Us
                  </a>
                </li>
              </ul>
              <p className="mb-0">
                <a href="index.html" title="">
                  Aconte
                </a>{" "}
                - Copyright 2020. Design By{" "}
                <a href="" title="">
                  cwsthemes
                </a>
              </p>
            </div>
            <div className="footer-bottom d-flex flex-wrap justify-content-between w-100">
              <p className="mb-0">
                <i className="thm-clr flaticon-headset"></i>Call Us Today:
                <strong>12345 678091</strong>
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

export default Footer;
