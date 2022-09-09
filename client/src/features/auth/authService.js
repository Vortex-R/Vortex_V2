import axios from "../axios";

// Register user
const register = async (userData) => {
  const response = await axios.post("api/user/signup", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// edit profile
const updateProfile = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch("api/user/profile/update", data, config);

  return response.data;
};

// edit profile
const changePassword = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch("api/user/changePassword", data, config);

  return response.data;
};
// updatePicture
const updatePicture = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch("api/user/picture", data, config);

  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post("api/user/signin", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getUserData = (userId) => {
  const response = axios.get("api/user/getUserData/" + userId);
  return new Promise((resolve, reject) => {
    resolve(response);
    reject("error");
  });
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

// add contact
const contact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("api/contact/add", contactData, config);

  return response.data;
};

// // Get user goals
// const getContacts = async (token) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }

//     const response = await axios.get(API_URL, config)

//     return response.data
//   }

const authService = {
  register,
  logout,
  login,
  contact,
  getUserData,
  updateProfile,
  changePassword,
  updatePicture,
};

export default authService;
