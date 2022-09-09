import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import { changePassword } from "../features/auth/authSlice";

function Password() {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { password, newPassword, confirmPassword } = formData;

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.persist();
    setFormData((prevSate) => ({
      ...prevSate,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ user });
    if (newPassword !== confirmPassword) {
      toast.error("Password do not match!");
    } else {
      console.log(user.token);
      //   const token = user.token;

      const data = {
        password,
        newPassword,
      };
      if (newPassword === confirmPassword) {
        dispatch(changePassword(data));
      }
    }
  };
  return (
    <Fragment>
      <div className="main-wrapper">
        <Header />
        <Leftnav />
        <Rightchat />

        <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <div className="middle-wrap">
                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                  <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                    <Link to="/defaultsettings" className="d-inline-block mt-2">
                      <i className="ti-arrow-left font-sm text-white"></i>
                    </Link>
                    <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                      Change Password
                    </h4>
                  </div>
                  <div className="card-body p-lg-5 p-4 w-100 border-0">
                    <form onSubmit={onSubmit}>
                      <div className="row">
                        <div className="col-lg-12 mb-3">
                          <div className="form-gorup">
                            <label className="mont-font fw-600 font-xssss">
                              Current Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              value={password}
                              onChange={onChange}
                              minLength={6}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 mb-3">
                          <div className="form-gorup">
                            <label className="mont-font fw-600 font-xssss">
                              Change Password
                            </label>
                            <input
                              type="password"
                              name="newPassword"
                              value={newPassword}
                              onChange={onChange}
                              minLength={6}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12 mb-3">
                          <div className="form-gorup">
                            <label className="mont-font fw-600 font-xssss">
                              Confirm Change Password
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={onChange}
                              minLength={6}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 mb-0">
                          <button
                            type="submit"
                            className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Password;
