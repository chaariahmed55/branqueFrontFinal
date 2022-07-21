import {Component, OnInit} from '@angular/core';
import {CompteService} from "../shared/service/compte.service";
import {Compte} from "../shared/model/compte";

@Component({
  selector: 'app-mes-comptes',
  templateUrl: './mes-comptes.component.html',
  styleUrls: ['./mes-comptes.component.css']
})
export class MesComptesComponent implements OnInit {
  comptes: Compte[];
  errorMessage: any;
  constructor(private compteService: CompteService) {
  }

  ngOnInit(): void {
    this.getCompteByUser();
  }

  getCompteByUser(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.compteService.getCompteByUser(user.id).subscribe(data => {
      this.comptes = data;
    }, ex => console.log(ex));
  }

  createAccount() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const compte = new Compte();
    compte.utilisateur = user;

    this.compteService.createCompte(compte).subscribe(data => {
      this.getCompteByUser();
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }
}
