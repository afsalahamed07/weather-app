import style from "./style.css";
import { weather } from "./model/weather";
import { getWeatherByCity, getWeather } from "./infra/openWeatherApi";
import api from "./infra/openWeatherApiKey.json";

const BODY = document.querySelector("body");
const weatherBox = document.querySelector(".weather-box");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const cloud = document.querySelector(".cloud");
const wind = document.querySelector(".wind");

try {
  // lat and long of kalmunai, eastern, sri lanka
  // const data = await getWeather(7.41, 81.82, api.key);
  const data = await getWeatherByCity('colombo', api.key);
  console.log(data);

  const w1 = weather(data);
  console.log("name: ", w1.getCity());
  console.log("temp: ", w1.getTemp());

  city.innerText = w1.getCity();
  temp.innerText = "Temp: " + w1.getTemp();
  cloud.innerText = "Cloud: " + w1.getCloud();
  wind.innerText = "Wind: " + w1.getWind();
} catch (err) {
  console.log(err);
}
