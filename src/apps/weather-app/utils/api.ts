
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL= import.meta.env.VITE_REACT_APP_API_URL;


 export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    main: string;
  }[];
}

export const fetchData = async (city: string): Promise<WeatherData> => {
  const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data: WeatherData = await response.json();
  return data;
};