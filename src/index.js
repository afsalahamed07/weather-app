import style from "./style.css";
import { weather } from "./model/weather";
import { getWeatherByCity, getWeather } from "./infra/openWeatherApi";
import api from "./infra/openWeatherApiKey.json";

renderWeather();

const BODY = document.querySelector("body");
const weatherBox = document.querySelector(".weather-box");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const cloud = document.querySelector(".cloud");
const wind = document.querySelector(".wind");

const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = e.target.value;
    renderWeather(inputValue);
  }
});

async function renderWeather(cityName = "colombo") {
  try {
    // lat and long of kalmunai, eastern, sri lanka
    // const data = await getWeather(7.41, 81.82, api.key);
    const data = await getWeatherByCity(cityName, api.key);

    const w1 = weather(data);

    city.innerText = w1.getCity();
    temp.innerText = "Temp: " + w1.getTemp();
    cloud.innerText = "Cloud: " + w1.getCloud();
    wind.innerText = "Wind: " + w1.getWind();
  } catch (err) {
    console.log(err);
  }
}
