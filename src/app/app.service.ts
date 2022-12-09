import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getData(){
    let url = "https://api.publicapis.org/entries";
    return this.http.get(url)
  }
}