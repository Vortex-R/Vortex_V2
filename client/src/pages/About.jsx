import React from "react";
import OldFooter from "../components/OldFooter";
import OldHeader from "../components/OldHeader";

function About() {
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
              <h1 className="mb-0">About Us</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" title="">
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
                      href="#"
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
                        <span className="d-block thm-clr">About us </span>
                        <h3 className="mb-0">Overview</h3>
                      </div>
                    </div>
                    <p className="mb-0">
                      Vortex_Reaction is a project that aims to bring together
                      two specific targets. The first target is the participants
                      in the events who cannot attend due to several constraints
                      mainly related to lack of money and time or even distance.
                    </p>
                    <p className="mb-0">
                      Vortex_Reaction will play the role of a broadcaster of
                      events organized with 360° cameras through its mobile
                      application, for the benefit of online participants who
                      will be immersed in the event thanks to their VR headsets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="facts-wrap mt-70 style2 text-center w-100">
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
            </div> */}
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
                        Free your mind! <br /> Login into the platform
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="how-work-box mb-30 text-center w-100">
                      <i className="bg-color3 position-absolute w-100"></i>
                      <span className="d-block">02</span>
                      <p className="mb-0">
                        Select your event! <br />
                        Based on multiple choice
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="how-work-box mb-30 text-center w-100">
                      <i className="bg-color3 position-absolute w-100"></i>
                      <span className="d-block">03</span>
                      <p className="mb-0">
                        Live it differently ! <br />
                        We recommend putting a vr headset
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
        <div className="w-100 pt-110 gray-layer opc9 position-relative">
          <div
            className="fixed-bg patern-bg"
            style={{ backgroundImage: "url(assets/images/patter-bg1.jpg)" }}
          ></div>
          <div className="container">
            <div className="sec-title btm-icn mb-60 w-100 text-center">
              <div className="sec-title-inner d-inline-block">
                <span className="d-block thm-clr">Pricing</span>
                <h2 className="mb-0">Our Plans</h2>
                <i className=""></i>
              </div>
            </div>
            <div className="packages-wrap w-100">
              <div className="row mrg60 res-caro  ">
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="package-box2 mb-40 position-relative h-4/5 w-100">
                    <div className="package-head2 w-100">
                      {/* <h5 className="mb-0">Basic'O</h5> */}
                      <span className="d-block">
                        <sup>B</sup>asic'O
                      </span>
                    </div>
                    <div className="package-body2 w-100">
                      <ul className="list-unstyled mb-0 w-100">
                        <li>Live Streaming Access</li>
                        <li>Profile</li>
                        <li>Mini Communities</li>
                      </ul>
                      {/* <a
                        className="thm-btn lft-icon fill-btn "
                        href=""
                        title=""
                      >
                        <i className="flaticon-coupon"></i>Buy Ticket
                        <span></span>
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="package-box2 mb-40 position-relative h-4/5 w-100">
                    <div className="package-head2 w-100">
                      {/* <h5 className="mb-0">Ultumi'O</h5> */}
                      <span className="d-block">
                        <sup>U</sup>ltumi'O
                      </span>
                    </div>
                    <div className="package-body2 w-100">
                      <ul className="list-unstyled mb-0 w-100">
                        <li>Basic'O</li>
                        <li>Avatar & Customization</li>
                        <li>Virtual Goods Market</li>
                        <li>Photography</li>
                        <li>Vocal Chat</li>
                        <li>Pictures </li>
                        <li>Private Rooms </li>
                        <li>Promotion Codes </li>
                        <li>Event autographs </li>
                        <li>Relive the XP </li>
                      </ul>
                      {/* <a
                        className="thm-btn lft-icon brd-btn mb-0"
                        href=""
                        title=""
                      >
                        <i className="flaticon-coupon"></i>Buy Ticket
                        <span></span>
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-4">
                  <div className="package-box2 mb-40 position-relative h-4/5 w-100">
                    <div className="package-head2 w-100">
                      {/* <h5 className="mb-0">Partner's plan</h5> */}
                      <span className="d-block">
                        <sup>P</sup>artner's plan
                      </span>
                    </div>
                    <div className="package-body2 w-100">
                      <ul className="list-unstyled mb-0 w-100">
                        <li>Ticketing System</li>
                        <li>Planification Templates</li>
                        <li>Data Analytics</li>
                        <li>Promotion</li>
                        <li>Tech Support</li>
                        <li>
                          Pilotage de la stratégie : Suivi en temps réel de
                          l'ensemble de données
                        </li>
                        <li>
                          CRM événementiel : Segmentation des invités et
                          campagnes ciblées
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OldFooter />
    </>
  );
}

export default About;
