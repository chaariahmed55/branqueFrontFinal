import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Virement} from "../model/virement";

@Injectable({
  providedIn: 'root'
})
export class VirementService {

  private url = environment.apiUrl + '/virement';

  constructor(private httpClient: HttpClient) {
  }

  sendVirement(virement: any): Observable<any> {
    return this.httpClient.post(this.url, virement);
  }

  getByUtilisateur(id: number): Observable<Virement[]> {
    return this.httpClient.get<Virement[]>(this.url + '/user/' + id);
  }

  getByCompte(id: number): Observable<Virement[]> {
    return this.httpClient.get<Virement[]>(this.url + '/compte/' + id);
  }

  getByCompteAndDevise(id: number, idDevise: number): Observable<Virement[]> {
    return this.httpClient.get<Virement[]>(this.url + '/compte/' + id+ '/'+ idDevise);
  }
}
