import axios from "axios"

const local_url = 'http://localhost:5000/api/'

export const addPlanifications = async (data) => {
    const addedplanification = await axios.post(local_url+'planifications', data)
    return addedplanification
}

export const getPlanifications = async() => {
    const planifications = await axios.get(local_url+'planifications')
    return planifications
}