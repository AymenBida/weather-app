const axios = require('axios');

export default async function getWeather(city, apiKey) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    return response;
  } catch (error) {
    return error;
  }
}