import React from "react";

function About() {
  return (
    <>
      <section>
        <div className="w-100 pt-180 pb-180 page-title-wrap text-center black-layer opc5 position-relative">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(assets/images/parallax8.jpg)" }}
          ></div>
          <div className="container">
            <div className="page-title-inner d-inline-block">
              <h1 className="mb-0">About Us</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" title="">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-140 pb-120 position-relative">
          <div className="container">
            <div className="about-wrap2 w-100">
              <div className="row align-items-center">
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <div className="about-img style2">
                    <a
                      className="d-inline-block position-absolute play-btn"
                      data-fancybox
                      href="https://player.vimeo.com/video/130661238"
                      title="Video"
                    >
                      <svg
                        version="1.1"
                        className="play"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        height="10rem"
                        width="10rem"
                        viewBox="0 0 100 100"
                        enable-background="new 0 0 100 100"
                        xmlSpace="preserve"
                      >
                        <path
                          className="stroke-dotted"
                          fill="none"
                          stroke="#fff"
                          d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
                        ></path>
                        <path
                          className="icon"
                          fill="#fff"
                          d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                        ></path>
                      </svg>
                    </a>
                    <img
                      className="img-fluid w-100"
                      src="assets/images/resources/about-img5.jpg"
                      alt="About Image 5"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <div className="about-desc3 w-100">
                    <div className="sec-title mb-25 w-100">
                      <div className="sec-title-inner pt-0 d-inline-block">
                        <span className="d-block thm-clr">About The Event</span>
                        <h3 className="mb-0">
                          Welcome To Event <br /> Conference
                        </h3>
                      </div>
                    </div>
                    <p className="mb-0">
                      Nunc commodo tellus diam, sed molestie quam ferme Sed
                      suscipit erat egestas ante sollicitudin, quis uiltristi
                      ulis placerat nequ leo tristique egestas ante sollicitudi
                      suscipit erat egestas ante sollicitudin, qis.
                    </p>
                    <p className="mb-0">
                      Nunc commodo tellus diam, sed molestie quam ferme Sed
                      suscipit erat egestas ante sollicitudin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="facts-wrap mt-70 style2 text-center w-100">
              <div className="row mrg">
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="fact-box mt-30 w-100">
                    <h3 className="mb-0">
                      <span className="counter">260</span>
                    </h3>
                    <span className="d-block">Organize Events</span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="fact-box mt-30 w-100">
                    <h3 className="mb-0">
                      <span className="counter">135</span>
                    </h3>
                    <span className="d-block">Event Speakers</span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="fact-box mt-30 w-100">
                    <h3 className="mb-0">
                      <span className="counter">25</span>
                    </h3>
                    <span className="d-block">New Workshops</span>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="fact-box mt-30 w-100">
                    <h3 className="mb-0">
                      <span className="counter">210</span>
                    </h3>
                    <span className="d-block">Success Stories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-110 pb-90 black-layer opc4 position-relative">
          <div
            className="fixed-bg"
            style={{
              backgroundImage: `url("../assets/images/parallax5.jpg")`,
            }}
          ></div>
          <div className="container">
            <div className="how-works text-center w-100">
              <h2 className="mb-0">How It Works</h2>
              <div className="how-works-inner w-100">
                <div className="row res-caro">
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="how-work-box mb-30 text-center w-100">
                      <i className="bg-color3 position-absolute w-100"></i>
                      <span className="d-block">01</span>
                      <p className="mb-0">
                        Contact us to start a conversation about your event or
                        idea
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="how-work-box mb-30 text-center w-100">
                      <i className="bg-color3 position-absolute w-100"></i>
                      <span className="d-block">02</span>
                      <p className="mb-0">
                        Contact us to start a conversation about your event or
                        idea
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="how-work-box mb-30 text-center w-100">
                      <i className="bg-color3 position-absolute w-100"></i>
                      <span className="d-block">03</span>
                      <p className="mb-0">
                        Contact us to start a conversation about your event or
                        idea
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-110 pb-80 gray-layer opc9 position-relative">
          <div
            className="fixed-bg patern-bg"
            style={{ backgroundImage: "url(assets/images/patter-bg1.jpg)" }}
          ></div>
          <div className="container">
            <div className="sec-title btm-icn mb-60 w-100 text-center">
              <div className="sec-title-inner d-inline-block">
                <span className="d-block thm-clr">Pricing Plans</span>
                <h2 className="mb-0">Event Tickets</h2>
                <i className=""></i>
              </div>
            </div>
            <div className="packages-wrap w-100">
              <div className="row mrg60 res-caro">
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="package-box2 mb-40 position-relative w-100">
                    <div className="package-head2 w-100">
                      <h5 className="mb-0">Business Pack</h5>
                      <span className="d-block">
                        <sup>$</sup>130
                      </span>
                    </div>
                    <div className="package-body2 w-100">
                      <ul className="list-unstyled mb-0 w-100">
                        <li>Consectetur adipisicing</li>
                        <li>Event Organization</li>
                        <li>24/7 Customer Support</li>
                        <li>Travel Booking</li>
                        <li>Food & Music</li>
                      </ul>
                      <a className="thm-btn lft-icon fill-btn" href="" title="">
                        <i className="flaticon-coupon"></i>Buy Ticket
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="package-box2 mb-40 position-relative w-100">
                    <div className="package-head2 w-100">
                      <h5 className="mb-0">Standard Pack</h5>
                      <span className="d-block">
                        <sup>$</sup>250
                      </span>
                    </div>
                    <div className="package-body2 w-100">
                      <ul className="list-unstyled mb-0 w-100">
                        <li>Consectetur adipisicing</li>
                        <li>Event Organization</li>
                        <li>24/7 Customer Support</li>
                        <li>Travel Booking</li>
                        <li>Food & Music</li>
                      </ul>
                      <a className="thm-btn lft-icon brd-btn" href="" title="">
                        <i className="flaticon-coupon"></i>Buy Ticket
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="package-box2 mb-40 position-relative w-100">
                    <div className="package-head2 w-100">
                      <h5 className="mb-0">Ultimate Pack</h5>
                      <span className="d-block">
                        <sup>$</sup>390
                      </span>
                    </div>
                    <div className="package-body2 w-100">
                      <ul className="list-unstyled mb-0 w-100">
                        <li>Consectetur adipisicing</li>
                        <li>Event Organization</li>
                        <li>24/7 Customer Support</li>
                        <li>Travel Booking</li>
                        <li>Food & Music</li>
                      </ul>
                      <a className="thm-btn lft-icon fill-btn" href="" title="">
                        <i className="flaticon-coupon"></i>Buy Ticket
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-120 pb-90 position-relative">
          <div className="container">
            <div className="sponsors-wrap w-100">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="sec-title mb-40 w-100">
                    <div className="sec-title-inner pt-0 d-inline-block">
                      <span className="d-block thm-clr">Sponsored By</span>
                      <h3 className="mb-0">
                        Amazing Partners <br /> & Sponsors
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="sr-box text-center mb-30 w-100">
                    <a href="" title="">
                      <img
                        className="img-fluid"
                        src="assets/images/resources/sponsor-img1-1.png"
                        alt="Sponsor Image 1"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="sr-box text-center mb-30 w-100">
                    <a href="" title="">
                      <img
                        className="img-fluid"
                        src="assets/images/resources/sponsor-img1-2.png"
                        alt="Sponsor Image 2"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="sr-box text-center mb-30 w-100">
                    <a href="" title="">
                      <img
                        className="img-fluid"
                        src="assets/images/resources/sponsor-img1-3.png"
                        alt="Sponsor Image 3"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="sr-box text-center mb-30 w-100">
                    <a href="" title="">
                      <img
                        className="img-fluid"
                        src="assets/images/resources/sponsor-img1-4.png"
                        alt="Sponsor Image 4"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="sr-box text-center mb-30 w-100">
                    <a href="" title="">
                      <img
                        className="img-fluid"
                        src="assets/images/resources/sponsor-img1-5.png"
                        alt="Sponsor Image 5"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-lg-3">
                  <div className="sr-box text-center mb-30 w-100">
                    <a href="" title="">
                      <img
                        className="img-fluid"
                        src="assets/images/resources/sponsor-img1-6.png"
                        alt="Sponsor Image 6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pb-120 position-relative">
          <div className="sec-title btm-icn mb-50 w-100 text-center">
            <div className="sec-title-inner d-inline-block">
              <span className="d-block thm-clr">Client's Testimonials</span>
              <h2 className="mb-0">What People Say?</h2>
              <i className=""></i>
            </div>
          </div>
          <div className="testi-wrap2 w-100">
            <div className="testi-caro2">
              <div className="testi-box text-center">
                <div className="testi-box-inr w-100">
                  <span className="d-inline-block">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <p className="mb-0">
                    ClassName aptent taciti sociosqu ad litora torquent per
                    conub ia nostra, per inceptos hime naeos. Sed vel arcu vitae
                    ex tincidunt dit a id lorem.
                  </p>
                  <i className="thm-clr rounded-circle flaticon-right-quote"></i>
                </div>
                <div className="testi-box-info w-100">
                  <h4 className="mb-0">Willimes Clark</h4>
                  <span className="d-block">Project Manager</span>
                </div>
              </div>
              <div className="testi-box text-center">
                <div className="testi-box-inr w-100">
                  <span className="d-inline-block">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <p className="mb-0">
                    ClassName aptent taciti sociosqu ad litora torquent per
                    conub ia nostra, per inceptos hime naeos. Sed vel arcu vitae
                    ex tincidunt dit a id lorem.
                  </p>
                  <i className="thm-clr rounded-circle flaticon-right-quote"></i>
                </div>
                <div className="testi-box-info w-100">
                  <h4 className="mb-0">Jackki James</h4>
                  <span className="d-block">Project Manager</span>
                </div>
              </div>
              <div className="testi-box text-center">
                <div className="testi-box-inr w-100">
                  <span className="d-inline-block">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <p className="mb-0">
                    ClassName aptent taciti sociosqu ad litora torquent per
                    conub ia nostra, per inceptos hime naeos. Sed vel arcu vitae
                    ex tincidunt dit a id lorem.
                  </p>
                  <i className="thm-clr rounded-circle flaticon-right-quote"></i>
                </div>
                <div className="testi-box-info w-100">
                  <h4 className="mb-0">Sharma Shaks</h4>
                  <span className="d-block">Project Manager</span>
                </div>
              </div>
              <div className="testi-box text-center">
                <div className="testi-box-inr w-100">
                  <span className="d-inline-block">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <p className="mb-0">
                    ClassName aptent taciti sociosqu ad litora torquent per
                    conub ia nostra, per inceptos hime naeos. Sed vel arcu vitae
                    ex tincidunt dit a id lorem.
                  </p>
                  <i className="thm-clr rounded-circle flaticon-right-quote"></i>
                </div>
                <div className="testi-box-info w-100">
                  <h4 className="mb-0">Yomina Takki</h4>
                  <span className="d-block">Project Manager</span>
                </div>
              </div>
              <div className="testi-box text-center">
                <div className="testi-box-inr w-100">
                  <span className="d-inline-block">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <p className="mb-0">
                    ClassName aptent taciti sociosqu ad litora torquent per
                    conub ia nostra, per inceptos hime naeos. Sed vel arcu vitae
                    ex tincidunt dit a id lorem.
                  </p>
                  <i className="thm-clr rounded-circle flaticon-right-quote"></i>
                </div>
                <div className="testi-box-info w-100">
                  <h4 className="mb-0">Millina Tikason</h4>
                  <span className="d-block">Project Manager</span>
                </div>
              </div>
              <div className="testi-box text-center">
                <div className="testi-box-inr w-100">
                  <span className="d-inline-block">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                  <p className="mb-0">
                    ClassName aptent taciti sociosqu ad litora torquent per
                    conub ia nostra, per inceptos hime naeos. Sed vel arcu vitae
                    ex tincidunt dit a id lorem.
                  </p>
                  <i className="thm-clr rounded-circle flaticon-right-quote"></i>
                </div>
                <div className="testi-box-info w-100">
                  <h4 className="mb-0">Clark Smith</h4>
                  <span className="d-block">Project Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
