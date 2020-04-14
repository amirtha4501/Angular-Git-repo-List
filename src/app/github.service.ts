import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const usersEndpoint = 'https://api.github.com/users/';
const orgsEndpoint = 'https://api.github.com/orgs/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  users(name: string): Observable<any> {
    console.log("user method in github service & the name is " + name);
    return this.http.get(usersEndpoint + name + '/repos');
  }
  
  organizations(name: string): Observable<any> {
    return this.http.get(orgsEndpoint + name + '/repos');
  }
}
