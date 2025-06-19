import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { getCachedWeatherData, saveWeatherData } from '../utils/weather-cache';
import { WeatherData } from '../interfaces/weather-data';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = environment.WEATHER_API_KEY;

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    const normalizedCity = city.trim().toLowerCase();

    return from(getCachedWeatherData(normalizedCity)).pipe(
      switchMap((cachedData) => {
        if (cachedData) {
          console.log('Using cached data');
          return from(Promise.resolve(cachedData));
        }

        const params = new HttpParams()
          .set('q', city)
          .set('appid', this.apiKey)
          .set('units', 'metric');

        return this.http.get<WeatherData>(this.baseUrl, { params }).pipe(
          tap((data) => saveWeatherData(normalizedCity, data)),
          catchError((error) =>
            throwError(
              () =>
                new Error(
                  error?.error?.message || 'Failed to fetch weather data'
                )
            )
          )
        );
      })
    );
  }
}
