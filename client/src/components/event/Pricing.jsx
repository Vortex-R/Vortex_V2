import React from "react";

function Pricing() {
  return (
    <section>
      <div className="w-100 pt-100 pb-80 blue-layer opc7 position-relative">
        <div
          className="fixed-bg back-blend-multiply bg-color4"
          style={{
            backgroundImage: `url("../assets/images/parallax.jpg")`,
          }}
        ></div>
        <div className="container">
          <div className="sec-title btm-icn mb-50 w-100 text-center">
            <div className="sec-title-inner d-inline-block">
              <span className="d-block thm-clr">Pricing Plans</span>
              <h2 className="mb-0">Get Your Ticket</h2>
              <i className=""></i>
            </div>
          </div>
          <div className="packages-wrap w-100">
            <div className="row res-caro mrg60">
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="package-box text-center position-relative w-100">
                  <div className="package-head w-100">
                    <h5 className="mb-0">Student Pack</h5>
                    <span className="d-block">
                      <sup>$</sup>120
                    </span>
                    <i className="flaticon-show"></i>
                  </div>
                  <div className="package-body w-100">
                    <p className="mb-0">
                      Nunc commodo tellus diam, sed molestie quam Etiam finibus
                      Ilime iaculis placerat neque
                    </p>
                    <a className="thm-btn lft-icon fill-btn" href="" title="">
                      <i className="flaticon-coupon"></i>Buy Ticket
                      <span></span>
                    </a>
                    <span className="d-block">For 1 Person Ticket</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="package-box text-center position-relative w-100">
                  <div className="package-head w-100">
                    <h5 className="mb-0">Business Pack</h5>
                    <span className="d-block">
                      <sup>$</sup>250
                    </span>
                    <i className="flaticon-show"></i>
                  </div>
                  <div className="package-body w-100">
                    <p className="mb-0">
                      Nunc commodo tellus diam, sed molestie quam Etiam finibus
                      Ilime iaculis placerat neque
                    </p>
                    <a className="thm-btn lft-icon fill-btn" href="" title="">
                      <i className="flaticon-coupon"></i>Buy Ticket
                      <span></span>
                    </a>
                    <span className="d-block">For 5 Person Ticket</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-lg-4">
                <div className="package-box text-center position-relative w-100">
                  <div className="package-head w-100">
                    <h5 className="mb-0">Platinum Pack</h5>
                    <span className="d-block">
                      <sup>$</sup>390
                    </span>
                    <i className="flaticon-show"></i>
                  </div>
                  <div className="package-body w-100">
                    <p className="mb-0">
                      Nunc commodo tellus diam, sed molestie quam Etiam finibus
                      Ilime iaculis placerat neque
                    </p>
                    <a className="thm-btn lft-icon fill-btn" href="" title="">
                      <i className="flaticon-coupon"></i>Buy Ticket
                      <span></span>
                    </a>
                    <span className="d-block">For 10 Person Ticket</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
