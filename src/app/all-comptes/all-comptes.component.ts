import { Component, OnInit } from '@angular/core';
import {Compte} from "../shared/model/compte";
import {CompteService} from "../shared/service/compte.service";

@Component({
  selector: 'app-all-comptes',
  templateUrl: './all-comptes.component.html',
  styleUrls: ['./all-comptes.component.css']
})
export class AllComptesComponent implements OnInit {
  comptes: Compte[];

  constructor(private compteService: CompteService) {
  }

  ngOnInit(): void {
    this.getAllCompte();
  }

  getAllCompte(): void {

    this.compteService.getAllCompte().subscribe(data => {
      this.comptes = data;
    }, ex => console.log(ex));
  }



}
