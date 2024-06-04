const fetch = require('node-fetch');

// Function to retrieve weather data
async function retrieveWeatherData() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error retrieving weather data:', error);
        return null;
    }
}

// Function to display weather data
function displayWeatherData(weatherData) {
    if (weatherData) {
        console.log('Current Weather:');
        console.log('Location:', weatherData.location.name);
        console.log('Temperature:', weatherData.current.temp_c + '°C');
        console.log('Condition:', weatherData.current.condition.text);
    } else {
        console.log('No weather data available.');
    }
}

// Call the functions
retrieveWeatherData()
    .then(displayWeatherData);


