import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Devise } from '../shared/models/Devise';
import { Solde } from '../shared/models/Solde';
import { DeviseService } from '../shared/Services/devise.service';
import { SoldeService } from '../shared/Services/solde.service';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent implements OnInit {

  ListDevise:Devise[]=[];
  productIdFromRoute: any;
  selectedDevise:Devise=new Devise();
  montant:number=0;
  montantcalculer:number=0;

  constructor(private deviseSVC:DeviseService,private route: ActivatedRoute,private soldeSVC:SoldeService) {
    const routeParams = this.route.snapshot.paramMap;
    this.productIdFromRoute = Number(routeParams.get('idcompte'));
  }

  ngOnInit(): void {
    // this.deviseSVC.filldevise();
    this.getAllDevise();
  }

  getAllDevise(){
    this.deviseSVC.getlistDevise().subscribe((data)=> {for (var val of data){this.ListDevise.push(val)}});
  }

  getSelectedDevise(devise:Devise){
    this.selectedDevise=devise;
    this.montant=0;
    this.montantcalculer=0;
  }

  OnActionClick(selectedDevise:Devise){
    if (selectedDevise?.achat!=null) {
      this.montantcalculer=this.montant*selectedDevise?.achat;
    }
  }

  addDevise(){
    console.log(this.montantcalculer);
    this.soldeSVC.addSolde(this.productIdFromRoute,""+this.selectedDevise.code,this.montantcalculer)
    .subscribe(data=>{location.reload();});
  }


}
