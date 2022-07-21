import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url = environment.apiUrl + '/utilisateur';
    constructor(private httpClient: HttpClient) { }

  getAllAgent(): Observable<Utilisateur[]> {
      return this.httpClient.get<Utilisateur[]>(this.url + '/agent');
  }
  getById(id: number): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this.url + '/user/' + id);
  }

  saveAgent(agent: Utilisateur): Observable<Utilisateur> {
      return  this.httpClient.post<Utilisateur>(this.url + '/agent', agent);
  }
  updateAgent(agent: Utilisateur): Observable<Utilisateur> {
    return  this.httpClient.put<Utilisateur>(this.url + '/agent', agent);
  }

  delete(id: number): Observable<any> {
    return  this.httpClient.delete(this.url + '/agent/' + id);
  }
}
