import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  private url = environment.service.url;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  getFoldersParent( id : number){
    return this.http.get<any>(`${ this.url }foldersParent/${id}`, { headers: this.headers }).pipe( map( data => data ));
  }

  saveFolder(folder: any) {
    return this.http.post(`${ this.url }folders`, folder , { headers: this.headers }).pipe( map( data => data ));
  }

}
