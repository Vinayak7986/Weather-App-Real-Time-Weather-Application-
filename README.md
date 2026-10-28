<div align="center">

# 🌤️ Real-Time Weather Application
### *Modern, Responsive Weather Intelligence Dashboard Built with React.js, Vite & OpenWeather API*

[![Live Demo](https://img.shields.io/badge/Live_Demo-weather--app.vercel.app-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://weather-app-real-time-weather-appli.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![OpenWeather API](https://img.shields.io/badge/API-OpenWeatherMap-orange?style=for-the-badge&logo=cloud&logoColor=white)](https://openweathermap.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Overview
A high-performance, responsive single-page weather dashboard built using **React 18** and **Vite**. The application integrates the **OpenWeatherMap REST API** to deliver instantaneous, real-time atmospheric telemetry for any city globally, featuring dynamic weather condition badges, automatic card theme shifts (Rain, Hot, Cold), and graceful error boundaries.

---

## ✨ Key Architectural Features

- **Live Meteorological Telemetry:** Instantaneous data retrieval for temperature (°C), perceived temperature ("Feels Like"), relative humidity (%), atmospheric pressure (hPa), and minimum/maximum daily variances.
- **Dynamic Weather Theme Rendering:** Context-aware UI that automatically shifts card hero graphics and weather icons based on current meteorological conditions:
  - ☀️ **Hot / Sunny:** High-temperature alerts and sunny hero imagery (> 15°C).
  - 🌧️ **Rainy / Thunderstorm:** High humidity (> 80%) condition triggers.
  - ❄️ **Cold / Winter:** Freezing / low-temperature visual states (< 15°C).
- **Asynchronous Data Fetching & Error Handling:** Debounced input handling with structured `try/catch` network boundaries to gracefully display "No such place in our API" warnings without crashing.
- **Modular Component Design:** Follows strict unidirectional data flow where `WeatherApp.jsx` orchestrates state between `SearchBox.jsx` (data consumer/fetcher) and `InfoBox.jsx` (presentation layer).
- **Production-Ready Deployment:** Optimized production build with Vite code-splitting and asset minification deployed globally on **Vercel Edge Network**.

---

## 🏗️ System Architecture & Data Flow

```
┌────────────────────────────────────────────────────────┐
│                   WEATHERAPP (CONTAINER)               │
│          Manages top-level state: weatherInfo          │
│                      │                 │               │
│         (updateInfo) │                 │ (weatherInfo) │
│                      ▼                 ▼               │
│             SEARCHBOX (FORM)      INFOBOX (CARD VIEW)  │
│         • City input validation   • Temperature Metric │
│         • Asynchronous Fetch      • Humidity & Min/Max │
│         • Error Boundary          • Condition Graphic  │
│                      │                                 │
│                      ▼ (HTTPS GET JSON)                │
│         OPENWEATHERMAP REST API                        │
│    (api.openweathermap.org/data/2.5/weather)           │
└────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```
Weather-App/
├── public/                      # Static brand assets & favicon
├── src/
│   ├── assets/                  # Atmospheric condition graphics
│   ├── App.css                  # Global utility classes & animations
│   ├── App.jsx                  # Root view wrapper
│   ├── InfoBox.jsx              # Presentation card with condition-based graphics
│   ├── SearchBox.jsx            # Controlled input component with API dispatcher
│   ├── WeatherApp.jsx           # Master state coordinator & container
│   ├── index.css                # Typography & layout reset
│   └── main.jsx                 # Vite React DOM entry point
├── eslint.config.js             # Code quality & linting configuration
├── index.html                   # HTML5 template
├── package.json                 # Project dependencies & build scripts
└── vite.config.js               # Vite build pipeline & server setup
```

---

## 📊 Weather Telemetry Metrics

| Metric | Field | Unit | Visual Trigger |
| :--- | :--- | :--- | :--- |
| **City Name** | `city` | String | Formatted heading |
| **Current Temperature** | `temp` | °C | Highlighted primary gauge |
| **Perceived Temp** | `feelslike` | °C | Secondary subtitle descriptor |
| **Humidity** | `humidity` | % | Condition switch: `> 80%` displays Rainy |
| **Min / Max Variance** | `tempMin` / `tempMax`| °C | Daily envelope metrics |
| **Atmospheric State** | `weather` | String | Dynamic badge (Haze, Clear, Rain, Snow) |

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- An active **OpenWeatherMap API Key** (obtainable from [OpenWeather](https://openweathermap.org/api))

---

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vinayak7986/Weather-App-Real-Time-Weather-Application-.git
   cd Weather-App-Real-Time-Weather-Application-
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure API Credentials:**
   Inside `src/SearchBox.jsx`, configure your OpenWeatherMap API key:
   ```javascript
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "your_openweathermap_api_key_here";
   ```

4. **Launch development server:**
   ```bash
   npm run dev
   ```
   Open **`http://localhost:5173`** in your browser to view the application with hot module replacement (HMR).

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Live Demonstration
Experience the application live in production:  
👉 **[https://weather-app-real-time-weather-appli.vercel.app](https://weather-app-real-time-weather-appli.vercel.app)**

---

## 👨‍💻 Author
**Vinayak More**  
Software Engineer & Full-Stack Developer  
- **GitHub:** [@Vinayak7986](https://github.com/Vinayak7986)  
- **LinkedIn:** [vinayak-more-b37309264](https://www.linkedin.com/in/vinayak-more-b37309264/)  
- **Portfolio:** [vinayakmore.netlify.app](https://vinayakmore.netlify.app/)  

---

## 🛡️ License
This project is open-source and licensed under the MIT License.