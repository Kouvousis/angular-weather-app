import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherData } from '../../interfaces/weather-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  @Input() weatherData!: WeatherData;
  @Input() favorites: string[] = [];

  @Output() toggleFavorite = new EventEmitter<string>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.weatherData.name);
  }

  isFavorite(): boolean {
    return this.favorites.includes(this.weatherData.name);
  }
}
