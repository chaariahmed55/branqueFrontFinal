import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl +'/login'
  constructor(private httpClient: HttpClient) { }

  public authenticate(user: Utilisateur): Observable<any> {
    return this.httpClient.post(this.url, user);
  }
}
