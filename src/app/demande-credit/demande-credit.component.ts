import { Component, OnInit } from '@angular/core';
import {DemandeCredit} from "../shared/model/demande-credit";
import {DemandeCreditService} from "../shared/service/demande-credit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Compte} from "../shared/model/compte";

@Component({
  selector: 'app-demande-credit',
  templateUrl: './demande-credit.component.html',
  styleUrls: ['./demande-credit.component.css']
})
export class DemandeCreditComponent implements OnInit {
  demandeCredit = new DemandeCredit();
  errorMessage: any;
  compteId: any;
  demandeId: any;
  constructor(private demandeCreditService: DemandeCreditService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.compteId = this.activatedRoute.snapshot.paramMap.get('idCompte');
    this.demandeId = this.activatedRoute.snapshot.paramMap.get('idDemande');
    if (this.demandeId) {
      this.getById();
    }
  }

  public save(): void {
    const compte = new Compte();
    compte.id = this.compteId;
    this.demandeCredit.compte = compte;
    this.demandeCreditService.save(this.demandeCredit).subscribe(res => {
      this.router.navigate(['/mes-demandeCredit']);
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }

  public update(): void {
    this.demandeCreditService.updatedemandeCredit(this.demandeCredit).subscribe(res => {
      this.router.navigate(['/mes-demandeCredit']);
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }

  valider() {
    if(this.demandeId) {
      this.update();
    }else {
      this.save();
    }

  }


  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  cancel(): void {
    this.getById();
  }

  getById() {
    this.demandeCreditService.getById(this.demandeId).subscribe(res => {
      this.demandeCredit = res;
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }
}
