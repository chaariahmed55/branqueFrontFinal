import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cheque } from '../models/Cheque';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
  readonly host = environment.baseurl;
  constructor(private httpClient: HttpClient) { }

  public getChequeByCarnet(idcarnet:number):Observable<Cheque[]>{
    return this.httpClient.get<Cheque[]>(this.host+"/cheque/"+idcarnet);
  }
  
  public getAllPaymentCheque(idcompte:number):Observable<Cheque[]>{
    return this.httpClient.get<Cheque[]>(this.host+'/getAllPaymenetCheque/'+idcompte);
  }

  public createCheque(idcarnet:number){
    return this.httpClient.post(this.host+'/Addcarnet/'+idcarnet,null);
  }


}
