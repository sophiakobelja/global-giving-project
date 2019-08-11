import axios from "axios";

export default axios.create({
  baseURL: "https://api.globalgiving.org/api",
  responseType: "json"
});

export const API_KEY = '2556f972-549a-439c-928b-240a82a4dd1c'