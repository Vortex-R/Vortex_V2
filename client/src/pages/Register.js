import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }
    return () => {
      dispatch(reset());
    };
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    e.persist();

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
      };
      dispatch(register(userData));
    }
  };
  return (
    <Fragment>
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <a href="/home">
              <i className="feather-zap text-success display1-size me-2 ms-0"></i>
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                Vortex.{" "}
              </span>{" "}
            </a>
            <button className="nav-menu me-0 ms-auto"></button>

            <a
              href="/login"
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              Login
            </a>
            <a
              href="/register"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            >
              Register
            </a>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{
              backgroundImage: `url("assets/images/login-bg-2.jpg")`,
            }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-4">
                  Create <br />
                  your account
                </h2>
                <form onSubmit={onSubmit}>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={onChange}
                      minLength={3}
                      required
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-user text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={onChange}
                      required
                      minLength={3}
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      type="email"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Your Email Address"
                      name="email"
                      value={email}
                      onChange={onChange}
                      minLength={9}
                      required
                    />
                  </div>
                  <div className="form-group icon-input mb-3">
                    <input
                      type="password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      minLength={6}
                      required
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Confirm Password"
                      name="password2"
                      value={password2}
                      onChange={onChange}
                      minLength={6}
                      required
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  <div className="form-check text-left mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck2"
                      required
                    />
                    <label className="form-check-label font-xsss text-grey-500">
                      Accept Term and Conditions
                    </label>
                  </div>
                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      <button
                        href="/register"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                      Already have account{" "}
                      <a href="/login" className="fw-700 ms-1">
                        Login
                      </a>
                    </h6>
                  </div>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
