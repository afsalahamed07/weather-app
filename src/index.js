import { weather } from "./model/weather";
import { apiCall, getWeather } from "./infra/openWeatherApi";
import api from "./infra/openWeatherApiKey.json";

const BODY = document.querySelector("body");

const w1 = weather("Burmingom");

console.log(w1.getTemp());

try {
  const data = await getWeather(33.44, -94.04, api.key);
  console.log(data);
} catch (err) {
  console.log("Error Occured");
}
