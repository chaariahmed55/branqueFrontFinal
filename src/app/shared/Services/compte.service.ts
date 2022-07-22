import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compte } from '../models/Compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  readonly host = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getCompteById(idcompte:number)
  {
    return this.httpClient.get<Compte>(this.host+'/Compte/'+idcompte);
  }
}
