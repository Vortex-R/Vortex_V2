import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Appfooter from "../components/Appfooter";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Popupchat from "../components/Popupchat";
import Rightchat from "../components/Rightchat";
import { Countries } from "../data/countries";
import { Hobbies } from "../data/hobbies";
import { Genres } from "../data/genres";
import { updateProfile } from "../features/auth/authSlice";
function Account() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    gender: "",
    phone: "",
    naissance: "",
    situation: "",
    job: "",
    genre: "",
    country: "",
    hobbies: "",
  });

  const {
    firstName,
    lastName,
    picture,
    gender,
    phone,
    naissance,
    situation,
    job,
    genre,
    country,
    hobbies,
  } = formData;
  console.log({ formData });

  const { user } = useSelector((state) => state.auth);
  console.log(user.result.picture);
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

    const data = {
      // name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      picture,
      gender,
      phone,
      naissance,
      situation,
      job,
      genre,
      country,
      hobbies,
    };
    dispatch(updateProfile(data));
  };
  return (
    <Fragment>
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
                    Account Details
                  </h4>
                </div>
                <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 text-center">
                      <figure className="avatar ms-auto me-auto mb-0 mt-2 w100">
                        <img
                          src={require(`./../../../server/public/users/image/${user.result.picture}`)}
                          alt="avater"
                          className="shadow-sm rounded-3 w-100"
                        />
                      </figure>
                      <h2 className="fw-700 font-sm text-grey-900 mt-3">
                        {user?.result?.name}
                      </h2>
                      <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                        {user?.result?.country}
                      </h4>
                    </div>
                  </div>

                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-lg-6 mb-3 ">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            // placeholder={user?.result?.name
                            //   .split(" ")
                            //   .slice(0, -1)
                            //   .join(" ")}
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={onChange}
                            minLength={3}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder={user?.result?.name
                            //   .split(" ")
                            //   .slice(-1)
                            //   .join(" ")}
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={onChange}
                            required
                            minLength={3}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={user?.result?.email}
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Phone
                          </label>
                          <input
                            className="form-control"
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={onChange}
                            placeholder="Phone"
                            required
                            minLength={8}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Country
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Address
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div> */}

                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Birth Date
                          </label>
                          <input
                            className="form-control"
                            type="date"
                            name="naissance"
                            value={naissance}
                            onChange={onChange}
                            placeholder="Date of Birth"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Gender
                          </label>
                          <select
                            name="gender"
                            value={gender}
                            className="form-control"
                            onChange={onChange}
                            required
                            style={{
                              backgroundColor: "#f6f7fb",
                              lineHeight: "normal",
                            }}
                          >
                            <option value="MALE">MALE</option>
                            <option value="FEMAL">FEMAL</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Family Situation
                          </label>
                          <select
                            name="situation"
                            value={situation}
                            className="form-control"
                            onChange={onChange}
                            style={{
                              backgroundColor: "#f6f7fb",
                              lineHeight: "normal",
                            }}
                            required
                          >
                            <option value="Single">Single</option>
                            <option value="Maried">Maried</option>
                            <option value="Divorced">Divorced</option>
                            <option value="WIDOWER/ WIDOW">
                              WIDOWER/ WIDOW{" "}
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Music Genres
                          </label>
                          <select
                            name="genre"
                            value={genre}
                            className=" form-control"
                            onChange={onChange}
                            style={{
                              backgroundColor: "#f6f7fb",
                              lineHeight: "normal",
                            }}
                            required
                          >
                            {/* <option>- Music Genres -</option> */}
                            {Genres.map((g) => (
                              <option key={g.id} value={g.name}>
                                {" "}
                                {g.name}{" "}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            hobbies
                          </label>
                          <select
                            name="hobbies"
                            value={hobbies}
                            className=" form-control"
                            onChange={onChange}
                            style={{
                              backgroundColor: "#f6f7fb",
                              lineHeight: "normal",
                            }}
                            required
                          >
                            {/* <option>- hobbies -</option> */}
                            {Hobbies.map((c) => (
                              <option key={c.name} value={c.name}>
                                {" "}
                                {c.name}{" "}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            You are :
                          </label>
                          <select
                            name="job"
                            value={job}
                            className="form-control"
                            onChange={onChange}
                            required
                            style={{
                              backgroundColor: "#f6f7fb",
                              lineHeight: "normal",
                            }}
                          >
                            {/* <option>- You are - *</option> */}
                            <option value="student">Student</option>
                            <option value="employee">Employee</option>
                            <option value="business-executive">
                              Business Executive
                            </option>
                            <option value="manager">Manager</option>
                            <option value="freelancer">Freelancer</option>

                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss mb-2">
                            Country
                          </label>
                          <select
                            name="country"
                            value={country}
                            className=" form-control"
                            onChange={onChange}
                            style={{
                              backgroundColor: "#f6f7fb",
                              lineHeight: "normal",
                            }}
                            required
                          >
                            {/* <option>- Country -</option> */}
                            {Countries.map((c) => (
                              <option key={c.code} value={c.name}>
                                {" "}
                                {c.name}{" "}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <div className="card mt-3 border-0">
                          <div className="card-body d-flex justify-content-between align-items-end p-0">
                            <div className="form-group mb-0 w-100">
                              <input
                                type="file"
                                name="picture"
                                id="file"
                                className="input-file"
                                value={picture}
                                onChange={onChange}
                              />
                              <label
                                htmlFor="file"
                                className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                              >
                                <i className="ti-cloud-down large-icon me-3 d-block"></i>
                                <span className="js-fileName">
                                  Drag and drop or click to replace
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 mb-3">
                        <label className="mont-font fw-600 font-xsss mb-2 text-dark">
                          Description
                        </label>
                        <textarea
                          className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                          rows="5"
                          placeholder="Write your message..."
                        ></textarea>
                      </div>

                      <div className="col-lg-12">
                        <button
                          className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                          type="submit"
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

      <Popupchat />
      <Appfooter />
    </Fragment>
  );
}

export default Account;
