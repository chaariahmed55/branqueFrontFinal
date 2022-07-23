import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../shared/model/utilisateur";
import {UtilisateurService} from "../shared/service/utilisateur.service";
import {RendezVousService} from "../shared/service/rendez-vous.service";
import {RendezVous} from "../shared/model/rendez-vous";

@Component({
  selector: 'app-mes-rendez-vous',
  templateUrl: './mes-rendez-vous.component.html',
  styleUrls: ['./mes-rendez-vous.component.css']
})
export class MesRendezVousComponent implements OnInit {

  rdvs: RendezVous[];

  constructor(private rdvService: RendezVousService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.rdvService.getByUser(user.id).subscribe(data => {
      this.rdvs = data;
    }, ex => console.log(ex));
  }


  annulerRdv(data: RendezVous) {
    this.rdvService.cancelRdv(data.id).subscribe(res => {
      this.getAll();
    }, ex => console.log(ex));
  }
}
