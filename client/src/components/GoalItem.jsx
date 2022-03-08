import {
  FaEdit,
  FaExternalLinkAlt,
  FaRegPlayCircle,
  FaTicketAlt,
  FaTimesCircle,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal, chooseEvent } from "../features/goals/goalSlice";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import HomeUrl from "../assets/Images/home-border.png";
import Img from "../assets/Images/features/img-2.png";
import React from "react";

function GoalItem({ goal, setFlag, flag }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  return (
    <div className="goal">
      <React.Fragment>
        <section className="bg-home bg-transparent text-white" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      <h5 className="mb-0"> {goal.name} Event</h5>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">
                        Something Big <br /> is Coming Your Way
                      </h1>
                      <p className="text-muted mt-4 f-20">
                        But all that really matters is what happens when the
                        audience is watching. This is a truth all troupers know.{" "}
                        <br />
                        Date : {goal.date}
                      </p>
                      <p>
                        {" "}
                        Available tickets : {
                          goal.attendees
                        } <FaTicketAlt />{" "}
                      </p>
                      <div className="mt-4 pt-2 d-flex">
                        <Link
                          to="#"
                          className="btn btn-primary mr-3"
                          onClick={() => {
                            setFlag(!flag);
                            dispatch(chooseEvent(goal._id));
                            window.location.reload();
                          }}
                        >
                          Take your Ticket
                        </Link>

                        <a href={goal.link} className="btn text-white ">
                          <FaRegPlayCircle />
                          Watch With VR Box
                        </a>

                        {user.result.role === 2 ? (
                          <a
                            href="/edit/:id"
                            className="btn btn-transparent"
                            onClick={() => dispatch}
                          >
                            <FaEdit />
                            EDIT
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="home-img">
                      <div className="animation-1"></div>
                      <div className="animation-2"></div>
                      <div className="animation-3"></div>
                      <img src={Img} className="img-fluid" alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>
      {/* <div>{new Date(goal.date).toLocaleString("en-US")}</div>

      <h5> Event: {goal.name}</h5>
      <h5>Available Tickets: {goal.attendees} </h5>
      <br />

      {user.result.role == 2 ? (
        <button
          onClick={() => {
            dispatch(deleteGoal(goal._id));
            window.location.reload();
          }}
          className="close"
        >
          <FaTimesCircle />
        </button>
      ) : (
        <button
          onClick={() => {
            setFlag(!flag);
            dispatch(chooseEvent(goal._id));
          }}
          className="btn btn-block"
        >
          <FaExternalLinkAlt /> Participate
        </button>
      )} */}
    </div>
  );
}

export default GoalItem;
