import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICollegeDetails } from './models/college-details.model';
import { Observable, of, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private _backendUrl = 'assets/collegeDetails.json';

  constructor(private http: HttpClient) { }

  getCollegeDetails(): Observable<ICollegeDetails[]>{
    return this.http.get<{colleges:ICollegeDetails[]}>(this._backendUrl).pipe(
                    map(res => res.colleges),
                    catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
