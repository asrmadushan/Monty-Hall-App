import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  apiUrl = 'https://localhost:5001/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  constructor(private http: HttpClient) { }

  getSimulate(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'simulate').pipe(retry(1));
  }
}
