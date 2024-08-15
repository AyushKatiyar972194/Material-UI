import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp(){
    const[WeatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:35.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center", backgroundColor:"Aliceblue"}}>
            <h2>Weather App by Delta-Student</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={WeatherInfo}></InfoBox>
        </div>
    );
}