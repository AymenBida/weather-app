import type { WeatherData } from './parse_weather';

export default async function getWeather(city: string, apiKey: string): Promise<WeatherData> {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const data: WeatherData = await response.json();
  return data;
}