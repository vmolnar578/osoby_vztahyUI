import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Lunch } from '../models/lunch.model';
import { AuthService } from '../login-page/login-page.service';

@Injectable({
  providedIn: 'root',
})
export class ObedyService {
  private lunchesApiUrl = 'http://localhost:8080/api/lunches';

  constructor(private http: HttpClient, private authService: AuthService) {}
  public getLunches(): Observable<Lunch[]> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Lunch[]>(`${this.lunchesApiUrl}`, {headers});
  }

  public getLunchById(lunchId: number): Observable<Lunch> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Lunch>(`${this.lunchesApiUrl}/${lunchId}`, {headers});
  }

  public updateLunch(lunchId: number, o: Lunch): Observable<Lunch> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.put<Lunch>(`${this.lunchesApiUrl}/${lunchId}`, o, {headers});
  }
}
