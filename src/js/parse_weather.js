export default function (weather) {
  const parsedWeather = {
    temp: weather.data.main.temp,
    temp_max: weather.data.main.temp_max,
    temp_min: weather.data.main.temp_min,
    humidity: weather.data.main.humidity,
    name: weather.data.name,
    weather: weather.data.weather[0].main,
  };
  return parsedWeather;
}