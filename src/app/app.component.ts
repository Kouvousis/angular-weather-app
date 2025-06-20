import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherData } from './interfaces/weather-data';
import { WeatherApiService } from './services/weather-api.service';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './components/favorites/favorites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LayoutComponent,
    SearchBarComponent,
    WeatherComponent,
    CommonModule,
    FavoritesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-weather-app';

  weatherData: WeatherData | null = null;
  errorMessage: string | null = null;
  favorites: string[] = [];

  constructor(private weatherApi: WeatherApiService) {}

  onSearch(city: string) {
    this.weatherApi.getWeatherData(city).subscribe({
      next: (data: WeatherData) => {
        this.weatherData = data;
        this.errorMessage = null;
      },
      error: (err) => {
        this.weatherData = null;
        this.errorMessage = err.message || 'Failed to fetch weather data';
      },
    });
  }

  onToggleFavorite(city: string) {
    if (this.favorites.includes(city)) {
      this.favorites = this.favorites.filter((fav) => fav !== city);
    } else {
      this.favorites = [...this.favorites, city];
    }
  }

  onSelectFavorite(city: string) {
    this.onSearch(city);
  }
}
