import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalItem from "../components/GoalItem";
import ContactForm from "../components/ContactForm";
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
      {user && (user.result.role == 0 || user.result.role == 1) ? (
        <>
          <section className="heading">
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
          </section>
        </>
      ) : (
        <>
          <section className="heading">
            <h1>VORTEX</h1>
            <p>Welcome to our Events</p>
          </section>

          <section className="content">
            {goals.length > 0 ? (
              <div className="goals">
                {goals.map((goal) => (
                  <GoalItem key={goal._id} goal={goal} />
                ))}
              </div>
            ) : (
              <h3>STAY TUNED </h3>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default Event;
