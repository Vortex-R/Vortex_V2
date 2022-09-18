import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Header from "../components/Header";
import { createContact } from "../features/contacts/contactSlice";

function Comingsoon() {
  const [formData, setFormData] = useState({
    email: "",
    category: "",
  });

  const [isModalOpen, setModalIsOpen] = useState(false);

  console.log(useState("hello")[1]);
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const { email, category } = formData;

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

    const userData = {
      email,
      category,
    };
    dispatch(createContact(userData));
    toggleModal();
  };

  const Modal = ({ onRequestClose }) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {
      function onKeyDown(event) {
        if (event.keyCode === 27) {
          // Close the modal when the Escape key is pressed
          onRequestClose();
        }
      }

      // Prevent scolling
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);

      // Clear things up when unmounting this component
      return () => {
        document.body.style.overflow = "visible";
        document.removeEventListener("keydown", onKeyDown);
      };
    });

    return (
      <div className="modal__backdrop text-center">
        <div className="modal__container">
          <h3 className="modal__title">
            Thanks for subscription, we will keep you updated.
          </h3>
          <p>
            Meanwhile enjoy watching <code>the VR backstage</code> of "Festival
            international de Hammamet : orchestre de barbes"
          </p>
          <div>
            <iframe
              width="auto"
              height="315"
              src="https://www.youtube.com/embed/zbzEuUCs4JM?start=423"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <button
            type="button"
            className="close__button"
            onClick={onRequestClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
      {/* <Header /> */}
      {/* <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className=" d-flex justify-content-center align-items-center">
          <div
            className=" bg-image-contain bg-image-center bg-no-repeat"
            style={{
              backgroundImage: `url("assets/images/coming.jpg")`,
              height: "500px",
              width: "500px",
            }}
          ></div>

          <div className="card shadow-none border-0 ps-lg--5 me-auto coming-soon-card">
            <div className="card-body rounded-0 text-center lg-text-left pt-md-5  ps-0 pe-0">
              <h2 className="fw-700 text-grey-900 display3-size display4-md-size lh-2">
                We're under <span className="text-primary">construction.</span>{" "}
                Check back for an update soon.
              </h2>
              <form onSubmit={onSubmit}>
                <div className="form-group mt-4 p-1 border p-2 bg-white rounded-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group icon-input mb-0">
                        <i className="ti-email font-xs text-grey-400"></i>
                        <input
                          type="email"
                          className="style1-input bg-transparent border-0 ps-5 font-xsss mb-0 text-grey-500 fw-500"
                          placeholder="Email Address"
                          name="email"
                          value={email}
                          onChange={onChange}
                          minLength={9}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group icon-input mb-0 ">
                        <i className="ti-user font-xs text-grey-400"></i>
                        <select
                          className="style1-input bg-transparent border-0 ps-5 font-xsss mb-0 text-grey-500 fw-500"
                          name="category"
                          id="category"
                          onChange={onChange}
                          required
                          defaultValue="attendee"
                          value={category}
                        >
                          <option hidden>Category</option>
                          <option value="attendee">Attendee</option>
                          <option value="organizer">Organizer</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-2">
                      <button
                        type="submit"
                        className="w-100 d-block btn bg-current text-white font-xsssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                      >
                        Notify
                      </button>
                    </div>
                    <button onClick={toggleModal} type="button">
                      Show the modal
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="main-content pt-0 bg-white ps-0 pe-0">
        <div className="container">
          <div className="row d-flex">
            <div
              className="col-xl-6 d-xl-block p-0 vh-100 bg-image-contain bg-image-center bg-no-repeat"
              style={{
                backgroundImage: `url("assets/images/coming.jpg")`,
              }}
            ></div>

            <div className="col-xl-6 vh-100  align-items-center d-flex bg-white rounded-3 overflow-hidden">
              <div className="card shadow-none border-0 ps-lg--5 me-auto coming-soon-card">
                <div className="card-body rounded-0 text-left pt-md-5  ps-0 pe-0">
                  <h2 className="fw-700 text-grey-900 display3-size display4-md-size lh-2">
                    We're under{" "}
                    <span className="text-primary">construction.</span> Check
                    back for an update soon.
                  </h2>
                  <form onSubmit={onSubmit}>
                    <div className="form-group mt-4 p-1 border p-2 bg-white rounded-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group icon-input mb-0">
                            <i className="ti-email font-xs text-grey-400"></i>
                            <input
                              type="email"
                              className="style1-input bg-transparent border-0 ps-5 font-xsss mb-0 text-grey-500 fw-500"
                              placeholder="Email Address"
                              name="email"
                              value={email}
                              onChange={onChange}
                              minLength={9}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group icon-input mb-0 ">
                            <i className="ti-user font-xs text-grey-400"></i>
                            <select
                              className="style1-input bg-transparent border-0 ps-5 font-xsss mb-0 text-grey-500 fw-500"
                              name="category"
                              id="category"
                              onChange={onChange}
                              required
                              defaultValue="attendee"
                              value={category}
                            >
                              <option hidden>Category</option>
                              <option value="attendee">Attendee</option>
                              <option value="organizer">Organizer</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-2">
                          <button
                            type="submit"
                            className="w-100 d-block btn bg-current text-white font-xsssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                          >
                            Notify
                          </button>
                        </div>
                        {/* <button onClick={toggleModal} type="button">
                          Show the modal
                        </button> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Comingsoon;
