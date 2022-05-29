import React from "react";

function Digital() {
  return (
    <section>
      <div className="w-100 pt-120 pb-120 position-relative">
        <div className="container">
          <div className="sec-title mb-70 w-100 text-center">
            <div className="sec-title-inner d-inline-block">
              <i className=""></i>
              <span className="d-block thm-clr">Overview</span>
              <h2 className="mb-0">Think Digital</h2>
            </div>
          </div>
          <div className="about-wrap w-100">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-6 order-lg-1">
                <div className="about-img w-100">
                  <div className="about-img-caro">
                    <div className="about-img-item">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/about-img11.jpg"
                        alt="About Image 1"
                        style={{ width: "540px", height: "364px" }}
                      />
                    </div>
                    <div className="about-img-item">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/about-img22.jpg"
                        alt="About Image 2"
                        style={{ width: "540px", height: "364px" }}
                      />
                    </div>
                    <div className="about-img-item">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/about-img33.jpg"
                        alt="About Image 3"
                        style={{ width: "540px", height: "364px" }}
                      />
                    </div>
                    <div className="about-img-item">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/about-img44.jpg"
                        alt="About Image 4"
                        style={{ width: "540px", height: "364px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="about-desc w-100">
                  <p className="mb-0">
                    Vortex_Reaction is a project that aims to bring together two
                    specific targets. The first target is the participants in
                    the events who cannot attend due to several constraints
                    mainly related to lack of money and time or even distance.{" "}
                    <br />
                    Vortex_Reaction will play the role of a broadcaster of
                    events organized with 360° cameras through its mobile
                    application, for the benefit of online participants who will
                    be immersed in the event thanks to their VR headsets.
                  </p>
                  <div className="about-info-wrap w-100">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr flaticon-tickets"></i>
                          <div className="about-info-inner">
                            {/* <span>Live Streaming Access </span> */}
                            <p className="mb-0">Live Streaming Access</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr far fa-calendar-alt"></i>
                          <div className="about-info-inner">
                            {/* <span>Opening Times</span> */}
                            <p className="mb-0">360° diffusion technology </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr flaticon-pin-1"></i>
                          <div className="about-info-inner">
                            {/* <span>149 Pulaski Court</span> */}
                            <p className="mb-0">Immersive ( VR box)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr flaticon-parking-square-signal"></i>
                          <div className="about-info-inner">
                            {/* <span>Your Parking:</span> */}
                            <p className="mb-0">New kind of experience !</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-12 order-md-1">
                <div className="btns-wrap mt-60 text-center w-100">
                  <a className="thm-btn mt-20 fill-btn" href="/about" title="">
                    what you should know<i className="flaticon-trajectory"></i>
                    <span></span>
                  </a>
                  <a
                    className="thm-btn mt-20 brd-btn"
                    href="https://www.facebook.com/Vortex.Reaction/"
                    title=""
                  >
                    View Community<i className="flaticon-trajectory"></i>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Digital;
