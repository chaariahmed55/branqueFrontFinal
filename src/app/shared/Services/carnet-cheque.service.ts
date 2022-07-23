import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarnetCheque } from '../models/CarnetCheque';

@Injectable({
  providedIn: 'root'
})
export class CarnetChequeService {
  readonly host = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

public getAllCarnet(idcompte:number):Observable<CarnetCheque[]>{
return this.httpClient.get<CarnetCheque[]>(this.host+'/carnetcheque/'+idcompte);
}

public supprimerCarnet(idcarnet:number){
  return this.httpClient.post(this.host+'/Deletecarnetcheque/'+idcarnet,null);
}

public addCarnetCheque(idcompte:number){
  console.log(idcompte);
  return this.httpClient.post(this.host+'/Dcarnetcheque/'+idcompte,null);
}

public getNotConfirmedCarnet():Observable<CarnetCheque[]>{
  return this.httpClient.get<CarnetCheque[]>(this.host+'/CarnetCheque');  
}

public confirmcarnetCheque(idcompte:number){
  return this.httpClient.post(this.host+'/Acarnetcheque/'+idcompte,null);
}

public getImageCheque(pathimage:string){
  return this.httpClient.get(this.host+'/getImage/'+pathimage);
}


}
