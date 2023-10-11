import axios from "axios";

// console.log(axios);
// const axios = require("axios");

axios.defaults.baseURL = "http://api.weatherapi.com/v1";
// axios.defaults.headers["X-API-Key"] = "497e77810eb5470c988122419232107";

const API_KEY = "497e77810eb5470c988122419232107";

export const fetchData = async () => {
  const response = await axios(`forecast.json?key=${API_KEY}&q=Kyiv&days=3`);
  //   const data = await response.json();
  return response;
};
