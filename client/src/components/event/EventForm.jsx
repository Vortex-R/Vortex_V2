import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createGoal } from "../../features/goals/goalSlice";

function EventForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    attendees: "",
    startDate: "",
    endDate: "",
    link: "",

    price: "",
    parking: "",
    overview: "",
    location: "",
  });

  const {
    name,
    attendees,
    startDate,
    endDate,
    link,
    price,
    parking,
    overview,
    location,
  } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      name,
      attendees,
      startDate,
      endDate,
      link,
      price,
      parking,
      overview,
      location,
    };

    dispatch(createGoal(eventData));
    navigate("/calendar");
  };
  return (
    <section>
      <div className="w-100 pt-140 pb-120 position-relative">
        <div className="container">
          <div className="checkout-wrap w-100">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-8 mx-auto">
                <div className="checkout-form w-100">
                  <h2 className="mb-0">Create New Event</h2>
                  <form className="w-100" onSubmit={onSubmit}>
                    <div className="row mrg10">
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <input
                          className="w-100"
                          type="text"
                          placeholder="Enter event name"
                          name="name"
                          value={name}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 col-lg-4">
                        <input
                          className="w-100"
                          type="number"
                          placeholder="Attendees Number"
                          name="attendees"
                          value={attendees}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 col-lg-4">
                        <input
                          className="w-100"
                          type="number"
                          placeholder="Price  ( 0 if it's free )"
                          name="price"
                          value={price}
                          onChange={onChange}
                        />
                      </div>

                      <div className="col-md-4 col-sm-12 col-lg-4">
                        <select
                          placeholder="Parking"
                          name="parking"
                          value={parking}
                          className="mt-2 h-16 w-100 bg-gray-50"
                          onChange={onChange}
                          style={{
                            backgroundColor: "#f6f7fb",
                            fontFamily: "inherit",
                          }}
                        >
                          <option>- Parking -</option>
                          <option value="available">AVAILABLE </option>
                          <option value="unavailable">UNAVAILABLE </option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        <input
                          className="w-100 text- "
                          type="datetime-local"
                          placeholder="Enter event StartDate"
                          name="startDate"
                          value={startDate}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        <input
                          className="w-100"
                          type="datetime-local"
                          placeholder="Enter event endDate"
                          name="endDate"
                          value={endDate}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        <input
                          className="w-100"
                          type="url"
                          placeholder="Link"
                          name="link"
                          value={link}
                          onChange={onChange}
                        />
                      </div>

                      <div className="col-md-6 col-sm-12 col-lg-6">
                        <input
                          className="w-100"
                          type="text"
                          placeholder="Enter Event Location"
                          name="location"
                          value={location}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <input
                          className="w-100"
                          type="text"
                          placeholder="Overview"
                          name="overview"
                          value={overview}
                          onChange={onChange}
                        />
                      </div>

                      <button
                        className="hover:bg-blue-500 thm-btn fill-btn mx-auto mt-5 "
                        type="submit"
                      >
                        Add Event<span></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventForm;
