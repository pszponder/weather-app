// Input: city name
// Output: city name, weather state, current weather, low temperature, high temperature

// Declare variables
let city = "";
let weatherState = "";
let currentWeather = "";
let lowTemp = "";
let highTemp = "";

// Attatch event listener to the submit button
document.getElementById("submit").addEventListener("click", () => {
  // Obtain the cityName from user input
  let cityName = document.getElementById("city-name-input").value;
  city = cityName.toLowerCase(); // convert cityName to lower case

  // Call the fetchWeatherData funciton
  fetchWeatherData(city);
});

// Define function to extract data from the openweathermap.org API and return the data
function fetchWeatherData(city) {
  // Set the openweathermap.org API Key
  let apiKey = "f7cac34aa355b8f5cc5fa7c3833a0015";
  let units = "imperial"; // standard (kelvin), metric (celcius), imperial (farenheight)

  // Call the fetch function on th openweathermap API
  let weatherPromise = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
  );

  // Parse the weather information and extract the relevant outputs
  weatherPromise
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      // console.log("Data Parsed: ...", resData);
      document.getElementById("city-name-output").innerHTML =
        city.toUpperCase();

      weatherState = resData.weather[0].main;
      document.getElementById("weather-state").innerHTML = weatherState;

      currentWeather = resData.main.temp;
      document.getElementById("weather-current").innerHTML =
        "<strong>" + String(currentWeather) + "&#176F" + "</strong>";

      lowTemp = resData.main.temp_min;
      document.getElementById("weather-low").innerHTML =
        String(lowTemp) + "&#176F";

      highTemp = resData.main.temp_max;
      document.getElementById("weather-high").innerHTML =
        String(highTemp) + "&#176F";
    })
    .catch((error) => {
      console.log(error);
    });
}
