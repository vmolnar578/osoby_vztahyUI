import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap} from "rxjs";
import { Request } from '../models/request.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/authentication';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  signin(request: Request): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(request.userName +':'+ request.userPassword)
    });

    return this.http.post<any>(this.baseUrl, null, {headers, observe: 'response'}).pipe(
      tap(response => {
        //console.log(response);
        //console.log("DEBUG (token): " + response.headers.get('Authorization'));
        this.setToken(response.headers.get('Authorization') as string);
        this.setExpirationTime(response.headers.get('Expiration') as string);
      })
    );
  }

  signout() {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.getToken()
    });

    sessionStorage.clear();
    this.http.delete<any>(this.baseUrl, {headers}).toPromise()
      .then(res=>{
        location.reload();
      });
  }

  isUserSignedin() {
    if (sessionStorage.getItem('token') === null || this.getExpirationTime() == 0) {
      return false;
    }
    if (this.getExpirationTime() < new Date().getTime()) {
      this.signout();
      alert("Relácia vypršala!\nPrihláste sa znova prosím...");
      return false;
    }

    this.increaseExpirationTime();
    return true;
  }

  increaseExpirationTime() {
    const expiration: string | null = (Date.now() + 900*1000).toString(); // +900 sek
    sessionStorage.setItem('expiration', expiration);
  }

  setExpirationTime(time: string) {
    sessionStorage.setItem('expiration', time);
  }

  getExpirationTime() {
    const expiration: string | null = sessionStorage.getItem('expiration');
    return Number(expiration); // as number
  }

  setToken(token: string){
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token') as string;
  }
}
