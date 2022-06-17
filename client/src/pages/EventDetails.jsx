import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OldFooter from "../components/OldFooter";
import OldHeader from "../components/OldHeader";

import { chooseEvent, getGoals, reset } from "../features/goals/goalSlice";

function EventDetails() {
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

  if (!user) {
    navigate("/");
  }

  dispatch(getGoals());

  return () => {
    dispatch(reset());
  };
}, [user, navigate, isError, message, dispatch]);
// console.log({ user });
// if (isLoading) {
//   return <Spinner />;
// }

return (
  <>
    <OldHeader />
    <section>
      <div className="w-100 pt-180 pb-180 page-title-wrap text-center black-layer opc5 position-relative">
        <div
          className="fixed-bg "
          style={{
            backgroundImage: "url(assets/images/parallax8.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-title-inner d-inline-block">
            <h1 className="mb-0">Event Detail</h1>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" title="">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="/event-details" title="">
                  Event Detail
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="w-100 pt-140 pb-120 position-relative">
        <div className="container">
          <div className="event-detail w-100 md:mx-4" key={goals[0]?._id}>
            <div className="event-detail-info w-100">
              <div className="row align-items-center">
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <span className="thm-clr d-block">
                    Join Us <strong> Now</strong>
                  </span>
                  <h2 className="mv-0  text-center ">{goals[0]?.name}</h2>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <div className="about-info-wrap w-100">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr flaticon-tickets"></i>
                          <div className="about-info-inner">
                            <span>Tickets Information:</span>
                            {goals[0]?.price === 0 ? (
                              <p className="mb-0">Free</p>
                            ) : (
                              <p className="mb-0">{goals[0]?.price} Dt</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr far fa-calendar-alt"></i>
                          <div className="about-info-inner">
                            <span>Opening Times</span>
                            <p className="mb-0">
                              {" "}
                              {new Date(goals[0]?.startDate).toLocaleString(
                                "en-US"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr flaticon-pin-1"></i>
                          <div className="about-info-inner">
                            <span>Location</span>
                            <p className=" mb-0 ">{goals[0]?.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="about-info w-100">
                          <i className="thm-clr flaticon-parking-square-signal"></i>
                          <div className="about-info-inner">
                            <span>Your Parking:</span>
                            <p className="mb-0">{goals[0]?.parking} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-detail-img position-relative items-center md:ml-28 w-full">
                <img
                  className="img-fluid"
                  src="assets/images/resources/invitation_live1.jpg"
                  alt="Event Detail Image"
                  style={{ height: "1024px", width: "1024px" }}
                />
              </div>
            </div>
            <div className="event-detail-content position-relative w-100">
              <div className="event-detail-desc position-relative w-100">
                <h4 className="mb-0">Overview</h4>
                <p className="mb-0 md:mr-8">{goals[0]?.overview}</p>
              </div>

              <div className="event-detail-getintouch position-relative w-100">
                <h4 className="mb-0">Get In Touch</h4>
                <div className="event-detail-getintouch-inner w-100">
                  <p className="mb-0">Start Registration Now</p>
                  {/* <a
                    className="register-btn thm-btn fill-btn"
                    onClick={() => {
                      dispatch(chooseEvent(goals[0]?._id));
                      toast("👋 You have access to live streaming.. Enjoy 🎉");
                    }}
                  >
                    Get your Ticket Now{" "}
                    <i className="flaticon-trajectory register-btn"></i>
                    <span></span>
                  </a> */}
                  {user && user.result?.verified ? (
                    <a
                      className="register-btn thm-btn fill-btn"
                      onClick={() => {
                        dispatch(chooseEvent(goals[0]?._id));
                        toast("Enjoy The Event !");
                      }}
                    >
                      Get your Ticket Now{" "}
                      <i className="flaticon-trajectory register-btn"></i>
                      <span></span>
                    </a>
                  ) : (
                    <a
                      className="register-btn thm-btn fill-btn"
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                        toast("Please check your email and login again !");
                      }}
                    >
                      Verify your Email{" "}
                      <i className="flaticon-trajectory register-btn"></i>
                      <span></span>
                    </a>
                  )}
                </div>
                {/* <div className="event-detail-loc mt-50 w-100">
                      <iframe src={goal.location + "&output=embed"}></iframe>
                    </div> */}
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

export default EventDetails;
