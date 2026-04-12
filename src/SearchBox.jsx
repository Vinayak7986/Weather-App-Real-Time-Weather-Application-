import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [City,setCity]=useState("");
    let [error,setError]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0d5a0a11a1367e69fd7d310063453b53";

    let getWeatherInfo = async () => {
        try{
            setError("");

            let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            // ✅ FIX: handle API error properly
            if(jsonResponse.cod !== 200){
                throw new Error();
            }

            let result = {
                city: City,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result;

        } catch(err){
            setError("No such place ");
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    
    let handleSumbit = async (evt) => {
        evt.preventDefault();

        let newInfo = await getWeatherInfo();

        if(newInfo){
            updateInfo(newInfo);
        }

        setCity("");
    };

    return(
        <div>
            <form onSubmit={handleSumbit}>
                <TextField 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={City} 
                    onChange={handleChange} 
                />
                <br />
                <br></br>
                <Button variant="contained" type="submit">Search</Button>

                {error && <p style={{color:"red"}}>{error}</p>}
            </form>
        </div>
    );
}