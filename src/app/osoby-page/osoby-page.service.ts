import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Parent } from '../models/parent.model';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class OsobyService {
  private parentsApiUrl = 'http://localhost:8080/api/parents';
  private studentsApiUrl = 'http://localhost:8080/api/students';
  private teachersApiUrl = 'http://localhost:8080/api/teachers';

  constructor(private http: HttpClient) {}

  // ------ API parents -----
  public createParent(o: Parent): Observable<Parent> {
    return this.http.post<Parent>(`${this.parentsApiUrl}`, o);
  }

  public getParents(): Observable<Parent[]> {
    return this.http.get<Parent[]>(`${this.parentsApiUrl}`);
  }

  public getParentById(parentId: number): Observable<Parent> {
    return this.http.get<Parent>(`${this.parentsApiUrl}/${parentId}`);
  }

  public updateParent(parentId: number, o: Parent): Observable<Parent> {
    return this.http.put<Parent>(`${this.parentsApiUrl}/${parentId}`, o);
  }

  public deleteParent(parentId: number): Observable<void> {
    return this.http.delete<void>(`${this.parentsApiUrl}/${parentId}`);
  }

  // ------ API students -----
  public createStudent(o: Student): Observable<Student> {
    return this.http.post<Student>(`${this.studentsApiUrl}`, o);
  }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.studentsApiUrl}`);
  }

  public getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${this.studentsApiUrl}/${studentId}`);
  }

  public updateStudent(studentId: number, o: Student): Observable<Student> {
    return this.http.put<Student>(`${this.studentsApiUrl}/${studentId}`, o);
  }

  public deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.studentsApiUrl}/${studentId}`);
  }

  // ------ API teachers -----
  public createTeacher(o: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.teachersApiUrl}`, o);
  }

  public getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.teachersApiUrl}`);
  }

  public getTeacherById(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.teachersApiUrl}/${teacherId}`);
  }

  public updateTeacher(teacherId: number, o: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.teachersApiUrl}/${teacherId}`, o);
  }

  public deleteTeacher(teacherId: number): Observable<void> {
    return this.http.delete<void>(`${this.teachersApiUrl}/${teacherId}`);
  }
}
