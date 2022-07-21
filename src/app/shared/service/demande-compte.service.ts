import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DemandeCompte} from "../model/demande-compte";
import {Utilisateur} from "../model/utilisateur";
import {DemandeCompteComponent} from "../../demande-compte/demande-compte.component";

@Injectable({
  providedIn: 'root'
})
export class DemandeCompteService {

  private url = environment.apiUrl +'/demande-compte'
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<DemandeCompte[]> {
    return  this.httpClient.get<DemandeCompte[]>(this.url);
  }

  public demandeCompte(demandeCompte: DemandeCompte): Observable<DemandeCompte> {
    return  this.httpClient.post<DemandeCompte>(this.url+ '/user', demandeCompte);
  }

  public accept(id: number): Observable<DemandeCompte> {
    return  this.httpClient.get<DemandeCompte>(this.url + '/accept/'+id);
  }

  public refuse(id: number): Observable<DemandeCompte> {
    return  this.httpClient.get<DemandeCompte>(this.url + '/refuse/'+id);
  }
  public getById(id: number): Observable<DemandeCompte> {
    return  this.httpClient.get<DemandeCompte>(this.url + '/'+id);
  }
}
