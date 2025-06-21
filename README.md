# 🌤️ Simple Weather App With Angular

## Features

- Search for weather by city
- View temperature, humidity, wind speed, and weather description
- Add/remove favorite cities
- Cached weather data for faster loading
- Dynamic backgrounds based on weather

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/angular-weather-app.git
   cd angular-weather-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up your OpenWeatherMap API key:
   - Create `src/environments/environment.ts` and `src/environments/environment.development.ts`
   - Add your API key:
     ```ts
     export const environment = {
       WEATHER_API_KEY: "your_openweathermap_api_key",
     };
     ```

### Running the App

```sh
npm start
```

The app will be available at [http://localhost:4200](http://localhost:4200).

## Project Structure

```
angular-weather-app/
│
├── public/
│   └── backgrounds/
│       ├── atmosphere.jpg         # Background for atmosphere conditions
│       ├── clear.jpg              # Background for clear weather
│       ├── clouds.jpg             # Background for cloudy weather
│       ├── default-background.jpg # Default background image
│       ├── drizzle.jpg            # Background for drizzle
│       ├── rain.jpg               # Background for rain
│       ├── snow.jpg               # Background for snow
│       ├── thunderstorm.jpg       # Background for thunderstorms
│       └── cloud-icon.png         # Browser tab icon
│
├── src/
│   └── app/
│       ├── components/
│       │   ├── favorites/         # Favorite cities component
│       │   ├── header/            # App header component
│       │   ├── layout/            # Layout and container component
│       │   ├── search-bar/        # City search bar component
│       │   └── weather/           # Weather display component
│       ├── interfaces/
│       │   └── weather-data.ts    # TypeScript interface for weather data
│       ├── services/
│       │   └── weather-api.service.ts # Service for fetching weather data from API
│       ├── utils/
│       │   └── weather-cache.ts   # Utility for caching weather data
│       ├── app.component.css      # Root component styles
│       ├── app.component.html     # Root component template
│       ├── app.component.ts       # Root component logic
│       ├── app.config.ts          # App configuration
│       └── app.routes.ts          # App routing configuration
│   └── environments/
│       ├── environment.development.ts # Development environment variables
│       └── environment.ts         # Default environment variables
│   ├── index.html                 # Main HTML file
│   ├── main.ts                    # App entry point
│   └── styles.css                 # Global styles
│
├── .editorconfig                  # Editor configuration
├── .gitignore                     # Git ignore rules
├── angular.json                   # Angular CLI configuration
├── package.json                   # Project dependencies and scripts
├── README.md                      # Project documentation
└── tsconfig.json                  # TypeScript configuration
```

_Weather data provided by [OpenWeatherMap](https://openweathermap.org/)._
