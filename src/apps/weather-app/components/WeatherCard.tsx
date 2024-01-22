import React from 'react';

interface WeatherCardProps {
  city: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
  weatherIconSrc: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  humidity,
  windSpeed,
  weatherIconSrc,
}) => {
  return (

    <div className="weather">
      <img src={weatherIconSrc} className="weather-icon" alt="Weather Icon" />
      <h1 className="temp">{temperature}&#xb0;c</h1>
      <h2 className="city">{city}</h2>
      
      <div className="details">
        <div className="col">
          <img src="/assets/images/humidity.png" alt="Humidity" />
          <div>
            <p className="humidity">{humidity}</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="./assets/images/wind.png" alt="Wind Speed" />
          <div>
            <p className="wind">{windSpeed}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
