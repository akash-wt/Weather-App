import InfoCard from "./infoCard";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Chandigarh",
    fells_like: 38.62,
    humidity: 59,
    pressure: 1004,
    sunrise: "05:48 AM",
    sunset: "07:07 PM",
    temp: 32.78,
    weather_main: "Snow",
    wind_speed: 3.04,
  });

  const updateInfo=(result)=>{
    setWeatherInfo(result);
  }


  return (
    <div className="WeatherApp" >
      <SearchBox updateInfo={updateInfo} />
      <InfoCard weatherInfo={weatherInfo} />
    </div>
  );
}
