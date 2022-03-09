import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalEdit from "../components/GoalEdit";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Event() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch, flag]);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* {user && (user.result.role == 0 || user.result.role == 1) ? (
        <> */}
      <section className="mb-4">
        {goals.map((goal) => (
          <>
            <GoalItem
              setFlag={setFlag}
              flag={flag}
              key={goal._id}
              goal={goal}
            />
            {user.result.role === 2 ? (
              <GoalEdit key={goal.name} goal={goal} />
            ) : (
              ""
            )}
          </>
        ))}
      </section>

      {/* <section>
        <ContactForm />
      </section> */}
      {/* <React.Fragment>
        <section className="bg-home bg-transparent text-white" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      <h5 className="mb-0"> {goals[0].name} Event</h5>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">
                        Something Big <br /> is Coming Your Way
                      </h1>
                      <p className="text-muted mt-4 f-20">
                        But all that really matters is what happens when the
                        audience is watching. This is a truth all troupers know.{" "}
                        <br />
                        Date : {goals[0].date}
                      </p>
                      <p>
                        {" "}
                        Available tickets : {
                          goals[0].attendees
                        } <FaTicketAlt />{" "}
                      </p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">
                          Contact Us
                        </Link>{" "}
                        <Link to="#" className="video-play-icon text-white">
                          <i className="mdi mdi-play-circle-outline text-white mr-2"></i>
                          Live Streaming
                        </Link>
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
        <section>
          <ContactForm />
        </section>
      </React.Fragment> */}

      {/* <section className="heading">
            <h1>VORTEX</h1>
            <p>Welcome to our Events</p>
          </section>

          <section className="content">
            {goals.length > 0 ? (
              <div className="goals">
                {goals.map((goal) => (
                  <GoalItem
                    setFlag={setFlag}
                    flag={flag}
                    key={goal._id}
                    goal={goal}
                  />
                ))}
              </div>
            ) : (
              <h3>STAY TUNED </h3>
            )}
          </section>

          <section>
            <ContactForm />
          </section> */}
    </>
    //   ) : (
    //     <>
    //       <section className="heading">
    //         <h1>VORTEX</h1>
    //         <p>Welcome to our Events</p>
    //       </section>

    //       <section className="content">
    //         {goals.length > 0 ? (
    //           <div className="goals">
    //             {goals.map((goal) => (
    //               <GoalItem key={goal._id} goal={goal} />
    //             ))}
    //           </div>
    //         ) : (
    //           <h3>STAY TUNED </h3>
    //         )}
    //       </section>
    //     </>
    //   )}
    // </>
  );
}

export default Event;
