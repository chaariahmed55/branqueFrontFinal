import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PieceJointeService {
  private url = environment.apiUrl +'/piece'
  constructor(private httpClient: HttpClient) { }
  public uploadFile(files: File[], demandeId: number): Observable<any> {
   const formData = new FormData();
   files.forEach(file => formData.append('files', file));
    return  this.httpClient.post(this.url + '/upload/' +demandeId,  formData);
  }

  public findByDemande(demandeId: number): Observable<any> {
    return  this.httpClient.get(this.url +'/demande/' + demandeId);
  }
}
