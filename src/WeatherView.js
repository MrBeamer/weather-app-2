import { formatDate, capitalize } from "./helper.js";

class WeatherView {
  constructor() {
    this._weatherForm = document.querySelector("#weatherForm");
    this._cityName = document.getElementById("cityName");
    this._tempMin = document.getElementById("tempMin");
    this._tempMax = document.getElementById("tempMax");
    this._feelsLike = document.getElementById("feelsLike");
    this._windSpeed = document.getElementById("windSpeed");
    this._weatherIcon = document.getElementById("weatherIcon");
    this._date = document.getElementById("date");
    this._city = document.getElementById("city");
    this._temp = document.getElementById("temp");
    this._condition = document.getElementById("condition");
  }

  renderWeatherData(location, weatherData) {
    this._city.innerText = capitalize(location);
    this._date.innerText = formatDate(weatherData.datetime);
    this._weatherIcon.innerText = this.lookUpWeatherIcon(weatherData.icon);
    this._temp.innerText = `${Math.round(weatherData.temp)}°C`;
    this._condition.innerText = weatherData.conditions;
    this._tempMin.innerText = `${Math.round(weatherData.tempmin)}°C`;
    this._tempMax.innerText = `${Math.round(weatherData.tempmax)}°C`;
    this._feelsLike.innerText = `${Math.round(weatherData.feelslike)}°C`;
    this._windSpeed.innerText = `${Math.round(weatherData.windspeed)} km/h`;
  }

  lookUpWeatherIcon(weatherCondition) {
    let icon = {
      "clear-day": "☀️",
      snow: "❄️",
      wind: "🌬️",
      rain: "🌧️",
      fog: "🌫️",
      cloudy: "☁️",
      "partly-cloudy-day": "⛅️",
      "clear-night": "🌕",
      "partly-cloudy-night": "🌗",
    };
    return icon[weatherCondition] || "?";
  }
}

export { WeatherView };
