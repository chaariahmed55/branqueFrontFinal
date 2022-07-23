import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compte} from "../model/compte";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private url = environment.apiUrl + '/compte';



  constructor(private httpClient: HttpClient) {
  }

  getByUser(id: number): Observable<Compte[]> {
    return  this.httpClient.get<Compte[]>(this.url +'/user/' + id);
  }


  getAllCompte(): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(this.url + '/all');
  }


  getCompteByUser(id: number): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(this.url + '/user/' + id);
  }

  createCompte(compte: Compte): Observable<any> {
    return this.httpClient.post(this.url, compte);
  }
}
