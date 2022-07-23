import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RendezVous} from "../model/rendez-vous";

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private url = environment.apiUrl + '/rdv';

  constructor(private httpClient: HttpClient) {
  }

  getAllRdv(): Observable<RendezVous[]> {
    return this.httpClient.get<RendezVous[]>(this.url + '/notCancled');
  }

  getByUser(id: number): Observable<RendezVous[]> {
    return this.httpClient.get<RendezVous[]>(this.url + '/user/' + id);
  }

  getByAgent(id: number): Observable<RendezVous[]> {
    return this.httpClient.get<RendezVous[]>(this.url + '/agent/' + id);
  }

  saveRdv(rdv: RendezVous): Observable<RendezVous> {
    return this.httpClient.post<RendezVous>(this.url , rdv);
  }

  updateRdv(rdv: RendezVous): Observable<RendezVous> {
    return this.httpClient.put<RendezVous>(this.url, rdv);
  }

  cancelRdv(id: number): Observable<any> {
    return this.httpClient.get(this.url + '/annuler/' + id);
  }

  refuserRdv(id: number): Observable<any> {
    return this.httpClient.get(this.url + '/refuser/' + id);
  }

  accepterRdv(rdv: RendezVous): Observable<any> {
    return this.httpClient.put(this.url + '/accepter', rdv);
  }


  getById(rdvId: number): Observable<RendezVous> {
    return this.httpClient.get<RendezVous>(this.url + '/' + rdvId);
  }
}
