import { Component, OnInit } from '@angular/core';
import {DemandeCompte} from "../shared/model/demande-compte";
import {DemandeCompteService} from "../shared/service/demande-compte.service";

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
  demandeComptes: DemandeCompte[];
  constructor(private demandeCompteService: DemandeCompteService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.demandeCompteService.getAll().subscribe(data => {
      this.demandeComptes = data;
    }, ex => {
      console.log(ex);
    });
  }

  accepter(id: number) {
    this.demandeCompteService.accept(id).subscribe(res => {
      this.getAll();
    }, ex=> {
      console.log(ex);
    });
  }

  refuser(id: number) {
    this.demandeCompteService.refuse(id).subscribe(res => {
      this.getAll();
    }, ex=> {
      console.log(ex);
    });
  }
}
