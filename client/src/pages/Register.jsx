import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Feature4 from "../assets/Images/features/img-9.png";
import LogoDark from "../assets/Images/MainLogo.png";
import Spinner from "../components/Spinner";
import { register, reset } from "../features/auth/authSlice";

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
      // console.log(userData);
      dispatch(register(userData));
    }
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
                <Row className="no-gutters align-items-center">
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
                                    Sign up for a new Account
                                  </p> */}
                                </div>
                                <div className="p-3 custom-form">
                                  <Form onSubmit={onSubmit}>
                                    <FormGroup>
                                      <Label for="firstName">First Name</Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        placeholder="Enter your firstName"
                                        onChange={onChange}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="lastName">Last Name</Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        placeholder="Enter your lastName"
                                        onChange={onChange}
                                      />
                                    </FormGroup>
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
                                    <FormGroup>
                                      <Label for="password2">
                                        Confirm Password
                                      </Label>
                                      <Input
                                        type="password"
                                        className="form-control"
                                        id="password2"
                                        name="password2"
                                        value={password2}
                                        placeholder="Confirm password"
                                        onChange={onChange}
                                      />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="phone">Phone</Label>
                                      <Input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        placeholder="Enter your number"
                                        onChange={onChange}
                                      />
                                    </FormGroup>
                                    <div className="d-flex justify-content-center">
                                      <Input
                                        type="checkbox"
                                        className="custom-control custom-checkbox mx-3"
                                        id="gender"
                                        name="gender"
                                        value="MALE"
                                        onChange={onChange}
                                      />
                                      MALE
                                      <Input
                                        type="checkbox"
                                        className="custom-control custom-checkbox mx-3"
                                        id="gender"
                                        name="gender"
                                        value="FEMALE"
                                        onChange={onChange}
                                      />
                                      FEMALE
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                      <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customControlInline"
                                      />
                                      <Label
                                        className="custom-control-label mx-1"
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
                                      >
                                        Sign up
                                      </Button>
                                    </div>
                                    <div className="mt-4 pt-1 mb-0 text-center">
                                      <p className="mb-0">
                                        Already have account ?
                                        <Link
                                          to="/Login"
                                          className="text-success"
                                        >
                                          {" "}
                                          Sign in
                                        </Link>
                                      </p>
                                    </div>
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
          <FaUser /> Register
        </h1>
        <p> Please create an account </p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Enter your firstName"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Enter your lastName"
              onChange={onChange}
            />
          </div>

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

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              placeholder="Enter your number"
              onChange={onChange}
            />
          </div>

          <div className="form-group2">
            <input
              type="radio"
              checked
              className="form-control"
              id="gender"
              name="gender"
              value="Male"
              onChange={onChange}
            />{" "}
            <span className="gender">Male</span>
            <input
              type="radio"
              className="form-control"
              id="gender"
              name="gender"
              value="FEMALE"
              onChange={onChange}
            />{" "}
            <span className="gender">FEMALE</span>
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

export default Register;
