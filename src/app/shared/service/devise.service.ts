import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compte} from "../model/compte";
import {Devise} from "../model/devise";

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private url = environment.apiUrl + '/devise';

  constructor(private httpClient: HttpClient) { }

  getAllDevise(): Observable<Devise[]> {
    return this.httpClient.get<Devise[]>(this.url );
  }




}
