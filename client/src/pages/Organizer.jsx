import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
// import { getGoals } from "../features/goals/goalSlice";
import { getOrganizer, reset } from "../features/profiles/profileSlice";
  
  toast.configure();
  
  function Organizer() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    
    const { user } = useSelector((state) => state.auth);
    const { profiles, isLoading, isError, message } = useSelector(
      (state) => state.profiles
    );
    useEffect(() => {
      if (isError) {
        console.log(message)
      }
      if (!user) {
        navigate('/login')
      }

    dispatch(getOrganizer());

      return () => {
        dispatch(reset());
      };
    }, [user, navigate,isError, message, dispatch]);
  

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
          <p>{user && user.result.name} Profile</p>
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
                    <div>

                    {profiles && profiles.map((e) => (
                      <div>

                      <p> Event : {e.event.name} </p>
                      <date> Date : {e.event.date} </date>
                    <p> Available Tickets : {e.event.attendees} </p> 
                    <hr />
                        </div> 
                    ))}
                    </div>
 
              </div>
    
          
     
        </section>
      </>
    );
  }
  
  export default Organizer;
  