import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../../features/goals/goalSlice";

function EventFom() {
  const [formData, setFormData] = useState({
    name: "",
    attendees: "",
    date: "",
    link: "",

    price: "",
    parking: "",
    overview: "",
    location: "",
  });

  const { name, attendees, date, link, price, parking, overview, location } =
    formData;

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
      date,
      link,
      price,
      parking,
      overview,
      location,
    };

    dispatch(createGoal(eventData));
    console.log(formData);
    // setFormData('')
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
                        <input
                          className="w-100"
                          type="texte"
                          placeholder="Parking"
                          name="parking"
                          value={parking}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        <input
                          className="w-100"
                          type="date"
                          placeholder="Enter event date"
                          name="date"
                          value={date}
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

                      <div className="col-md-12 col-sm-12 col-lg-12">
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
              {/* <div className="col-md-12 col-sm-12 col-lg-4">
                <div className="your-payment-method bg-color3 w-100">
                  <div className="your-order w-100">
                    <span>
                      Price: <span>$250.00</span>
                    </span>
                    <span>
                      SubTotal: <span>$250.00</span>
                    </span>
                    <span>
                      Shipping: <span>Free</span>
                    </span>
                    <span className="total-price">
                      <span className="mx-auto">New Event</span>
                      Total: <span>$250.00</span>
                    </span>
                  </div>
                  <div className="payment-methods w-100">
                    <h4 className="mb-0">Payment Method</h4>
                    <ul className="mb-0 list-unstyled w-100">
                      <li>
                        <input type="radio" name="method" id="radio1" />{" "}
                        <label for="radio1">Bank Payment</label>
                      </li>
                      <li>
                        <input type="radio" name="method" id="radio2" />{" "}
                        <label for="radio2">Check Payment</label>
                      </li>
                      <li>
                        <input type="radio" name="method" id="radio3" />{" "}
                        <label for="radio3">
                          PayPal
                          <img
                            className="img-fluid"
                            src="assets/images/currency.png"
                            alt="Currency"
                          />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventFom;
