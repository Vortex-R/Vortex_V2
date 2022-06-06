import React from "react";

function VrExperience() {
  return (
    <section>
      <div className="w-100 position-relative">
        <img
          className="img-fluid shp1 right rotate-anim revs position-absolute"
          src="assets/images/shp1.png"
          alt="Shap 1"
        />
        <img
          className="img-fluid shp2 right rotate-anim position-absolute"
          src="assets/images/shp2.png"
          alt="Shap 2"
        />
        <img
          className="img-fluid shp3 right rotate-anim revs position-absolute"
          src="assets/images/shp3.png"
          alt="Shap 3"
        />
        <div className="reason-wrap w-100">
          <div className="row mrg align-items-center">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="reason-img w-100">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="reason-img1">
                    <img
                      className="img-fluid w-100"
                      src="assets/images/resources/reason-img111.jpg"
                      alt="Reason Image 1"
                      style={{ width: "945px", height: "982px" }}
                    />
                  </div>
                  <div className="tab-pane fade" id="reason-img2">
                    <img
                      className="img-fluid w-100"
                      src="assets/images/resources/reason-img112.jpg"
                      alt="Reason Image 2"
                      style={{ width: "945px", height: "982px" }}
                    />
                  </div>
                  <div className="tab-pane fade" id="reason-img3">
                    <img
                      className="img-fluid w-100"
                      src="assets/images/resources/reason-img113.jpg"
                      alt="Reason Image 3"
                      style={{ width: "945px", height: "982px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="reason-desc w-100">
                <div className="reason-desc-inner">
                  <div className="sec-title mb-25 w-100">
                    <div className="sec-title-inner pt-0 d-inline-block">
                      <span className="d-block thm-clr">Reasons To Attend</span>
                      <h3 className="mb-0">
                        Why You Should <br /> Attend
                      </h3>
                    </div>
                  </div>
                  <p className="mb-0">
                    The story of Vortex_Reaction "V_R" started through the
                    integration of virtual reality in the world of events.
                  </p>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#reason-img1"
                      >
                        <i className="far fa-calendar-check"></i>New People
                        <span className="d-block">
                          you will be connected to other people through vocal
                          channels
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#reason-img2"
                      >
                        <i className="flaticon-listen"></i>View angle 
                        <span className="d-block">
                          from now on you will decide your own angle of vision
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#reason-img3"
                      >
                        <i className="flaticon-ice-cream"></i>Have Fun
                        <span className="d-block">
                          by attending the pre event Virtual Reality experiences
                        </span>
                      </a>
                    </li>
                  </ul>
                  <a href="/contact" title="">
                    get in touch with us <i className="flaticon-trajectory"></i>
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

export default VrExperience;
