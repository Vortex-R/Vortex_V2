import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createGoal,
  editEvent,
  getGoal,
  getGoals,
  reset,
} from "../features/goals/goalSlice";
import Spinner from "./Spinner";

function GoalEdit({ goal }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    attendees: "",
    date: "",
    link: "",
  });

  const { name, attendees, date, link } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      id: goal._id,
      name,
      attendees,
      date,
      link,
    };
    // console.log(eventData);
    dispatch(editEvent(eventData));
    // setFormData('')
  };
  console.log(goal);

  return (
    <section className="form9">
      <form onSubmit={onSubmit}>
        <div className="form9-group">
          <label htmlFor="text" className="text-white">
            Event
          </label>
          <input
            type="text"
            name="name"
            placeholder={goal.name}
            id="name"
            value={name}
            onChange={onChange}
          />

          <input
            type="text"
            name="attendees"
            id="attendees"
            value={attendees}
            placeholder={goal.attendees}
            onChange={onChange}
          />

          <input
            type="datetime-local"
            name="date"
            id="date"
            placeholder={goal.date}
            value={date}
            onChange={onChange}
          />

          <input
            type="text"
            name="link"
            id="link"
            placeholder={goal.link}
            value={link}
            onChange={onChange}
          />
        </div>
        <div className="form9-group">
          <button className="btn btn-primary" type="submit">
            Edit Event
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalEdit;
