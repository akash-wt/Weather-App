import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";


export default function InfoCard({ weatherInfo }) {


  const weatherImages = {
    Clear:
      "https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Clouds:"https://images.unsplash.com/photo-1640343984859-9fa90710f208?q=80&w=2277&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Rain: "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Snow: "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Thunderstorm:
      "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=2382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Drizzle:
      "https://plus.unsplash.com/premium_photo-1661715276689-619fb1c79d6f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Mist: "https://images.unsplash.com/photo-1482225832719-e5d61b938db5?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Haze:"https://images.unsplash.com/18/misty-plank.JPG?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };
  
  const weatherImage =
    weatherImages[weatherInfo.weather_main] ||
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";


  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ width: 400 }}>
          <CardMedia
            component="img"
            alt={weatherInfo.weather_main}
            height="140"
            image={weatherImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <h3>{weatherInfo.weather_main} </h3>
              <p>Tempreture : {weatherInfo.temp}&deg;C </p>
              <p>Feels like : {weatherInfo.fells_like}&deg;C </p>
              <p>Humidity : {weatherInfo.humidity}% </p>
              <p>Sunrise : {weatherInfo.sunrise} </p>
              <p>Sunset : {weatherInfo.sunset} </p>
              <p> Pressure: {weatherInfo.pressure}mbar </p>
              <p>Wind Speed : {weatherInfo.wind_speed}kph </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
