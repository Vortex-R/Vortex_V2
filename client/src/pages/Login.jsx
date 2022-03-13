import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import GoogleLogin from "react-google-login";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Button,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import Feature4 from "../assets/Images/features/img-8.png";
import LogoDark from "../assets/Images/MainLogo.png";

function Login() {
  const REACT_APP_GOOGLE_CLIENT_ID =
    "813623932793-jm2gjeuq0rugc0r4di5hau6kv1opgug8.apps.googleusercontent.com";

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

    if (isSuccess || user) {
      navigate("/event");
    }

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
  };

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch("http://localhost:5000/user/googleAuth", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <React.Fragment>
        <section className="bg-account-pages vh-100 text-white">
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row>
                  <Col lg={12}>
                    <div className="login-box">
                      <Row className="align-items-center no-gutters">
                        <Col lg={6}>
                          <div className="bg-transparent">
                            <div className="row justify-content-center">
                              <div className="col-lg-10">
                                <div className="home-img login-img text-center d-none d-lg-inline-block">
                                  <div className="animation-2"></div>
                                  <div className="animation-3"></div>
                                  <img
                                    src={Feature4}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <Row className="justify-content-center">
                            <Col lg={11}>
                              <div className="p-4">
                                <div className="text-center mt-3">
                                  <Link to="#">
                                    <img src={LogoDark} alt="" height="99" />
                                  </Link>
                                  {/* <p className="text-muted mt-3">
                                    Sign in to continue to Vortex.
                                  </p> */}
                                </div>
                                <div className="p-3 custom-form">
                                  <Form onSubmit={onSubmit}>
                                    <FormGroup>
                                      <Label for="email">Email</Label>
                                      <Input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter your email"
                                        onChange={onChange}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="password">Password</Label>
                                      <Input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        placeholder="Enter your password"
                                        onChange={onChange}
                                      />
                                    </FormGroup>
                                    <div className="custom-control custom-checkbox">
                                      <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customControlInline"
                                      />
                                      <Label
                                        className="custom-control-label"
                                        for="customControlInline"
                                      >
                                        Remember me
                                      </Label>
                                    </div>
                                    <div className="mt-3">
                                      <Button
                                        color="primary"
                                        className="btn btn-primary btn-block"
                                        block
                                        type="submit"
                                      >
                                        Log In
                                      </Button>{" "}
                                    </div>
                                    {/*  <GoogleLogin
                                      clientId={REACT_APP_GOOGLE_CLIENT_ID}
                                      buttonText="Log in with Google"
                                      onSuccess={handleLogin}
                                      onFailure={handleFailure}
                                      cookiePolicy={"single_host_origin"}
                                      hello
                                    ></GoogleLogin> */}
                                    <div className="mt-4 pt-1 mb-0 text-center">
                                      <p className="mb-0">
                                        Don't have an account ?
                                        <Link
                                          to="/register"
                                          className="text-success"
                                        >
                                          {" "}
                                          Sign Up
                                        </Link>
                                      </p>
                                    </div>
                                    {/* <div className="mt-4 pt-1 mb-0 text-center">
                                      <Link
                                        to="/ForgotPassword"
                                        className="text-white"
                                      >
                                        <i className="mdi mdi-lock"></i> Forgot
                                        your password?
                                      </Link>
                                    </div> */}
                                  </Form>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </React.Fragment>

      {/* <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p> Login to your account </p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-groupe">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section> */}
    </>
  );
}

export default Login;
