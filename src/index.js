import style from "./style.css";
import { weather } from "./model/weather";
import { getWeatherByCity } from "./infra/openWeatherApi";
import api from "./infra/openWeatherApiKey.json";
import loader from "./loader.gif";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const cloud = document.querySelector(".cloud");
const wind = document.querySelector(".wind");
const loaderBox = document.querySelector(".loader");
const weatherBox = document.querySelector(".weather");

const loaderGif = new Image();
loaderGif.src = loader;
loaderBox.appendChild(loaderGif);

renderWeather();

const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = e.target.value;
    renderWeather(inputValue);
  }
});

async function renderWeather(cityName = "colombo") {
  try {
    loaderBox.classList.remove("hidden-box");
    loaderBox.classList.add("opacity-100");

    weatherBox.classList.remove("opacity-100");
    weatherBox.classList.add("hidden-box");

    const data = await getWeatherByCity(cityName, api.key);

    const w1 = weather(data);

    city.innerText = w1.getCity();
    temp.innerText = "Temp: " + w1.getTemp();
    cloud.innerText = "Cloud: " + w1.getCloud();
    wind.innerText = "Wind: " + w1.getWind();

    loaderBox.classList.add("hidden-box");
    loaderBox.classList.remove("opacity-100");

    weatherBox.classList.remove("hidden-box");
    weatherBox.classList.add("opacity-100");
  } catch (err) {
    console.log(err);
  }
}
