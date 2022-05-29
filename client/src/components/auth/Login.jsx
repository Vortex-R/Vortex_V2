import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Register from "./Register";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
    //   navigate("/event");
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
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
    navigate("/event-details");
  };

  return (
    <div className="login-popup-wrap position-fixed h-100 text-center d-flex flex-wrap align-items-center justify-content-center w-100">
      <div className="login-popup-inner d-inline-block w-100">
        <h3 className="mb-0">Sign In</h3>
        <form onSubmit={onSubmit}>
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
          <button className="thm-btn fill-btn" type="submit">
            Login<span></span>
          </button>
          <a className="d-inline-block" href="">
            Forget A Password
          </a>
          <a className="register-btn mx-4" href="">
            <i className="flaticon-user mx-1">Sign UP</i>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
