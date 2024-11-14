import axios from "axios";

const instance = axios.create({
  baseURL: "http://34.64.202.47:8080",
  withCredentials: true,
});

export default instance;