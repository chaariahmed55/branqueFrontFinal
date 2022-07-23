import { Component, OnInit } from '@angular/core';
import {Compte} from "../shared/model/compte";

import {VirementService} from "../shared/service/virement.service";
import {CompteService} from "../shared/service/compte.service";
import {NgForm} from "@angular/forms";

import {Router} from "@angular/router";

class VirementRequest {
  rib1: string;
  rib2: string;
  montant: number;
  devise: string;
}
@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  comptes: Compte[];
  virementRequest = new VirementRequest();
  errorMessage: any;
  successMessage : any;
  constructor(private virementService: VirementService,
              private router: Router,
              private compteService: CompteService) { }

  ngOnInit(): void {
    this.getCompteByUser();
  }


  getCompteByUser(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.compteService.getCompteByUser(user.id).subscribe(data => {
      this.comptes = data;
    }, ex => console.log(ex));
  }


  sendVirement(f: NgForm): void {
    this.virementService.sendVirement(this.virementRequest).subscribe(data => {
      this.successMessage = 'Virement effecutée avec succès';
      this.router.navigate(['/mes-virements'])
      f.resetForm();
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    } );
  }
}
