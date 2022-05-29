import axios from "axios";


const API_URL = "http://localhost:5000/api/user/";
const API_URL_CONTACT = "http://localhost:5000/api/contact/";

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + 'signup', userData)


if (response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
}
return response.data
}


// login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'signin', userData)


if (response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
}
return response.data
}


//Logout user
const logout = ()=> {
    localStorage.removeItem('user')
}


// add contact
const contact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL_CONTACT +'add', contactData, config)

  return response.data
}

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
    register, logout, login, contact
}


export default authService