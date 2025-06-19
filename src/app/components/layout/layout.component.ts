import { Component, Input, OnChanges } from '@angular/core';
import { WeatherData } from '../../interfaces/weather-data';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  @Input() weatherData: WeatherData | null = null;

  currentBackground = 'default-background';

  get backgroundImageUrl(): string {
    if (!this.weatherData) {
      return 'url(assets/backgrounds/default-background.jpg)';
    }
    const weatherMain = this.weatherData.weather[0].main.toLowerCase();

    switch (weatherMain) {
      case 'atmosphere':
        return 'url(assets/backgrounds/atmosphere.jpg)';
      case 'clear':
        return 'url(assets/backgrounds/clear.jpg)';
      case 'clouds':
        return 'url(assets/backgrounds/clouds.jpg)';
      case 'drizzle':
        return 'url(assets/backgrounds/drizzle.jpg)';
      case 'rain':
        return 'url(assets/backgrounds/rain.jpg)';
      case 'snow':
        return 'url(assets/backgrounds/snow.jpg)';
      case 'thunderstorm':
        return 'url(assets/backgrounds/thunderstorm.jpg)';
      default:
        return 'url(assets/backgrounds/default-background.jpg)';
    }
  }
}
