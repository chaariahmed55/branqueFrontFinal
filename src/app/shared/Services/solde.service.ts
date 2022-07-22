import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solde } from '../models/Solde';

@Injectable({
  providedIn: 'root'
})
export class SoldeService {
  readonly host = environment.baseurl;
  constructor(private httpClient: HttpClient) { }

  public getSoldeByCompte(idcompte:number):Observable<Solde[]> {
    return this.httpClient.get<Solde[]>(this.host+'/findallSolde/'+idcompte);
  }

  public addSolde(idcompte:number,codedevise:string,montant1:number){
   return this.httpClient.post(this.host+'/addSolde/'+idcompte+'/'+codedevise,{'montant':montant1});
  }

  public deleteSolde(idsolde:number){
    return this.httpClient.post(this.host+'/deleteSolde/'+idsolde,null);
  }

}
