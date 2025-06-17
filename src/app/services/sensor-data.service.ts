import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface SensorData {
  TEMP: number;
  HUM: number;
  GAS: number;
  PIR: number;
  TIMESTAMP_SERIAL: number;
  AVG_TEMP_LAST5: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  private apiUrl = 'http://192.168.234.1:8000/data';

  constructor(private http: HttpClient) {}

  getSensorData(): Observable<SensorData> {
    return this.http.get<SensorData>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('❌ Failed to fetch from API. Using fallback data.', error);
        const fallback: SensorData = {
          TEMP: +(20 + Math.random() * 10).toFixed(1),
          HUM: +(40 + Math.random() * 30).toFixed(0),
          GAS: Math.floor(400 + Math.random() * 200),
          PIR: Math.random() < 0.5 ? 0 : 1,
          TIMESTAMP_SERIAL: Date.now(),
          AVG_TEMP_LAST5: +(20 + Math.random() * 10).toFixed(1)
        };
        return of(fallback);
      })
    );
  }
}
