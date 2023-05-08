import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';


export class Student {
  username : string;
  name: string;
  password : string ;
  EmailAddress: string;
  PhoneNumber: string;
}
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  
  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
addStudent(Student: any): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'Auth/register', Student, this.httpHeader)
    .pipe(
      tap(Student => console.log('Student fetched!')),
        catchError(this.handleError<Student[]>('Get student', []))
    );
    
}


 
// to Get ID 
getStudent(id): Observable<Student[]> {
  var me=this ;
  return this.http.get<Student[]>('api-goes-here/' + id)
    .pipe(
      tap(_ => console.log(`Student fetched: ${id}`)),
      catchError(me.handleError<Student[]>(`Get student id=${id}`))
    );
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
}
