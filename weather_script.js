const axios = require('axios');

const API_KEY = 'your_api_key_here'; // replace with your OpenWeatherMap API key
const CITY = 'London';

async function retrieveWeatherData() {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}

function displayWeatherData(data) {
    console.log(`Location: ${data.name}`);
    console.log(`Temperature: ${data.main.temp}`);
    console.log(`Condition: ${data.weather[0].description}`);
}

// Call the functions
retrieveWeatherData()
    .then(displayWeatherData)
    .catch(console.error);