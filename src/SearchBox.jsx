import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import "./SearchBox.css";
import formatUnixTime from "./helper";

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");

  const API_KEY = "7c3ba88eb94544ce5a5ab7813d897901";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherinfo = async () => {
    const weatherInfo = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    const allInfo = {
      city: weatherInfo.data.name,
      fells_like: weatherInfo.data.main.feels_like,
      humidity: weatherInfo.data.main.humidity,
      pressure: weatherInfo.data.main.pressure,
      temp: weatherInfo.data.main.temp,
      sunrise: formatUnixTime(weatherInfo.data.sys.sunrise),
      sunset: formatUnixTime(weatherInfo.data.sys.sunset),
      wind_speed: weatherInfo.data.wind.speed,
      weather_main: weatherInfo.data.weather[0].main,
    };
    console.log(allInfo);
  return allInfo;
  };

  

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setCity("");
   let result= await getWeatherinfo();
   updateInfo(result);


  };

  return (
    <div>
      <form action="" className="SearchBox" onSubmit={handleForm}>
        <TextField
          id="City-Search"
          label="Search city"
          variant="outlined"
          value={city}
          onChange={handleInput}
        />
       
        <Button variant="contained" type="submit" className="searchButton">
          Weather{" "}
        </Button>
      </form>
    </div>
  );
}
