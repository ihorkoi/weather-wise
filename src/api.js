import axios from "axios";

axios.defaults.baseURL = "https://api.weatherapi.com/v1";

export const fetchData = async (query) => {
  try {
    const response = await axios(
      `forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${query}&days=3`
    );
    return response;
  } catch (err) {
    throw new Error(err.response.data.error.message)
  }
}
