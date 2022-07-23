import { Component, OnInit } from '@angular/core';
import {DemandeCredit} from "../shared/model/demande-credit";
import {DemandeCreditService} from "../shared/service/demande-credit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Compte} from "../shared/model/compte";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  demandeCredit = new DemandeCredit();
  errorMessage: any;
  montantEcheance: number;

  constructor(private demandeCreditService: DemandeCreditService) { }

  ngOnInit(): void {


  }

  public simuler(): void {

    this.demandeCreditService.simuler(this.demandeCredit).subscribe(res => {
        this.montantEcheance = res;
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }




  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }



}
