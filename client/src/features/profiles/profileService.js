import axios from "../axios";

// const API_URL = "http://localhost:5000/api/user/";
const API_URL = "https://vr-event.herokuapp.com/api/user/";
const API_URL_EVENT = "https://vr-event.herokuapp.com/api/event/";
const API_URL_ORGANIZER = "https://vr-event.herokuapp.com/api/organizerP/";

// update profile
const updateProfile = async (token, goalData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(
    "api/user/profile/update",
    goalData,
    config
  );

  return response.data;
};

// Get user goals
// const updateProfile = async (token,body) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.patch(API_URL + 'profile/update', config)
//   console.log(response);
//   return response.data
// }

// // Delete user goal
// const deleteGoal = async (goalId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.delete(API_URL + goalId, config)

//   return response.data
// }

// // choose event by user
// const chooseEvent = async (goalData, token) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//     const body = { idEvent:goalData }
//     const response = await axios.patch(API_URL_USER +'affect/' , body, config)

//     return response.data
//   }

// show event by id
const showEvent = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("api/event/show/" + id, config);

  return response.data;
};

// Get USERS
const getUsers = async (token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.get("api/user/profiles");

  return response.data;
};
// show Organizer data
const getOrganizer = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("api/organizerP/profile", config);

  return response.data;
};

// update user role to organizer
const updateUserToOrganizer = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    role: data.role,
    event: data.event,
  };
  const id = data.userId;
  const response = await axios.patch("api/user/role/" + id, body, config);

  return response.data;
};

const profileService = {
  updateProfile,
  //   createGoal,
  //   deleteGoal,
  //   chooseEvent,
  getUsers,
  updateUserToOrganizer,
  showEvent,
  getOrganizer,
};

export default profileService;
