import axios from "../axios";

// Create new Contact
const createContact = async (contactData, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.post("api/contact/add", contactData);

  return response.data;
};

// Get user goals
const getContacts = async () => {
  const response = await axios.get("api/contact");
  // console.log(response);
  return response.data;
};

const contactService = {
  getContacts,
  createContact,
};

export default contactService;
