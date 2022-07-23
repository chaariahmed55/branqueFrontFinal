import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compte} from "../model/compte";
import {Credit} from "../model/credit";

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private url = environment.apiUrl + '/credit';



  constructor(private httpClient: HttpClient) {
  }

  getByUser(id: number): Observable<Credit[]> {
    return  this.httpClient.get<Credit[]>(this.url +'/user/' + id);
  }

  getAll(): Observable<Credit[]> {
    return  this.httpClient.get<Credit[]>(this.url);
  }
}
