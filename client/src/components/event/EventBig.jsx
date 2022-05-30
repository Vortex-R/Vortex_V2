import React from "react";

function EventBig() {
  return (
    <section>
      <div className="w-100 pt-110 pb-280 position-relative">
        <div className="container">
          <div className="sec-title btm-icn mb-50 w-100 text-center">
            <div className="sec-title-inner d-inline-block">
              <span className="d-block thm-clr">Pricing Plans</span>
              <h2 className="mb-0">Biggest Festivals</h2>
              <i className=""></i>
            </div>
          </div>
          <div className="event-grid-wrap w-100">
            <div className="row res-caro">
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="event-grid-box mb-30 w-100">
                  <div className="event-grid-img w-100 overflow-hidden position-relative">
                    <img
                      className="img-fluid w-100"
                      src={require("../../assets/images/resources/event-img1-1.jpg")}
                      alt="Event Image 1"
                    />
                    <span className="position-absolute">
                      <a className="rounded-circle" href="" title="">
                        <i className="fas fa-heart"></i>
                      </a>
                    </span>
                    <a
                      className="thm-btn fill-btn"
                      href="/event-details"
                      title=""
                    >
                      Book Now<span></span>
                    </a>
                  </div>
                  <div className="event-grid-info w-100">
                    <h3 className="mb-0">
                      <a href="/event-details" title="">
                        Sziget Festival 2020
                      </a>
                    </h3>
                    <span className="event-date thm-clr d-block">
                      03/06/2020
                    </span>
                    <ul className="event-grid-meta mb-0 list-unstyled d-flex flex-wrap">
                      <li>
                        <i className="far fa-clock"></i>Time:{" "}
                        <strong>8:00pm</strong>
                      </li>
                      <li>
                        <i className="fas fa-tags"></i>From:{" "}
                        <strong>$12.00</strong>
                      </li>
                    </ul>
                    <span className="event-loc d-block">
                      <i className="fas fa-map-pin"></i>Saint-Cloud, Paris,
                      France
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="event-grid-box mb-30 w-100">
                  <div className="event-grid-img w-100 overflow-hidden position-relative">
                    <img
                      className="img-fluid w-100"
                      src={require("../../assets/images/resources/event-img1-2.jpg")}
                      alt="Event Image 2"
                    />
                    <span className="position-absolute">
                      <a className="rounded-circle" href="" title="">
                        <i className="fas fa-heart"></i>
                      </a>
                    </span>
                    <a
                      className="thm-btn fill-btn"
                      href="/event-details"
                      title=""
                    >
                      Book Now<span></span>
                    </a>
                  </div>
                  <div className="event-grid-info w-100">
                    <h3 className="mb-0">
                      <a href="/event-details" title="">
                        Crankworx World Tour
                      </a>
                    </h3>
                    <span className="event-date thm-clr d-block">
                      02/05/2020
                    </span>
                    <ul className="event-grid-meta mb-0 list-unstyled d-flex flex-wrap">
                      <li>
                        <i className="far fa-clock"></i>Time:{" "}
                        <strong>7:00pm</strong>
                      </li>
                      <li>
                        <i className="fas fa-tags"></i>From:{" "}
                        <strong>$15.00</strong>
                      </li>
                    </ul>
                    <span className="event-loc d-block">
                      <i className="fas fa-map-pin"></i>Saint-Cloud, Paris,
                      France
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="event-grid-box mb-30 w-100">
                  <div className="event-grid-img w-100 overflow-hidden position-relative">
                    <img
                      className="img-fluid w-100"
                      src={require("../../assets/images/resources/event-img1-3.jpg")}
                      alt="Event Image 3"
                    />
                    <span className="position-absolute">
                      <a className="rounded-circle" href="" title="">
                        <i className="fas fa-heart"></i>
                      </a>
                    </span>
                    <a
                      className="thm-btn fill-btn"
                      href="/event-details"
                      title=""
                    >
                      Book Now<span></span>
                    </a>
                  </div>
                  <div className="event-grid-info w-100">
                    <h3 className="mb-0">
                      <a href="/event-details" title="">
                        Mad Cool Festival 2020
                      </a>
                    </h3>
                    <span className="event-date thm-clr d-block">
                      05/08/2020
                    </span>
                    <ul className="event-grid-meta mb-0 list-unstyled d-flex flex-wrap">
                      <li>
                        <i className="far fa-clock"></i>Time:{" "}
                        <strong>6:00pm</strong>
                      </li>
                      <li>
                        <i className="fas fa-tags"></i>From:{" "}
                        <strong>$18.00</strong>
                      </li>
                    </ul>
                    <span className="event-loc d-block">
                      <i className="fas fa-map-pin"></i>Saint-Cloud, Paris,
                      France
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="view-all mt-40 text-center w-100">
            <a className="thm-btn fill-btn" href="/events" title="">
              View All Events <i className="flaticon-trajectory"></i>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventBig;
