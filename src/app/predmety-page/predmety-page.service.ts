import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../login-page/login-page.service';
import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root',
})
export class PredmetyService {
  private subjectsApiUrl = 'http://localhost:8080/api/subjects';
  constructor(private http: HttpClient, private authService: AuthService) {}

  // ------ API subjects -----
  public createSubject(o: Subject): Observable<Subject> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authService.getToken(),
    });
    return this.http.post<Subject>(`${this.subjectsApiUrl}`, o, { headers });
  }

  public getSubjects(): Observable<Subject[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authService.getToken(),
    });
    return this.http.get<Subject[]>(`${this.subjectsApiUrl}`, { headers });
  }

  public getSubjectById(subjectId: number): Observable<Subject> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authService.getToken(),
    });
    return this.http.get<Subject>(`${this.subjectsApiUrl}/${subjectId}`, { headers });
  }

  public updateSubject(subjectId: number, o: Subject): Observable<Subject> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authService.getToken(),
    });
    return this.http.put<Subject>(`${this.subjectsApiUrl}/${subjectId}`, o, { headers });
  }

  public deleteSubject(subjectId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authService.getToken(),
    });
    return this.http.delete<void>(`${this.subjectsApiUrl}/${subjectId}`, { headers });
  }
}
