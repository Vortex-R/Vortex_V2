import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../Spinner";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    phone: "",
  });

  const { firstName, lastName, email, password, password2, gender, phone } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // if (isSuccess || user) {
    //   navigate("/event-details");
    // }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevSate) => ({
      ...prevSate,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password do not match!");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        gender,
        phone,
      };
      dispatch(register(userData));
      navigate("/event-details");
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="register-popup-wrap position-fixed h-100 text-center d-flex flex-wrap align-items-center justify-content-center w-100">
        <div className="register-popup-inner d-inline-block w-100">
          <h3 className="mb-0">Sign Up</h3>
          <form onSubmit={onSubmit}>
            <input
              className="w-100"
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="First Name"
            />
            <input
              className="w-100"
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Last Name"
            />
            <input
              className="w-100"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <input
              className="w-100"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
            <input
              className="w-100"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm Password"
            />
            <input
              className="w-100"
              type="text"
              name="gender"
              value={gender}
              onChange={onChange}
              placeholder="Gender"
            />
            <input
              className="w-100"
              type="number"
              name="phone"
              value={phone}
              onChange={onChange}
              placeholder="Phone"
            />
            <button className="thm-btn fill-btn" type="submit">
              Sign Up<span></span>
            </button>
            {/* <a className="user-btn" href="">
            <i className="flaticon-user mx-1">Sign In</i>
          </a> */}

            {/* <a className="user-btn" href="">
              <i className="flaticon-user">Sign In</i>
            </a> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
