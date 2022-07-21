import { Component, OnInit } from '@angular/core';
import {DemandeCompteService} from "../shared/service/demande-compte.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PieceJointeService} from "../shared/service/piece-jointe.service";
import {DemandeCompte} from "../shared/model/demande-compte";

@Component({
  selector: 'app-detail-demande-compte',
  templateUrl: './detail-demande-compte.component.html',
  styleUrls: ['./detail-demande-compte.component.css']
})
export class DetailDemandeCompteComponent implements OnInit {
  demandeId: any;
  demandeCompte = new DemandeCompte();
  pieces: any [];
  constructor(private demandeCompteService: DemandeCompteService,
              private activatedRoute: ActivatedRoute,
              private pieceJointeService: PieceJointeService) { }

  ngOnInit(): void {
    this.demandeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getById();
    this.getPieceByDemande();
  }

  getById(): void {
    this.demandeCompteService.getById(this.demandeId).subscribe(res => {
      this.demandeCompte = res;
    }, ex => console.log(ex));
  }


  getPieceByDemande(): void {
    this.pieceJointeService.findByDemande(this.demandeId).subscribe(res => {
      this.pieces = res;
    }, ex => console.log(ex));
  }
}
