"use strict";
(() => {
  // src/js/change_unit.ts
  var findUnit = (unitBox2) => {
    if (unitBox2.checked) {
      return "C";
    }
    return "F";
  };
  var findValue = (temperature2) => {
    const textContent = temperature2.textContent;
    if (!textContent) {
      return NaN;
    }
    const value = parseInt(textContent.slice(0, -3), 10);
    return value;
  };
  var convert = (unit2, value) => {
    if (unit2 === "F") {
      value = Math.round(value * (9 / 5) + 32);
    } else {
      value = Math.round((value - 32) * (5 / 9));
    }
    return value;
  };
  var parseValue = (temperature2, value, unit2) => {
    temperature2.textContent = `${value} \xB0${unit2}`;
  };
  function change_unit_default(unitBox2, unit2, temperature2) {
    unit2 = findUnit(unitBox2);
    let value = findValue(temperature2);
    if (isNaN(value)) {
      return;
    }
    value = convert(unit2, value);
    parseValue(temperature2, value, unit2);
  }

  // src/js/get_image.ts
  async function getImage(keyword, apiKey) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${keyword}`);
    const data = await response.json();
    return data.data.images.original.url;
  }

  // src/js/get_weather.ts
  async function getWeather(city2, apiKey) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}`);
    const data = await response.json();
    return data;
  }

  // src/js/parse_weather.ts
  function parse_weather_default(weather) {
    const parsedWeather = {
      temp: weather.main.temp - 273.15,
      wind: weather.wind.speed,
      humidity: weather.main.humidity,
      name: weather.name,
      weather: weather.weather[0].description
    };
    return parsedWeather;
  }

  // src/js/index.ts
  var assertElementIsInput = (element) => {
    if (element.tagName !== "INPUT") {
      throw new Error(`Element ${element} is not an input`);
    }
  };
  var myApiKey = "614693c0297cf8983a515bfd03f6138e";
  var myApiKey2 = "9wfaKTQPXIUXonOh3sQOK2itvkXQi60c";
  var validate = document.getElementById("validate");
  var city = document.getElementById("city");
  var cityShow = document.getElementById("cityShow");
  var state = document.getElementById("state");
  var temperature = document.getElementById("temp");
  var humidity = document.getElementById("humidity");
  var container = document.getElementById("weather");
  var unitBox = document.getElementById("unitBox");
  var wind = document.getElementById("wind");
  var image = document.getElementById("image");
  var tempSwitch = document.getElementById("tempSwitch");
  var unit = "C";
  if (validate && city && cityShow && state && temperature && humidity && container && unitBox && wind && image && tempSwitch) {
    assertElementIsInput(city);
    assertElementIsInput(unitBox);
    validate.addEventListener("click", () => {
      getWeather(city.value, myApiKey).then((response) => {
        const myWeather = parse_weather_default(response);
        getImage(myWeather.weather, myApiKey2).then((response2) => {
          image.setAttribute("src", response2);
          container.setAttribute("style", `background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('${response2}');`);
          temperature.textContent = `${Math.round(myWeather.temp)} \xB0${unit}`;
          humidity.textContent = `${myWeather.humidity} %`;
          wind.textContent = `${myWeather.wind} km/h`;
          cityShow.textContent = myWeather.name;
          state.textContent = myWeather.weather;
          tempSwitch.className = "d-flex justify-content-center align-items-center d-block";
          if (!unitBox.checked) {
            unitBox.checked = true;
          }
        });
      });
    });
    unitBox.addEventListener("change", () => {
      change_unit_default(unitBox, unit, temperature);
    });
  }
})();
