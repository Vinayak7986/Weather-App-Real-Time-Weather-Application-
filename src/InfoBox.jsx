import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=735&auto=format&fit=crop"

    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(
        <div 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh"
            }}
        >
            <Card sx={{ maxWidth: 645 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                />

                <CardContent>
                    <Typography variant="h5">
                        <b>{info.city}{
                            info.humidity>80?<AcUnitIcon/>:info.temp>15?<SunnyIcon/>:<ThunderstormIcon/>}</b>
                    </Typography>

                    <Typography variant="body2" component="span">
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Min Temp = {info.tempMin}&deg;C</div>
                        <div>Max Temp = {info.tempMax}&deg;C</div>
                        <div>
                            Weather is <i>{info.weather}</i>, feels like {info.feelsLike}&deg;C
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}