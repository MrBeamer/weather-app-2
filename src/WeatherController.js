import { WeatherView } from "./WeatherView.js";
import { WeatherModel } from "./WeatherModel.js";
class WeatherController {
  _view = new WeatherView();
  _model = new WeatherModel();

  constructor() {
    this._view._weatherForm.addEventListener("submit", (event) =>
      this.handleUserInput(event),
    );
  }

  async loadWeather(cityName) {
    const weatherData = await this._model.getWeatherData(cityName);
    const weatherDataToday = weatherData.days[0];
    this._view.renderWeatherData(cityName, weatherDataToday);
  }

  async handleUserInput(event) {
    event.preventDefault();
    const cityName = this._view._cityName.value.toLowerCase();
    await this.loadWeather(cityName);
  }

  async init() {
    const cityName = await this._model.getLocation();
    await this.loadWeather(cityName);
  }
}

export { WeatherController };
