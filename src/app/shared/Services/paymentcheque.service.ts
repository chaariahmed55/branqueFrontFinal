import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PayementCheque } from '../models/PayementCheque';

@Injectable({
  providedIn: 'root'
})
export class PaymentchequeService {
  readonly host = environment.baseurl;
  constructor(private httpClient: HttpClient) { }


public PaymentCheque(formData:any,idcheque:number){
  return this.httpClient.post(this.host+'/PaymentCheque/Add/'+idcheque,formData,{
    reportProgress:true,
    observe:'events'
  }
  )
}

public getnotConfirmedPayment():Observable<PayementCheque[]>{
  return this.httpClient.get<PayementCheque[]>(this.host+'/AllPaymentCheque');
  
}

public confirmpayementParCheque(idpayment:number){
  return this.httpClient.post(this.host+'/paymentCheque/'+idpayment,null);
}



}
