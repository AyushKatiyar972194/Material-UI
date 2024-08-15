import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const INIT_URL ="https://images.hdqwalls.com/wallpapers/clouds-summer-weather-5k-1b.jpg";
    const RAIN_URL="https://img.freepik.com/premium-photo/gloomy-rainy-day-sad_87720-110673.jpg";
    const HOT_URL="https://th.bing.com/th/id/OIP.CHsazziMLPyFV8qfZhPIjAHaE7?w=509&h=339&rs=1&pid=ImgDetMain";
    const COLD_URL="https://s4.scoopwhoop.com/anj/snow/50e4de95-1be0-4440-9efa-995d6eee52ee.jpg";

    return(
        <div className="InfoBox">
            <h1>WeatherInfo-{info.weather}</h1>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ? RAIN_URL
          : info.temp>15
          ? HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80
          ? <ThunderstormIcon/>
          : info.temp>15
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} style={{fontSize:17}}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather} </i>and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}