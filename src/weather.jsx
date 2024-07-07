import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weather.css';

function Api() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Peshawar&appid=560d95345447bb7733a509551edf52cc&units=metric')
            .then(res => {
                setWeather(res.data);
                console.log(res);
            })
            .catch(error => {
                console.log('Error fetching data', error);
            });
    }, []);
    let formatTime = (timestamp) => {
        let date = new Date(timestamp * 1000);
        return date.toLocaleTimeString(); 
    };
    return (
        <div>
            {weather ? (
                <div className="container">
                    <div className="weather-info">
                        <h3>Temperature: {weather.main.temp}°C</h3>
                        <h3>Feels Like: {weather.main.feels_like}°C</h3>
                    </div>
                    <div className="weather-info">
                        <h3>Wind Speed: {weather.wind.speed} m/s</h3>
                        <h3>Clouds: {weather.clouds.all}%</h3>
                    </div>
                    <div className='weather-info'>
                        <h3>Sunrise: {formatTime(weather.sys.sunrise)}</h3>
                        <h3>SunSet: {formatTime(weather.sys.sunset)}</h3>
                        </div>
                </div>
            ) : (
                <p>Loading.......</p>
            )}
        </div>
    );
}

export default Api;
