import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://localhost:8081/SpringMVC/publication/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
   })};


@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8081/SpringMVC/publication/remove';
  private basUrl = 'http://localhost:8081/SpringMVC/publication/modify';
  private Url = 'http://localhost:8081/SpringMVC/publication/show';

  
  constructor(private http: HttpClient) {
   }

  addPublications(datepublication:Date|any,titre: string,autheur: string ): Observable<any> {
    return this.http.post(API_URL + 'add', {
      datepublication, titre, autheur
    }, httpOptions);
  }

  getPubList(): Observable<any> {
    return this.http.get(API_URL+'show');
  }
  deletePub(id: number): Observable<any> {
     

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  updatePub(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.basUrl}`, value);
  }
  getPub(id: number): Observable<any> {
    return this.http.get(`${this.Url}/${id}`);
  }

}
