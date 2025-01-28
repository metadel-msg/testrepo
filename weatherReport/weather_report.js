function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'fb3c8e1a1eca5877f03a0fb45626f3ed'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Feels Like: ${data.main.feels_like} &#8451;</p>
                <p>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Wind Direction: ${data.wind.deg}°</p>
                <p>Cloudiness: ${data.clouds.all}%</p>
                <p>Pressure: ${data.main.pressure} hPa</p>
                <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);