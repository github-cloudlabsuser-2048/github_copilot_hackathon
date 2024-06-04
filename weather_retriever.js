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

// Export the functions
module.exports = {
    retrieveWeatherData,
    displayWeatherData
};
     
    //  In the code above, we first import the  node-fetch  module and define two functions:  retrieveWeatherData  and  displayWeatherData . The  retrieveWeatherData  function uses the  fetch  function to make an API request to the WeatherAPI service and retrieve the current weather data for London. The  displayWeatherData  function takes the weather data as an argument and logs the location, temperature, and condition to the console. 
    //  We then call the  retrieveWeatherData  function and pass the  displayWeatherData  function as a callback to log the weather data to the console. Finally, we export the two functions so that they can be used in other modules. 
    //  Step 3: Create a Test File 
    //  Next, we will create a test file to test the  retrieveWeatherData  function. Create a new file called  weather_retriever.test.js  in the same directory as the  weather_retriever.js  file and add the following code: 
    //  // Path: weather_retriever.test.js

const { retrieveWeatherData } = require('./weather_retriever');



