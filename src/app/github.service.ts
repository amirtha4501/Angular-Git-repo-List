import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const usersEndpoint = 'https://api.github.com/users/';
const orgsEndpoint = 'https://api.github.com/orgs/';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersRepo(name: string): Observable<any> {
    return this.http.get(usersEndpoint + name + '/repos')
  }
  
  getOrgsRepo(name: string): Observable<any> {
    return this.http.get(orgsEndpoint + name + '/repos');
  }
}
