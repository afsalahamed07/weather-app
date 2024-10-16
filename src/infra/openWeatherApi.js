function apiCall(lat, lon, apiKey) {
  // return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
}

function apiCallByCity(city, apiKey) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
}

// Doubt would be why i have to wrap the funcition with async
async function getWeather(lat, lon, apiKey) {
  try {
    // returns a promise json weather response from openweather

    // await saying is like sayig pause the exceuction of this funciton
    // until we get the value
    const response = await fetch(apiCall(lat, lon, apiKey));
    const weatherData = await response.json();

    // without async the return would be
    // return Promise.resolve(weatherData)
    return weatherData;
  } catch (err) {
    console.log("Error happened");
    throw err;
  }
}

// Doubt would be why i have to wrap the funcition with async
async function getWeatherByCity(city, apiKey) {
  try {
    // returns a promise json weather response from openweather

    // await saying is like sayig pause the exceuction of this funciton
    // until we get the value
    const response = await fetch(apiCallByCity(city, apiKey));
    const weatherData = await response.json();

    // without async the return would be
    // return Promise.resolve(weatherData)
    return weatherData;
  } catch (err) {
    console.log("Error happened");
    throw err;
  }
}

export { getWeather, getWeatherByCity };
