class WeatherModel {
  constructor() {}

  async getWeatherData(cityName) {
    const apiKey = process.env.API_KEY;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/last30days?unitGroup=metric&key=${apiKey}&include=days`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const weatherData = await response.json();
        return weatherData;
      } else {
        throw new Error(`Request failed: ${response.status}`);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getCoordinates() {
    try {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject),
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getLocation() {
    try {
      const apiKey = process.env.API_KEY;
      const geoLocation = await this.getCoordinates();
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${geoLocation.coords.latitude},${geoLocation.coords.longitude}?key=${apiKey}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const city = await data.timezone.split("/")[1];
        return city;
      } else {
        throw new Error(`Request failed: ${response.status}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
export { WeatherModel };
