import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OldFooter from "../components/OldFooter";
import OldHeader from "../components/OldHeader";
import { getGoals, reset } from "../features/goals/goalSlice";

function Events() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <OldHeader />
      <section>
        <div className="w-100 pt-180 pb-180 page-title-wrap text-center black-layer opc5 position-relative">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(assets/images/parallax8.jpg)" }}
          ></div>
          <div className="container">
            <div className="page-title-inner d-inline-block">
              <h1 className="mb-0">Our Events</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" title="">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Our Events</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-140 pb-120 position-relative">
          <div className="container">
            <div className="event-grid-wrap w-100">
              <div className="row flex items-center justify-center">
                {goals.map((event) => (
                  <div className="col-md-6 col-sm-6 col-lg-4">
                    <div className="event-grid-box mb-30 w-100">
                      <div className="event-grid-img w-100 overflow-hidden position-relative">
                        <img
                          className="img-fluid w-100"
                          src="assets/images/resources/event-img1-1.jpg"
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
                            {event.name.slice(0, 20)}
                          </a>
                        </h3>
                        <span className="event-date thm-clr d-block">
                          {new Date(event.startDate).toLocaleDateString(
                            "en-US"
                          )}
                        </span>
                        <ul className="event-grid-meta mb-0 list-unstyled d-flex flex-wrap">
                          <li>
                            <i className="far fa-clock"></i>Time:{" "}
                            <strong>
                              {new Date(event.startDate).toLocaleTimeString(
                                "en-US"
                              )}
                            </strong>
                          </li>
                          <li>
                            <i className="fas fa-tags"></i>From:{" "}
                            <strong>12.00 DT</strong>
                          </li>
                        </ul>
                        <span className="event-loc d-block">
                          <i className="fas fa-map-pin"></i>
                          {event.location.slice(0, 35)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination-wrap d-inline-block mt-40 text-center w-100">
              <ul className="pagination justify-content-center align-items-center mb-0 list-unstyled">
                <li className="page-item prev">
                  <a className="page-link" href="" title="">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    01
                  </a>
                </li>
                <li className="page-item active">
                  <span className="page-link">02</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    04
                  </a>
                </li>
                <li className="page-item dot">..........</li>
                <li className="page-item">
                  <a className="page-link" href="">
                    08
                  </a>
                </li>
                <li className="page-item next">
                  <a className="page-link" href="">
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <OldFooter />
    </>
  );
}

export default Events;
