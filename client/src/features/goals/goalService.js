import axios from "../axios";

const API_URL = "https://vr-event.herokuapp.com/api/event/";
const API_URL_CONTACT = "https://vr-event.herokuapp.com/api/contact/";
const API_URL_USER = "https://vr-event.herokuapp.com/api/user/";
// const API_URL_USER = "http://localhost:5000/api/user/";

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("api/event/add", goalData, config);

  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("api/event", config);
  return response.data;
};
// Get user goals
const getGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("api/event/" + id, config);
  return response.data;
};

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete("api/event/" + goalId, config);

  return response.data;
};

// choose event by user
const chooseEvent = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = { idEvent: goalData };
  const response = await axios.patch("api/user/affect/", body, config);

  return response.data;
};
// Edit event
const editEvent = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(data);
  const response = await axios.patch("api/event/" + data.id, data, config);

  return response.data;
};

// Get contats
const getContacts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("api/user/", config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  chooseEvent,
  getContacts,
  editEvent,
  getGoal,
};

export default goalService;
