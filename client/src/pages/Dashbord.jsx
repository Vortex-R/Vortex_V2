import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";
import { getContacts } from "../features/contacts/contactSlice";
import ContactItem from "../components/ContactItem";
import { FaPaperPlane } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());
    dispatch(getContacts());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading9 text-center">
        <h1>Welcome {user && user.result.name}</h1>
        <p>Admin Dashboard</p>
      </section>
      <GoalForm />

      {/* <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any Event</h3>
        )}
      </section> */}

      {/* <section className="footer">
        <FaPaperPlane /> <p> Reclamation </p>
      </section>

      <section className="content">
        {contacts.length > 0 ? (
          <div className="goals">
            {contacts.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </div>
        ) : (
          <h3>You have not set any Event</h3>
        )}
      </section>
       */}
    </>
  );
}

export default Dashboard;
