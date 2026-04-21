# 🌦️ Weather App

A simple weather application built with **JavaScript**, following a clean **MVC (Model–View–Controller)** architecture.
It allows users to search for a city and view current weather data.

Live: https://mrbeamer.github.io/weather-app-2/

---

## 🚀 Features

* Search weather by city name
* Displays:

  * Current temperature
  * Min / Max temperature
  * Feels like temperature
  * Weather condition
  * Wind speed
* Weather icons based on conditions
* Uses browser geolocation (optional, for default city)
* Clean separation of concerns (MVC pattern)

---

## 🧱 Project Structure

```bash
src/
│
├── index.js              # Entry point
├── WeatherController.js  # Handles app logic
├── WeatherModel.js       # Fetches data from API
├── WeatherView.js        # Updates UI
├── helper.js             # Utility functions (e.g. formatDate)
└── styles.css            # Styling
```

---

## 🧠 Architecture

This project follows a simple MVC pattern:

* **Model** → Handles API calls and data fetching
* **View** → Manages DOM updates and rendering
* **Controller** → Connects Model and View, handles user input

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
API_KEY=your_api_key_here
```

> ⚠️ Note: This key is exposed in the frontend bundle. For real applications, use a backend to protect it.

---

## 🌐 API Used

* Weather data from:
  https://www.visualcrossing.com/

---

## 📦 Build

To create a production build:

```bash
npm run build
```

---

## 🧪 Future Improvements

* Better error handling (API failures, invalid input)
* Loading and error states in UI
* Refactor View for less repetition
* Move API key to backend for security
* Add forecast view (multiple days)
* Improve accessibility (labels, ARIA)

---

## 📄 License

This project is for learning purposes.
