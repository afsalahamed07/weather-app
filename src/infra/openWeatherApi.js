function apiCall(lat, lon, apiKey) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
}

async function getWeather(lat, lon, apiKey) {
  // returns a promise
  const response = await fetch(apiCall(lat, lon, apiKey));
  const weatherData = await response.json();

  return weatherData;
}

export { apiCall, getWeather };
