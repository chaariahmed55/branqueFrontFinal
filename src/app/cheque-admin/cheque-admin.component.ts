import { Component, OnInit } from '@angular/core';
import { CarnetCheque } from '../shared/models/CarnetCheque';
import { PayementCheque } from '../shared/models/PayementCheque';
import { CarnetChequeService } from '../shared/Services/carnet-cheque.service';
import { PaymentchequeService } from '../shared/Services/paymentcheque.service';

@Component({
  selector: 'app-cheque-admin',
  templateUrl: './cheque-admin.component.html',
  styleUrls: ['./cheque-admin.component.css']
})
export class ChequeAdminComponent implements OnInit {

  paymentcheques:PayementCheque[]=[]
  baseStrign:String=' C:\\spring\\workspace\\ProjetBanque_BackEnd\\src\\main\\webapp\\Image\\';
  constructor(private paymentchequeservice:PaymentchequeService) { }

  ngOnInit(): void { 
    this.paymentcheques=[];
    this.getPaymentChequeNotConfirmed();
  }

  public getPaymentChequeNotConfirmed(){
    this.paymentchequeservice.getnotConfirmedPayment().subscribe(data=>{
      for (const iterator of data) {
      //   iterator.image = this.baseStrign+iterator.image;
        this.paymentcheques.push(iterator)
      }
    });
    console.log(this.paymentcheques);
  }

  ConfirmPayement(payement:PayementCheque){
    console.log(payement);
    if (payement.id!=null) {
      this.paymentchequeservice.confirmpayementParCheque(payement?.id).subscribe(data=>console.log(data));
      setTimeout(function(){location.reload()}, 5000);
    }
    
  }

}
