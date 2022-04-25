import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lunch } from '../models/lunch.model';

@Injectable({
  providedIn: 'root',
})
export class ObedyService {
  private lunchesApiUrl = 'http://localhost:8080/api/lunches';

  constructor(private http: HttpClient) {}
  public getLunches(): Observable<Lunch[]> {
    return this.http.get<Lunch[]>(`${this.lunchesApiUrl}`);
  }

  public getLunchById(lunchId: number): Observable<Lunch> {
    return this.http.get<Lunch>(`${this.lunchesApiUrl}/${lunchId}`);
  }

  public updateLunch(lunchId: number, o: Lunch): Observable<Lunch> {
    return this.http.put<Lunch>(`${this.lunchesApiUrl}/${lunchId}`, o);
  }
}
