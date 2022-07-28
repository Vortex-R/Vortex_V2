import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Background from "../../assets/images/resources/slide1.jpg";
import { getGoals, reset } from "../../features/goals/goalSlice";
import Register from "../auth/Register";
function EventItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate("/login");
    // }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  return (
    <>
      <section>
        <div className="w-100 position-relative ">
          <div className="feat-wrap position-relative w-100">
            <div className="feat-caro">
              {/* <div className="feat-item-wrap ">
                <div className="feat-item pb-240 d-flex flex-wrap align-items-end">
                  <div
                    className="feat-img position-absolute w-100"
                    style={{
                      backgroundImage: `url("../assets/images/resources/slide2.jpg")`,
                      // backgroundImage: `url(${Background})`,

                      // backgroundImage: `url("../assets/images/resources/slide1.jpg")`,
                      // backgroundImage: `url("../assets/images/resources/invitation_live1.jpg")`,
                    }}
                    // }}
                  ></div>
                  <div className="container">
                    <div className="row justify-content-between align-items-end">
                      <div className="col-md-12 col-sm-12 col-lg-5 order-lg-1 ">
                        {!user ? (
                          <a
                            className="register-btn thm-btn lft-icon brd-btn "
                            onClick={() => {
                              toast("Sign UP Please !");
                            }}
                          >
                            <i className="flaticon-coupon "></i>Buy Ticket
                            <span></span>
                          </a>
                        ) : (
                          <a
                            className="thm-btn lft-icon brd-btn"
                            href="/event-details"
                            title=""
                          >
                            <i className="flaticon-coupon "></i>Event Details
                            <span></span>
                          </a>
                        )}
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-7">
                        <div className="feat-cap w-100">
                          <i className="text-white">
                            Join Us <strong> Now</strong>
                          </i>
                          <h3 className=" mb-14 text-white items-center">
                            <a className="text-xl md:text-3xl">
                              {goals[0]?.name}
                            </a>
                          </h3>
                          <span className="d-block text-white">
                            <i className="fas fa-map-marker-alt"></i>
                            <strong>Location:</strong> {goals[0]?.location}
                          </span>
                          <ul className="countdown d-inline-flex mb-0 list-unstyled">
                            <li>
                              <span className="days"> </span>
                              <p className="days_ref mb-0">Days</p>
                            </li>
                            <li>
                              <span className="hours"> </span>
                              <p className="hours_ref mb-0">Hours</p>
                            </li>
                            <li>
                              <span className="minutes"> </span>
                              <p className="minutes_ref mb-0">Minutes</p>
                            </li>
                            <li>
                              <span className="seconds"> </span>
                              <p className="seconds_ref mb-0">Seconds</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="feat-item-wrap">
                <div className="feat-item pb-240 d-flex flex-wrap align-items-end">
                  <div
                    className="feat-img position-absolute w-100"
                    style={{
                      // backgroundImage: `url("../assets/images/resources/meta2.jpg")`,
                      // backgroundImage: `url(${Background})`,

                      backgroundImage: `url("../assets/images/resources/slide1.jpg")`,
                      // backgroundImage: `url("../assets/images/resources/invitation_live1.jpg")`,
                    }}
                    // }}
                  ></div>
                  <div className="container">
                    <div className="row justify-content-between align-items-end">
                      <div className="col-md-12 col-sm-12 col-lg-5 order-lg-1 ">
                        {!user ? (
                          <a
                            className="register-btn thm-btn lft-icon brd-btn "
                            onClick={() => {
                              toast("Sign UP Please !");
                            }}
                          >
                            <i className="flaticon-coupon "></i>Buy Ticket
                            <span></span>
                          </a>
                        ) : (
                          <a
                            className="thm-btn lft-icon brd-btn"
                            href="/event-details"
                            title=""
                          >
                            <i className="flaticon-coupon "></i>Event Details
                            <span></span>
                          </a>
                        )}
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-7">
                        <div className="feat-cap w-100">
                          <i className="text-white">
                            Join Us <strong> Now</strong>
                          </i>
                          <h3 className=" mb-14 text-white items-center">
                            <a className="text-xl md:text-3xl">
                              {goals[0]?.name}
                            </a>
                          </h3>
                          <span className="d-block text-white">
                            <i className="fas fa-map-marker-alt"></i>
                            <strong>Location:</strong> {goals[0]?.location}
                          </span>
                          <ul className="countdown d-inline-flex mb-0 list-unstyled">
                            <li>
                              <span className="days"> </span>
                              <p className="days_ref mb-0">Days</p>
                            </li>
                            <li>
                              <span className="hours"> </span>
                              <p className="hours_ref mb-0">Hours</p>
                            </li>
                            <li>
                              <span className="minutes"> </span>
                              <p className="minutes_ref mb-0">Minutes</p>
                            </li>
                            <li>
                              <span className="seconds"> </span>
                              <p className="seconds_ref mb-0">Seconds</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventItem;
