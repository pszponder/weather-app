// Input: city name
// Output: city name, weather state, current weather, low temperature, high temperature

// Declare variables
let city = "";
let weatherState = "";
let currentWeather = "";
let lowTemp = "";
let highTemp = "";

// Attatch event listener to the submit button to extract the user entered city name
// TODO: Add fetchData functions to extract data and run in the eventlistener as well
document.getElementById("submit").addEventListener("click", () => {
  let cityName = document.getElementById("city-name-input").value;
  city = cityName.toLowerCase();
});

// Fetch data from the openWeather api

// Set the openweathermap.org API Key
let apiKey = "f7cac34aa355b8f5cc5fa7c3833a0015";
let units = "imperial"; // standard (kelvin), metric (celcius), imperial (farenheight)
city = "chicago"; // TODO: Set a temporary value for city
let weatherPromise = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
);

// Parse the weather information and extract the relevant outputs
weatherPromise
  .then((response) => {
    return response.json();
  })
  .then((resData) => {
    console.log("Data Parsed: ...", resData);

    weatherState = resData.weather[0].main;
    console.log(weatherState);

    currentWeather = resData.main.temp;
    console.log(currentWeather);

    lowTemp = resData.main.temp_min;
    console.log(lowTemp);

    highTemp = resData.main.temp_max;
    console.log(highTemp);
  })
  .catch((error) => {
    console.log(error);
  });

// Display the weather information
