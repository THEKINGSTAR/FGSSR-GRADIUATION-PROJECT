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


addStudent(student: any): Observable<any> {
  return this.http.post(this.baseUrl + 'Auth/register', student)
    }

    addSkills(item: any): Observable<any> {
      return this.http.post('http://localhost:5000/api/data1', item)
        }

        getresource(skill: any): Observable<any> {
          return this.http.post('http://localhost:5000/api/data2', skill)
            }
 

}
