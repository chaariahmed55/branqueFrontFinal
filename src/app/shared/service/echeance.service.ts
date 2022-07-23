import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Credit} from "../model/credit";
import {Echeance} from "../model/echeance";

@Injectable({
  providedIn: 'root'
})
export class EcheanceService {
  private url = environment.apiUrl + '/echeance';



  constructor(private httpClient: HttpClient) {
  }

  getByCredit(id: any): Observable<Echeance[]> {
    return  this.httpClient.get<Echeance[]>(this.url +'/credit/' + id);
  }

}
