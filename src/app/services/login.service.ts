import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.service.url;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  getLogin( user ) {
    return this.http.post<any>(`${ this.url }login` , user).pipe( map( data => data ));
  }
}
