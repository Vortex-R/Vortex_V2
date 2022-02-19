import {
  ArrowDownward, ChevronRight, Clear, Edit, FilterList, Remove, SaveAlt, Search, ViewColumn
} from "@material-ui/icons";
import axios from "axios";
import React, { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUsers, reset } from "../features/profiles/profileSlice";

toast.configure();

const tableIcons = {
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function Users() {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { profiles, isLoading, isError, message } = useSelector(
    (state) => state.profiles
  )
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Gender",
      field: "gender",
    },
    {
      title: "Phone",
      field: "phone",
    },
    {
      title: "Role",
      field: "role",
    },
  ];
  useEffect(() => {
    

    if (!user) {
      Navigate('/login')
    } 
     dispatch(getUsers())
    return () => {
      dispatch(reset())
    }

  }, [user, message, dispatch])
// console.log("users: "+data.profiles);
profiles.map((goal) => (
  // <p key={goal._id} goal={goal} />
  console.log(goal.name)
  ))
  const data =async ()=>{await  axios.get("http://localhost:5000/user/profiles", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhamVyQGdtYWlsLmNvbSIsImlkIjoiNjIwZDRlNGUyMWZmNzAxYzg5NjBjMTExIiwiaWF0IjoxNjQ1Mjc2Mjk5LCJleHAiOjE2NDUyOTQyOTl9.rLc324GU4ArtPWsHbmo1qQBhJ9IR4kJjkJ3sakg49qw")}
 
 const role = (a) => {
   if (a === 0) return 'User'
   if (a === 1) return 'Organizer'
    return 'Admin'


 } 

  return (
    <>
      <section className='content'> 
        {profiles.length > 0 ? (
          <div className='goals'>
            {profiles.map((profile) => (
              <div key={profile._id}>

              <p> Name:  {profile.name} </p>
              <p> Role:  {role( profile.role) } </p>
              <p> Email {profile.email} </p>
              <p> Phone: {profile.phone} </p>
                <hr />
                <br />
                <br />

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

export default Users