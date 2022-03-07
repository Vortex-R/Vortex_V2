import axios from 'axios'

const API_URL = "http://localhost:5000/user/";
const API_URL_EVENT = "http://localhost:5000/event/";
const API_URL_ORGANIZER = "http://localhost:5000/organizerP/";


// update profile
const updateProfile = async (token,goalData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
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

 
  // show event by id
const showEvent = async (token,id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL_EVENT+"/show/"+id , config)
  
    return response.data

  }


    // Get USERS
const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL+"/profiles", config)

  return response.data
}
  // show Organizer data
const getOrganizer = async (token,id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL_ORGANIZER+"profile" , config)
  
    return response.data
  }


  // update user role to organizer
  const updateUserToOrganizer = async (token, data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const body = {
      role: data.role,
      event: data.event
    }
    const id = data.userId;
    // console.log("hello: "+body.event);
    const response = await axios.patch(API_URL+"/role/"+id, body, config)
  
    return response.data
  }

const profileService = {
  updateProfile,
//   createGoal,
//   deleteGoal,
//   chooseEvent,
  getUsers,
  updateUserToOrganizer,
  showEvent,
  getOrganizer
}

export default profileService