import React from "react";
import {
  FaLocationArrow,
  FaMapMarkerAlt,
  FaRegPlayCircle,
  FaTicketAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Img from "../assets/Images/ticdce.jpg";
import HomeUrl from "../assets/Images/home-border.png";
import { chooseEvent } from "../features/goals/goalSlice";

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
                      <h5 className="mb-0"> les premiers fruits du LACEN</h5>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">{goal.name}`s Event</h1>
                      <p className="text-muted mt-4 f-18">
                        <ul style={{ listStyleType: "circle", color: "white" }}>
                          <li>
                            ENA ( moi en langue arabe) est une expérience
                            multimédia sensorielle associant plusieurs
                            disciplines artistiques dont le chant, la danse et
                            la performance.
                          </li>
                          <li>
                            Électro-Oud (musique numérique et luth tunisien)
                          </li>
                          <li>
                            SOUND JOURNEY (musique numérique, chanson populaire
                            et instruments traditionnel
                          </li>
                        </ul>
                        <br />
                        Date :{new Date(goal.date).toLocaleString("en-US")}
                      </p>
                      <p>
                        <h5>
                          <FaMapMarkerAlt /> {"  "}
                          Tunis International Center for Digital Cultural
                          Economy
                        </h5>{" "}
                        Available tickets : {
                          goal.attendees
                        } <FaTicketAlt />{" "}
                      </p>
                      <div className="my-4 py-2 d-flex">
                        {user && user.result.verified ? (
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
                        ) : (
                          <Link
                            to="#"
                            className="btn btn-secondary mr-3"
                            onClick={() => {
                              localStorage.removeItem("user");
                              window.location.reload();
                            }}
                          >
                            Verify your email
                          </Link>
                        )}
                        {/* <a href={goal.link} className="btn text-white ">
                          <FaRegPlayCircle />
                          Watch With VR Box
                        </a> */}
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
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
    </div>
  );
}

export default GoalItem;
