import { Component, OnInit } from '@angular/core';
import {RendezVous} from "../shared/model/rendez-vous";
import {RendezVousService} from "../shared/service/rendez-vous.service";
import {UtilisateurService} from "../shared/service/utilisateur.service";
import {Utilisateur} from "../shared/model/utilisateur";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-admin-rdv',
  templateUrl: './admin-rdv.component.html',
  styleUrls: ['./admin-rdv.component.css']
})
export class AdminRdvComponent implements OnInit {

  rdvs: RendezVous[];
  agents: Utilisateur[];
  minDate: any;
  constructor(private rdvService: RendezVousService,
              private datePipe: DatePipe,
              private userService: UtilisateurService) { }

  ngOnInit(): void {
    this.minDate =  this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
    this.getAll();
    this.getAllAgent()
  }

  getAll(): void {

    this.rdvService.getAllRdv().subscribe(data => {
      this.rdvs = data;
    }, ex => console.log(ex));
  }

  getAllAgent(): void {
    this.userService.getAllAgent().subscribe(data => {
      this.agents = data;

    }, ex => console.log(ex));
  }

  refuserRdv(data: RendezVous) {
    this.rdvService.refuserRdv(data.id).subscribe(res => {
      this.getAll();
    }, ex => console.log(ex));
  }


  accepterRdv(data: RendezVous) {
    this.rdvService.accepterRdv(data).subscribe(res => {
      this.getAll();
    }, ex => console.log(ex));
  }

}
