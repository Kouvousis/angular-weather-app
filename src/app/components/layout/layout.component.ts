import { Component, Input, OnChanges } from '@angular/core';
import { WeatherData } from '../../interfaces/weather-data';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent, SearchBarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  @Input() weatherData: WeatherData | null = null;

  currentBackground = 'default-background';

  get backgroundImageUrl(): string {
    if (!this.weatherData) {
      return 'url(backgrounds/default-background.jpg)';
    }
    const weatherMain = this.weatherData.weather[0].main.toLowerCase();

    switch (weatherMain) {
      case 'atmosphere':
        return 'url(backgrounds/atmosphere.jpg)';
      case 'clear':
        return 'url(backgrounds/clear.jpg)';
      case 'clouds':
        return 'url(backgrounds/clouds.jpg)';
      case 'drizzle':
        return 'url(backgrounds/drizzle.jpg)';
      case 'rain':
        return 'url(backgrounds/rain.jpg)';
      case 'snow':
        return 'url(backgrounds/snow.jpg)';
      case 'thunderstorm':
        return 'url(backgrounds/thunderstorm.jpg)';
      default:
        return 'url(backgrounds/default-background.jpg)';
    }
  }
}
