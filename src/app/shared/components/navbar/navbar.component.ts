import { Component, OnInit } from '@angular/core';
import { CarnetCheque } from '../../models/CarnetCheque';
import { CarnetChequeService } from '../../Services/carnet-cheque.service';
import { ChequeService } from '../../Services/cheque.service';
import { DeviseService } from '../../Services/devise.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  carnetcheques:CarnetCheque[]=[]
  constructor(private carnetchequeservice:CarnetChequeService,private chequeService:ChequeService,private deviseservice:DeviseService) { }

  ngOnInit(): void {
    this.carnetcheques=[]
    this.getNotConfirmedCarnetCheque();
  }

public getNotConfirmedCarnetCheque(){
  this.carnetchequeservice.getNotConfirmedCarnet().subscribe(data=>{
    for (const iterator of data) {
      this.carnetcheques.push(iterator);
    }
  })
}

public ConfirmAdd(object:CarnetCheque){
  if (object.compte?.id!=null) {
    this.carnetchequeservice.confirmcarnetCheque(object.compte?.id).subscribe(data=>{
      if (object?.id!=null) {
        this.chequeService.createCheque(object?.id).subscribe(data1=>this.ngOnInit());
      }
    });
  } 
}

public fillDevise(){
  this.deviseservice.fillDevise().subscribe(data=>{console.log('fini');});
   setTimeout(function(){location.reload()}, 3000);
  }



}
