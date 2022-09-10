import axios from "axios";

const instance = axios.create({
  // baseURL: "https://scouts-tunisienne.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
  // baseURL: "https://vortexreaction.cyclic.app/",
  baseURL: "https://fine-ruby-bunny-shoe.cyclic.app/",
});

export default instance;
