import { Component, EventEmitter, Output } from '@angular/core';
import { LucideAngularModule, Thermometer, Search } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  searchTerm = '';
  readonly Thermometer = Thermometer;
  readonly Search = Search;

  @Output() search = new EventEmitter<string>();

  handleSearch(event: Event): void {
    event.preventDefault();

    const trimmed = this.searchTerm.trim();
    if (trimmed) {
      this.search.emit(trimmed);
      this.searchTerm = '';
    }
  }
}
