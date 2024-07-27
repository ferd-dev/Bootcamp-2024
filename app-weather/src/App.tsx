
import { useState } from 'react';
import './App.css'
import mockWeatherData from './mockWeatherData';
import ButtonCity from './ButtonCity';
import WeatherCard from './WeatherCard';

type WeatherData = {
  name: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
}

function App() {
  const [search, setSearch] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [message, setMessage] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const handleSearch = (city: string) => {
    setSearchHistory([...searchHistory, city]);
  }

  const showWeatherData = (city: string) => {
    const data = mockWeatherData[city];
    data.name = city;
    setWeatherData(data);
  }

  const searching = () => {
    const city = search.trim();

    if (!city) return;
    if (searchHistory.includes(city)) return;
    if (!Object.keys(mockWeatherData).includes(city)) {
      setMessage(true);
      return;
    }

    setMessage(false);
    handleSearch(city);
    showWeatherData(city);
    setSearch('');
  }

  return (
    <>
      <div className='container'>
        <input
          className='input'
          type="text"
          placeholder='Search for a city'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {message && <small className='message'>City not found</small>}
        <button
          className='button'
          onClick={searching}
        >
          Search
        </button>
      </div>

      <div className='container-buttons'>
        {searchHistory.map((city, index) => (
          <ButtonCity
            key={index}
            city={city}
            setCity={showWeatherData} />
        ))}
      </div>

      {
        weatherData && (
          <WeatherCard
            name={weatherData.name}
            humidity={weatherData.humidity}
            temperature={weatherData.temperature}
            windSpeed={weatherData.windSpeed}
          />
        )
      }
    </>
  )
}

export default App
