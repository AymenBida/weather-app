const axios = require('axios').default;

export default async function getWeather(city, apiKey) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}