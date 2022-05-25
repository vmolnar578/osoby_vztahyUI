import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Parent } from '../models/parent.model';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';
import { AuthService } from '../login-page/login-page.service';

@Injectable({
  providedIn: 'root',
})
export class OsobyService {
  private parentsApiUrl = 'http://localhost:8080/api/parents';
  private studentsApiUrl = 'http://localhost:8080/api/students';
  private teachersApiUrl = 'http://localhost:8080/api/teachers';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // ------ API parents -----
  public createParent(o: Parent): Observable<Parent> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.post<Parent>(`${this.parentsApiUrl}`, o, {headers});
  }

  public getParents(): Observable<Parent[]> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Parent[]>(`${this.parentsApiUrl}`, {headers});
  }

  public getParentById(parentId: number): Observable<Parent> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Parent>(`${this.parentsApiUrl}/${parentId}`, {headers});
  }

  public updateParent(parentId: number, o: Parent): Observable<Parent> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.put<Parent>(`${this.parentsApiUrl}/${parentId}`, o, {headers});
  }

  public deleteParent(parentId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.delete<void>(`${this.parentsApiUrl}/${parentId}`, {headers});
  }

  // ------ API students -----
  public createStudent(o: Student): Observable<Student> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.post<Student>(`${this.studentsApiUrl}`, o, {headers});
  }

  public getStudents(): Observable<Student[]> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Student[]>(`${this.studentsApiUrl}`, {headers});
  }

  public getStudentById(studentId: number): Observable<Student> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Student>(`${this.studentsApiUrl}/${studentId}`, {headers});
  }

  public updateStudent(studentId: number, o: Student): Observable<Student> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.put<Student>(`${this.studentsApiUrl}/${studentId}`, o, {headers});
  }

  public deleteStudent(studentId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.delete<void>(`${this.studentsApiUrl}/${studentId}`, {headers});
  }

  // ------ API teachers -----
  public createTeacher(o: Teacher): Observable<Teacher> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.post<Teacher>(`${this.teachersApiUrl}`, o, {headers});
  }

  public getTeachers(): Observable<Teacher[]> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Teacher[]>(`${this.teachersApiUrl}`, {headers});
  }

  public getTeacherById(teacherId: number): Observable<Teacher> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.get<Teacher>(`${this.teachersApiUrl}/${teacherId}`, {headers});
  }

  public updateTeacher(teacherId: number, o: Teacher): Observable<Teacher> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.put<Teacher>(`${this.teachersApiUrl}/${teacherId}`, o, {headers});
  }

  public deleteTeacher(teacherId: number): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.http.delete<void>(`${this.teachersApiUrl}/${teacherId}`, {headers});
  }
}
