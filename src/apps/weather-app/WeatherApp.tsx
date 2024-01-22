import React, { useState } from 'react';
import SearchBox from './components/InputBox';
import WeatherCard from './components/WeatherCard';
import { fetchData, WeatherData } from './utils/api';
import "./style.css"

const IMAGE_BASE_PATH = '/assets/images/';

const getWeatherIconSrc = (weatherType: string): string => {
  switch (weatherType) {
    case 'Clouds':
      return `${IMAGE_BASE_PATH}clouds.png`;
    case 'Clear':
      return `${IMAGE_BASE_PATH}clear.png`;
    case 'Rain':
      return `${IMAGE_BASE_PATH}rain.png`;
    case 'Drizzle':
      return `${IMAGE_BASE_PATH}drizzle.png`;
    case 'Mist':
      return `${IMAGE_BASE_PATH}mist.png`;
    default:
      return '';
  }
};

const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchData(city);
      setWeatherData(data);
      setError(false);
    } catch (error) {
      setWeatherData(null);
      setError(true);
    }
  };

  return (
    <div className="weather-card">
      <SearchBox onSearch={handleSearch} />
      {error && <div className="error"><p>Invalid city name</p></div>}
      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temperature={`${Math.round(weatherData.main.temp)}`}
          humidity={`${weatherData.main.humidity} %`}
          windSpeed={`${weatherData.wind.speed} Km/h`}
          weatherIconSrc={getWeatherIconSrc(weatherData.weather[0].main)}
        />
      )}
    </div>
  );
};

export default WeatherApp;