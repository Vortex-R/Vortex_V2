import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../Spinner";

function Register() {
  const [repo, setRepo] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    phone: "",
    naissance: "",
    situation: "",
    job: "",
    genre: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    password2,
    gender,
    phone,
    naissance,
    situation,
    job,
    genre,
  } = formData;

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
        naissance,
        situation,
        job,
        genre,
      };
      console.log({ userData });
      dispatch(register(userData));
      navigate("/event-details");
      window.close();
    }
  };

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get("https://api.deezer.com/genre");
        const myRepo = response.data;
        setRepo(myRepo.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  return (
    <>
      <div className="register-popup-wrap position-fixed h-100 text-center d-flex flex-wrap align-items-center justify-content-center w-100 h-300px overflow-auto ">
        <div className="register-popup-inner  w-100 ">
          <span className="mt-2">
            <a
              type="button"
              href="/"
              className="text-xl rounded-full hover:bg-light-gray block md:hidden"
            >
              <MdOutlineCancel />
            </a>
          </span>

          <h3 className="mb-0">Sign Up</h3>

          <form onSubmit={onSubmit}>
            <input
              className="md:lg:w-48  md:lg:mr-16 my-1"
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="First Name *"
              required
              minLength={3}
            />
            <input
              className="md:lg:w-48 my-1"
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Last Name *"
              required
              minLength={3}
            />
            <input
              className="w-100 my-1"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address *"
              required
              minLength={9}
            />
            <input
              className="w-100 my-1"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password *"
              required
              minLength={6}
            />
            <input
              className="w-100 my-1"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm Password *"
              required
              minLength={6}
            />{" "}
            <input
              className="w-100 my-1"
              type="tel"
              name="phone"
              value={phone}
              onChange={onChange}
              placeholder="Phone *"
              required
              minLength={8}
            />{" "}
            <input
              className=" md:lg:w-48  md:lg:mr-16  mt-0"
              type="date"
              name="naissance"
              value={naissance}
              onChange={onChange}
              placeholder="Date of Birth"
              required
            />
            <select
              name="gender"
              value={gender}
              className=" md:lg:w-48 text-center my-4"
              onChange={onChange}
              required
            >
              <option>- Gender - *</option>
              <option value="MALE">MALE</option>
              <option value="FEMAL">FEMAL</option>
            </select>
            <select
              name="situation"
              value={situation}
              className="w-100  text-center my-4"
              onChange={onChange}
            >
              <option>- Family Situation - *</option>
              <option value="Single">Single</option>
              <option value="Maried">Maried</option>
              <option value="Divorced">Divorced</option>
              <option value="WIDOWER/ WIDOW">WIDOWER/ WIDOW </option>
            </select>
            <select
              name="job"
              value={job}
              className="w-100  text-center my-4"
              onChange={onChange}
              required
            >
              <option>- You are - *</option>
              <option value="student">Student</option>
              <option value="employee">Employee</option>
              <option value="business-executive">Business Executive</option>
              <option value="manager">Manager</option>
              <option value="freelancer">Freelancer</option>

              <option value="Other">Other</option>
            </select>
            <select
              name="genre"
              value={gender}
              className="w-100 text-center my-4"
              onChange={onChange}
            >
              <option>- Music Genres -</option>
              {repo.map((g) => (
                <option key={g.id} value={g.name}>
                  {" "}
                  {g.name}{" "}
                </option>
              ))}
            </select>
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
