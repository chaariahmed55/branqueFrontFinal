import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {DemandeCredit} from "../model/demande-credit";

@Injectable({
  providedIn: 'root'
})
export class DemandeCreditService {
  private url = environment.apiUrl + '/demandeCredit';

  constructor(private httpClient: HttpClient) {
  }

  getAllDemande(): Observable<DemandeCredit[]> {
    return this.httpClient.get<DemandeCredit[]>(this.url + '/all');
  }

  getDemandeByUser(id: number): Observable<DemandeCredit[]> {
    return this.httpClient.get<DemandeCredit[]>(this.url + '/user/' + id);
  }

  save(demande: DemandeCredit): Observable<DemandeCredit> {
    return  this.httpClient.post<DemandeCredit>(this.url , demande);
  }
  annuler(id: number): Observable<DemandeCredit> {
    return this.httpClient.get<DemandeCredit>(this.url + '/annuler/' + id);
  }
  enCours(id: number): Observable<DemandeCredit> {
    return this.httpClient.get<DemandeCredit>(this.url + '/encours/' + id);
  }
  refuser(id: number): Observable<DemandeCredit> {
    return this.httpClient.get<DemandeCredit>(this.url + '/refuser/' + id);
  }

  accepter(id: number): Observable<DemandeCredit> {
    return this.httpClient.get<DemandeCredit>(this.url + '/accepter/' + id);
  }

  updatedemandeCredit(demandeCredit: DemandeCredit): Observable<DemandeCredit> {
    return  this.httpClient.put<DemandeCredit>(this.url, demandeCredit);
  }

  getById(demandeId: any):  Observable<DemandeCredit> {
    return this.httpClient.get<DemandeCredit>(this.url + '/id/' + demandeId);
  }

  simuler(demandeCredit: DemandeCredit) : Observable<any> {
    return  this.httpClient.post(this.url + '/simulation' , demandeCredit);
  }
}
