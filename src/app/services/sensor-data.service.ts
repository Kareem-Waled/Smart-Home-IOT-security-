import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface SensorData {
  TEMP: string;
  HUM: string;
  GAS: number;
  PIR: number;
  TIMESTAMP_SERIAL: number;
  AVG_TEMP_LASTS: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  private apiUrl = 'http://192.168.1.5:8000/data';

  constructor(private http: HttpClient) {}

  getSensorData(): Observable<SensorData> {
    return this.http.get<SensorData>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('❌ Failed to fetch from API. Using fallback data.', error);
        const fallback: SensorData = {
    TEMP: (20 + Math.random() * 10).toFixed(1), // من 20 لـ 30 درجة
    HUM: (40 + Math.random() * 30).toFixed(0),  // من 40% لـ 70%
    GAS: Math.floor(400 + Math.random() * 200), // من 400 لـ 600
    PIR: Math.random() < 0.5 ? 0 : 1,           // 0 أو 1
    TIMESTAMP_SERIAL: Date.now(),              // التوقيت الحالي
    AVG_TEMP_LASTS: +(20 + Math.random() * 10).toFixed(1) // نفس مدى TEMP
  };
        return of(fallback);
      })
    );
  }
}
