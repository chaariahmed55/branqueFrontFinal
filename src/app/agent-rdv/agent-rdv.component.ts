import { Component, OnInit } from '@angular/core';
import {RendezVous} from "../shared/model/rendez-vous";
import {Utilisateur} from "../shared/model/utilisateur";
import {RendezVousService} from "../shared/service/rendez-vous.service";
import {DatePipe} from "@angular/common";
import {UtilisateurService} from "../shared/service/utilisateur.service";

@Component({
  selector: 'app-agent-rdv',
  templateUrl: './agent-rdv.component.html',
  styleUrls: ['./agent-rdv.component.css']
})
export class AgentRdvComponent implements OnInit {
  rdvs: RendezVous[];

  constructor(private rdvService: RendezVousService) { }

  ngOnInit(): void {

    this.getAll();

  }

  getAll(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.rdvService.getByAgent(user.id).subscribe(data => {
      this.rdvs = data;
    }, ex => console.log(ex));
  }



}
