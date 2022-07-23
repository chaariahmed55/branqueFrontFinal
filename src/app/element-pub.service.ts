import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const APPI_URL = 'http://localhost:8081/SpringMVC/elementpub/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
   })};

@Injectable({
  providedIn: 'root'
})
export class ElementPubService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8081/SpringMVC/elementpub/remove';
  private Url = 'http://localhost:8081/SpringMVC/elementpub/show';
  private basUrl = 'http://localhost:8081/SpringMVC/elementpub/modify';

  constructor(private http: HttpClient) {
    
   }
   addElePublications(contenu:string,typeElement: string ): Observable<any> {
    return this.http.post(APPI_URL + 'add', {
      contenu, typeElement
    }, httpOptions);
  }
  updateElePub(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.basUrl}`, value);
  }
   
  getElePubList(): Observable<any> {
    return this.http.get(APPI_URL+'show');
  }
  deleteElePub(id: number): Observable<any> {
     

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getElePub(id: number): Observable<any> {
    return this.http.get(`${this.Url}/${id}`);
  }
  
}
