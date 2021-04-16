import '../css/styles.css';
import changeUnit from './change_unit';
import getImage from './get_image';
import getWeather from './get_weather';
import parseWeather from './parse_weather';

const myApiKey = '614693c0297cf8983a515bfd03f6138e';
const myApiKey2 = '9wfaKTQPXIUXonOh3sQOK2itvkXQi60c';
const validate = document.getElementById('validate');
const city = document.getElementById('city');
const cityShow = document.getElementById('cityShow');
const state = document.getElementById('state');
const temperature = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const container = document.getElementById('weather');
const unitBox = document.getElementById('unitBox');
const wind = document.getElementById('wind');
const image = document.getElementById('image');
const tempSwitch = document.getElementById('tempSwitch');
const unit = 'C';

validate.addEventListener('click', () => {
  getWeather(city.value, myApiKey).then(response => {
    const myWeather = parseWeather(response);
    getImage(myWeather.weather, myApiKey2).then(response => {
      image.setAttribute('src', response);
      container.setAttribute('style', `background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('${response}');`);
      temperature.textContent = `${Math.round(myWeather.temp)} °${unit}`;
      humidity.textContent = `${myWeather.humidity} %`;
      wind.textContent = `${myWeather.wind} km/h`;
      cityShow.textContent = myWeather.name;
      state.textContent = myWeather.weather;
      tempSwitch.className = 'd-flex justify-content-center align-items-center d-block';
      if (!unitBox.checked) {
        unitBox.checked = true;
      }
    });
  });
});

unitBox.addEventListener('change', () => {
  changeUnit(unitBox, unit, temperature);
});