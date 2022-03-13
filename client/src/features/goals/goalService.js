import axios from 'axios'

const API_URL = "http://vr-event.herokuapp.com/event/";
const API_URL_CONTACT = "http://vr-event.herokuapp.com/contact/";
const API_URL_USER = "http://vr-event.herokuapp.com/user/";


// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL +'add', goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}
// Get user goals
const getGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + id, config)
  return response.data
}



// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

// choose event by user
const chooseEvent = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const body = { idEvent:goalData }
    const response = await axios.patch(API_URL_USER +'affect/' , body, config)
  
    return response.data
  }
// Edit event
const editEvent = async ( data, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    console.log(data);
    const response = await axios.patch(API_URL + data.id, data, config)

  
    return response.data
  }

  // Get contats
const getContacts = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL_CONTACT, config)
  
    return response.data
  }

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  chooseEvent,
  getContacts,
  editEvent,
  getGoal,
}

export default goalService