import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Rodic} from "../models/rodic.model";
import {Ziak} from "../models/ziak.model";
import {Ucitel} from "../models/ucitel.model";

@Injectable({
  providedIn: 'root'
})

export class OsobyService {
  private parentsApiUrl = 'http://localhost:8080/api/parents';
  private studentsApiUrl = 'http://localhost:8080/api/students';
  private teachersApiUrl = 'http://localhost:8080/api/teachers';

  constructor(private http: HttpClient) { }

  // ------ API parents -----
  public createParent(o: Rodic): Observable<Rodic> { return this.http.post<Rodic>(`${this.parentsApiUrl}`, o); }

  public getParents(): Observable<Rodic[]> { return this.http.get<Rodic[]>(`${this.parentsApiUrl}`); }

  public getParentById(parentId: number): Observable<Rodic> {
    return this.http.get<Rodic>(`${this.parentsApiUrl}/${parentId}`);
  }

  public updateParent(parentId: number, o: Rodic): Observable<Rodic> {
    return this.http.put<Rodic>(`${this.parentsApiUrl}/${parentId}`, o);
  }

  public deleteParent(parentId: number): Observable<void> {
    return this.http.delete<void>(`${this.parentsApiUrl}/${parentId}`);
  }

  // ------ API students -----
  public createStudent(o: Ziak): Observable<Ziak> { return this.http.post<Ziak>(`${this.studentsApiUrl}`, o); }

  public getStudents(): Observable<Ziak[]> { return this.http.get<Ziak[]>(`${this.studentsApiUrl}`); }

  public getStudentById(studentId: number): Observable<Ziak> {
    return this.http.get<Ziak>(`${this.studentsApiUrl}/${studentId}`);
  }

  public updateStudent(studentId: number, o: Ziak): Observable<Ziak> {
    return this.http.put<Ziak>(`${this.studentsApiUrl}/${studentId}`, o);
  }

  public deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.studentsApiUrl}/${studentId}`);
  }

  // ------ API teachers -----
  public createTeacher(o: Ucitel): Observable<Ucitel> { return this.http.post<Ucitel>(`${this.teachersApiUrl}`, o); }

  public getTeachers(): Observable<Ucitel[]> { return this.http.get<Ucitel[]>(`${this.teachersApiUrl}`); }

  public getTeacherById(teacherId: number): Observable<Ucitel> {
    return this.http.get<Ucitel>(`${this.teachersApiUrl}/${teacherId}`);
  }

  public updateTeacher(teacherId: number, o: Ucitel): Observable<Ucitel> {
    return this.http.put<Ucitel>(`${this.teachersApiUrl}/${teacherId}`, o);
  }

  public deleteTeacher(teacherId: number): Observable<void> {
    return this.http.delete<void>(`${this.teachersApiUrl}/${teacherId}`);
  }
}
