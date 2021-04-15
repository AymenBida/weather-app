// import { createPlugin } from 'stylelint';
import getWeather from './get_weather';
import parseWeather from './parse_weather';

const myApiKey = '614693c0297cf8983a515bfd03f6138e';
const validate = document.getElementById('validate');
const city = document.getElementById('city');
const temperature = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

validate.addEventListener('click', () => {
  const weather = getWeather(city.value, myApiKey).then(response => {
    const myWeather = parseWeather(response);
    temperature.textContent = myWeather.temp;
    humidity.textContent = myWeather.humidity;
    wind.textContent = myWeather.name;
  });
  console.log(weather);
});

// const weather = getWeather('ariana', myApiKey).then(response => console.log(parseWeather(response)));
