import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [NgIf, NgForOf],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  @Input() favorites: string[] = [];
  @Output() selectCity = new EventEmitter<string>();

  get sortedFavorites(): string[] {
    return this.favorites.slice().sort((a, b) => a.localeCompare(b));
  }

  handleSelect(city: string): void {
    this.selectCity.emit(city);
  }
}
