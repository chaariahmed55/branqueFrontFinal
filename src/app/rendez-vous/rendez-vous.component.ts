import { Component, OnInit } from '@angular/core';
import {RendezVous} from "../shared/model/rendez-vous";
import {ActivatedRoute, Router} from "@angular/router";
import {RendezVousService} from "../shared/service/rendez-vous.service";

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  rdv = new RendezVous();
  errorMessage: any;
  rdvId: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private rdvService: RendezVousService) {
  }

  ngOnInit(): void {
    this.rdvId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.rdvId) {
      this.getById();
    }
  }

  public save(): void {
    this.rdv.utilisateur = JSON.parse(localStorage.getItem('currentUser'));
    this.rdvService.saveRdv(this.rdv).subscribe(res => {
      this.router.navigate(['/mes-rdv']);
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }

  public update(): void {
    this.rdvService.updateRdv(this.rdv).subscribe(res => {
      this.router.navigate(['/mes-rdv']);
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }

  valider() {
    if(this.rdvId) {
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
    this.rdvService.getById(this.rdvId).subscribe(res => {
      this.rdv = res;
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }
}
