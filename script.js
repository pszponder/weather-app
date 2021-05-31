// Input: city name
// Output: city name, weather state, current weather, low temperature, high temperature

// Store the city name in a constant variable
let city = '';

// Attatch event listener to the submit button to extract the user entered city name
document.getElementById('submit').addEventListener('click', () => {
  let cityName = document.getElementById('city-name-input').value;
  city = cityName.toLowerCase();
});

// Retrieve the weather information from an API

// Parse the weather information and extract the relevant outputs

// Display the weather information