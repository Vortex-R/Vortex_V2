
  import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
// import { getGoals } from "../features/goals/goalSlice";
import {
    reset,
    showEvent,getOrganizer
} from "../features/profiles/profileSlice";
  
  toast.configure();
  
  function Organizer() {
    const dispatch = useDispatch();
  const navigate = useNavigate()

    
    const { user } = useSelector((state) => state.auth);
    const { profiles, isLoading, isError, message } = useSelector(
      (state) => state.profiles
    );
    console.log(profiles);
    // console.log(typeof event);
    useEffect(() => {
      if (!user) {
        navigate('/login')

      }


      // dispatch(getOrganizer());

      
    // dispatch(getGoals());
    // dispatch(showEvent());
    dispatch(getOrganizer());
    // console.log(event);
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

                  <div className="goal">
            {profiles.map((organizer) => (
              <div>
                      <p> Email : {organizer.user.email} </p>
                      <p> Phone : {organizer.user.phone} </p>
                    <h5> Role : {role(organizer.user.role)} </h5>
                    <hr />
                    </div>
                     ))} 

                    {profiles.map((e) => (
                        <div>

                      <p> Event : {e.event.name} </p>
                      <date> Date : {e.event.date} </date>
                    <p> Available Tickets : {e.event.attendees} </p> 
                    <hr />
                        </div> 
                    ))}
 
              </div>
    
          
     
        </section>
      </>
    );
  }
  
  export default Organizer;
  