import axios from 'axios'

const API_URL = 'http://localhost:5000/user/'


// update profile
const updateProfile = async (token,goalData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log("body: "+ goalData);
  const response = await axios.patch(API_URL +'profile/update', goalData,config)

  return response.data
}

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

  // Get contats
const getUsers = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL+"/profiles", config)
  
    return response.data
  }

const profileService = {
  updateProfile,
//   createGoal,
//   deleteGoal,
//   chooseEvent,
  getUsers,
}

export default profileService