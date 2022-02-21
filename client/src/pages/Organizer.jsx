
  import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { getGoals } from "../features/goals/goalSlice";
import {
    reset,
    showEvent
} from "../features/profiles/profileSlice";
  
  toast.configure();
  
  function Organizer() {
    const dispatch = useDispatch();
  const navigate = useNavigate()

    
    const { user } = useSelector((state) => state.auth);
    // const { goals } = useSelector((state) => state.goals);
    const [eventId, setEventId] = useState("");
    const { profiles, isLoading, isError, message } = useSelector(
      (state) => state.profiles
    );
    const { event } = useSelector((state) => state.event);
    useEffect(() => {
      if (!user) {
        navigate('/login')

      }

      
    dispatch(getGoals());
    dispatch(showEvent());
    console.log(event);
    // dispatch(getUsers());
 
//   console.log(user.result);
//   console.log(user.result.event[0]);
      return () => {
        dispatch(reset());
      };
    }, [user, message, dispatch]);
  
    if (isLoading) {
      return <Spinner />;
    }
  
    const role = (a) => {
      if (a === 0) return "User";
      if (a === 1) return "Organizer";
      return "Admin";
    };
   
  
  
    return (
      <>
      <section className='heading'>
          <p>{user.result.name} Profile</p>
        </section>
        <section className="content">
          {/* {user.result.length  ? ( */}
            <div className="card-body">
              {/* {user.result.map((profile) => ( */}
                <div >
                  <div className="goal">
                    <div>
                      <h4> Name : {user.result.name} </h4>
                      <p> Email : {user.result.email} </p>
                      <p> Phone : {user.result.phone} </p>
                      <h5> Role : {role(user.result.role)} </h5>
                      {/* <p> Event : {event.name} </p>
                      <date> Date : {event.date} </date>
                      <p> Available Tickets : {event.attendees} </p> */}

                      {/* Events : <select onChange={(e) => setEventId(e.target.value)}>
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
                      </select> */}
                    </div>
                    {/* <button
                      type="submit"
                      className="btn btn-block"
                      onClick={() => updateToOrganizer(profile._id)}
                    >
                      Submit
                    </button> */}
                  </div>
                </div>
            {/*  ))} */} 
            </div>
     {/*      ) : (
            <h3>You have not set any Event</h3>
          )} */}
        </section>
      </>
    );
  }
  
  export default Organizer;
  