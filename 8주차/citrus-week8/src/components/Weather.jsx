import React, { useState } from "react";
import axios from "axios";

const API_KEY = "4a856a412f0fed14bc7e29f576dbdd73";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const saveCity = (event) => {
    setCity(event.target.value);
    //console.log(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await searchWeather(city);
        setWeatherData(data);
      } catch (error) {
        console.error("ERROR", error);
      }
    }
  };

  const searchWeather = async (city) => {
    try {
      const apiKey = API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const response = await axios.get(apiUrl);
      const Info = {
        name: response.data.name,
        temp: response.data.main.temp,
        cloud: response.data.weather[0].main,
      };

      return Info;
    } catch (error) {
      throw new Error("Error fetching weather information");
    }
  };

  return (
    <div className="Wrapper">
      <div className="Input">
        <input
          type="text"
          placeholder="도시를 입력하세요"
          value={city}
          onChange={saveCity}
          onKeyPress={handleKeyPress}
        ></input>
        {weatherData && (
          <div className="WeatherData">
            <div className="City">{weatherData.name}</div>
            <div className="Temp">
              {Math.round((weatherData.temp - 273.15) * 10) / 10}°C
            </div>
            <div className="Cloud">{weatherData.cloud}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
