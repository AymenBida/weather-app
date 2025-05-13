export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
  weather: {
    description: string;
  }[];
}

export default function (weather: WeatherData) {
  const parsedWeather = {
    temp: weather.main.temp - 273.15,
    wind: weather.wind.speed,
    humidity: weather.main.humidity,
    name: weather.name,
    weather: weather.weather[0].description,
  };
  return parsedWeather;
}