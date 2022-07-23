import { Component, OnInit } from '@angular/core';
import {DemandeCredit} from "../shared/model/demande-credit";
import {DemandeCreditService} from "../shared/service/demande-credit.service";

@Component({
  selector: 'app-liste-demande-credit',
  templateUrl: './liste-demande-credit.component.html',
  styleUrls: ['./liste-demande-credit.component.css']
})
export class ListeDemandeCreditComponent implements OnInit {

  demandeCredits: DemandeCredit[];
  errorMessage: any;
  constructor(private demandeCreditService: DemandeCreditService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {

    this.demandeCreditService.getAllDemande().subscribe(data => {
      this.demandeCredits = data;
    }, ex => console.log(ex));
  }

  refuserDemande(data: DemandeCredit) {
    this.demandeCreditService.refuser(data.id).subscribe(res => {
      this.getAll();
    }, ex => console.log(ex));
  }

  accepterDemande(data: DemandeCredit) {
    this.demandeCreditService.accepter(data.id).subscribe(res => {
      this.getAll();
    }, ex => console.log(ex));
  }

  encoursDemande(data: DemandeCredit) {
    this.demandeCreditService.enCours(data.id).subscribe(res => {
      this.getAll();
    }, ex => console.log(ex));
  }
}
