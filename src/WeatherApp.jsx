import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        if(newInfo){
            setWeatherInfo(newInfo);
        }
    };

    return(
        <div style={{textAlign:"center", backgroundColor:"white", minHeight: "100vh"}}>
            <h1 style={{color:"black"}}>Weather App</h1>
            <br></br>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}