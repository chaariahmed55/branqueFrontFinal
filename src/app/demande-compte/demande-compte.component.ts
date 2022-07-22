import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../shared/model/utilisateur";
import {UtilisateurService} from "../shared/service/utilisateur.service";
import {DemandeCompte} from "../shared/model/demande-compte";
import {PieceJointeService} from "../shared/service/piece-jointe.service";
import {Router} from "@angular/router";
import {DemandeCompteService} from "../shared/service/demande-compte.service";

@Component({
  selector: 'app-demande-compte',
  templateUrl: './demande-compte.component.html',
  styleUrls: ['./demande-compte.component.css']
})
export class DemandeCompteComponent implements OnInit {
  user = new Utilisateur();
  errorMessage: any;
  typeCompte: string;
  file1: File;
  file2: File;
  file3: File;
  file4: File;
  files: File[] = [];
  constructor(private utilisateurService: UtilisateurService,
              private demandeCompteService: DemandeCompteService,
              private router: Router,
              private pieceJointeService: PieceJointeService) {
  }

  ngOnInit(): void {
    this.typeCompte= 'courant';
  }

  demanderCompte(): void {
    const demandeCompte = new DemandeCompte();
    demandeCompte.typeCompte = this.typeCompte;
    demandeCompte.utilisateur = this.user;
    this.demandeCompteService.demandeCompte(demandeCompte).subscribe(res => {

        if(this.files.length>0) {
          this.uploadFile(res.id);
        } else {
          this.router.navigate(['']);
        }
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }

  selectFile1(event: any) {
    this.file1 = event.target.files[0];
    this.files.push(this.file1);
  }

  selectFile2(event: any) {
    this.file2 = event.target.files[0];
    this.files.push(this.file2);
    console.log(this.files);
  }
  selectFile3(event: any) {
    this.file3 = event.target.files[0];
    this.files.push(this.file3);
    console.log(this.files);
  }

  selectFile4(event: any) {
    this.file4 = event.target.files[0];
    this.files.push(this.file4);
    console.log(this.files);
  }



  uploadFile(demandeId: number): void {

    this.pieceJointeService.uploadFile(this.files, demandeId).subscribe( res => {
      this.router.navigate(['']);
    }, ex => {
      this.errorMessage = ex.error;
      console.log(ex);
    });
  }
}
