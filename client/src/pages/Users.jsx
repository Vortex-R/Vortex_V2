import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { getGoals } from "../features/goals/goalSlice";
import {
  getUsers,
  reset,
  updateOrganizerRole
} from "../features/profiles/profileSlice";

toast.configure();

function Users() {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);


  const [eventId, setEventId] = useState("");
  const { profiles, isLoading, isError, message } = useSelector(
    (state) => state.profiles
  );
  const { goals } = useSelector((state) => state.goals);
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals());
    dispatch(getUsers());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const role = (a) => {
    if (a === 0) return "User";
    if (a === 1) return "Organizer";
    return "Admin";
  };
  const updateToOrganizer = (id) => {
    const data = {
      role: 1,
      event: eventId,
      userId: id,
    };
    dispatch(updateOrganizerRole(data));
    // window.location.reload();
  };


  return (
    <>
    <section className='heading'>
        <p>USERS DETAILS</p>
      </section>
      <section className="content">
        {profiles.length > 0 ? (
          <div className="goals">
            {profiles.map((profile) => (
              <div key={profile._id}>
                <div className="goal">
                  <div>
                    <h4> Name : {profile.name} </h4>
                    <p> Email : {profile.email} </p>
                    <p> Phone : {profile.phone} </p>
                    <h5> Role : {role(profile.role)} </h5>
                     </div>
                    
                     {/* {profiles.map((e) => (
                      <div>

                      <p> Event : {e.event.map((a) => (
                        <div>
                          <h4> {a.name} </h4>
                        </div>
                      ) )} </p>
                    
                    <hr />
                        </div> 
                    ))} */}
                    
                   
                    { profile.event && profile.role == 0  ? (
                      <>
                      
                       <select onChange={(e) => setEventId(e.target.value)}>
                        <option
                          value={''}
                          >
                          - Select -
                        </option>
                          {goals.map((goal) => (
                            <option
                            key={goals._id}
                            value={goal._id}
                            >
                          {goal.name}
                        </option>
                      ))}
                    </select>
                  <button
                  type="submit"
                  className="btn btn-block"
                    onClick={() => {updateToOrganizer(profile._id)/*  ; window.location.reload() */} }>
                    Submit
                  </button>
                    </>
                  ) : ( <br /> )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>You have not set any Event</h3>
        )}
      </section>
    </>
  );
}

export default Users;
