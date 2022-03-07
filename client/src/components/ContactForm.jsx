import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { contact } from "../features/auth/authSlice";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

import HomeUrl from "../assets/Images/home-border.png";
import Feature from "../assets/Images/features/img-3.png";

function GoalForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    messages: "",
  });

  const { email, subject, messages } = formData;

  const dispatch = useDispatch();

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
      subject,
      messages,
    };
    dispatch(contact(userData));
  };

  return (
    <>
      <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center ">
                  <h3 className="title-heading mt-4">
                    Let's talk about everything!
                  </h3>
                  <p className="text-muted f-17 mt-3">
                    Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                    elementum mauris sit amet arcu <br /> fringilla auctor In
                    eleifend maximus nisi sed vulputate.
                  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4 ">
              <Col lg={6}>
                <div className="mt-4 home-img text-center">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Feature} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="custom-form mt-4 ">
                  {/* <div id="messages"></div> */}
                  <Form
                    onSubmit={onSubmit}
                    name="contact-form"
                    id="contact-form"
                  >
                    <Row>
                      <Col lg={6}>
                        <FormGroup className="mt-3">
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
                      </Col>
                      <Col lg={6}>
                        <FormGroup className="mt-3">
                          <Input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            value={subject}
                            placeholder="Enter your subject"
                            onChange={onChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <Input
                            type="textarea"
                            rows="5"
                            className="form-control"
                            id="messages"
                            name="messages"
                            value={messages}
                            placeholder="Enter your message"
                            onChange={onChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="mt-3 text-right">
                        <Input
                          id="submit"
                          name="send"
                          color="primary"
                          className="submitBnt btn btn-primary btn-round"
                          value="Send Message"
                          type="submit"
                          style={{ width: "auto", color: "#fff" }}
                        />{" "}
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>

      {/* <section className="footer">
    <FaEnvelope/> <p> Contact us </p>
  </section>

  <section className="form">
    <form onSubmit={onSubmit} >
      
      <div className="form-group">
      <input type="email" 
      className="form-control" 
      id="email" name="email" value={email}
      placeholder='Enter your email' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="text" 
      className="form-control" 
      id="subject" name="subject" value={subject}
      placeholder='Enter your subject' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="textarea" 
      className="form-control" 
      id="messages" name="messages" value={messages}
      placeholder='Enter your message' onChange={onChange} />
      </div>

      <div className="form-groupe">
        <button type="submit" className="btn btn-block">Submit</button>
      </div>
    </form>
  </section> */}
    </>
  );
}

export default GoalForm;
