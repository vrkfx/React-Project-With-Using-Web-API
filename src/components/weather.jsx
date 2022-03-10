import React, { useEffect, useState } from "react";
import "./weather.css";

const Weather = () => {

    
    const [responseObj, setresponseObj] = useState({})
    
    function GetWeather(e) {
    
        e.preventDefault();
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Adelaide", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "5658c10761msh34683f011ab8d5bp13c4e2jsn6dbdd79a4842"
            }
        })
            // .then(response => 
            //     console.log(response.json());
            // )
            .then(response => 
                response.json()
            )
            .then(response => {
                setresponseObj(response)
             } )

    }


    return (
        <div className="weather weather">
            <h1>Find Weather</h1>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={GetWeather}> Get Weather</button>
        </div>
    );
}

export default Weather;