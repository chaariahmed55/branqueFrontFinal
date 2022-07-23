import { Component, OnInit } from '@angular/core';
import {DemandeCredit} from "../shared/model/demande-credit";
import {DemandeCreditService} from "../shared/service/demande-credit.service";
import {RendezVous} from "../shared/model/rendez-vous";

@Component({
  selector: 'app-mes-demande-credit',
  templateUrl: './mes-demande-credit.component.html',
  styleUrls: ['./mes-demande-credit.component.css']
})
export class MesDemandeCreditComponent implements OnInit {

  demandeCredits: DemandeCredit[];
  errorMessage: any;
  constructor(private demandeCreditService: DemandeCreditService) {
  }

  ngOnInit(): void {
    this.getDemandeCreditByUser();
  }

  getDemandeCreditByUser(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.demandeCreditService.getDemandeByUser(user.id).subscribe(data => {
      this.demandeCredits = data;
    }, ex => console.log(ex));
  }

  annulerDemande(data: DemandeCredit) {
    this.demandeCreditService.annuler(data.id).subscribe(res => {
      this.getDemandeCreditByUser();
    }, ex => console.log(ex));
  }
}
