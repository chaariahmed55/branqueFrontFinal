import {Component, OnInit} from '@angular/core';


import {ActivatedRoute} from "@angular/router";
import {PieceJointeService} from "../shared/service/piece-jointe.service";
import {DemandeCredit} from "../shared/model/demande-credit";
import {DemandeCreditService} from "../shared/service/demande-credit.service";
import {PieceJointeCreditService} from "../shared/service/piece-jointe-credit.service";

@Component({
  selector: 'app-detail-demande-credit',
  templateUrl: './detail-demande-credit.component.html',
  styleUrls: ['./detail-demande-credit.component.css']
})
export class DetailDemandeCreditComponent implements OnInit {

  demandeId: any;
  demandeCredit = new DemandeCredit();
  pieces: any [];

  constructor(private demandeCreditService: DemandeCreditService,
              private activatedRoute: ActivatedRoute,
              private pieceJointeService: PieceJointeCreditService) {
  }

  ngOnInit(): void {
    this.demandeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getById();
    this.getPieceByDemande();
  }

  getById(): void {
    this.demandeCreditService.getById(this.demandeId).subscribe(res => {
      this.demandeCredit = res;
    }, ex => console.log(ex));
  }


  getPieceByDemande(): void {
    this.pieceJointeService.findByDemande(this.demandeId).subscribe(res => {
      this.pieces = res;
    }, ex => console.log(ex));
  }

  selectFile(event: any) {
    const theFileList = event.target.files;
    const files = Array.from(theFileList);
    this.pieceJointeService.uploadFile(files, this.demandeId).subscribe(res => {
        this.getPieceByDemande();
    }, ex => {

      console.log(ex);
    });


  }
}
