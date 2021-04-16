export default function (weather) {
  const parsedWeather = {
    temp: weather.data.main.temp - 273.15,
    wind: weather.data.wind.speed,
    humidity: weather.data.main.humidity,
    name: weather.data.name,
    weather: weather.data.weather[0].description,
  };
  return parsedWeather;
}