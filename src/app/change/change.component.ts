import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compte } from '../shared/models/Compte';
import { Solde } from '../shared/models/Solde';
import { CompteService } from '../shared/Services/compte.service';
import { SoldeService } from '../shared/Services/solde.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  compte: Compte = new Compte();
  soldes: Solde[] = [];
  productIdFromRoute: any;

  constructor(private route: ActivatedRoute, private compteservice: CompteService, private soldeservice: SoldeService) {
    const routeParams = this.route.snapshot.paramMap;
    this.productIdFromRoute = Number(routeParams.get('idcompte'));
    this.compteservice.getCompteById(this.productIdFromRoute).subscribe((data) => { this.compte = data; });
  }

  ngOnInit(): void {
    this.soldes=[]
    this.soldeservice.getSoldeByCompte(this.productIdFromRoute).subscribe(data => {
      for (const iterator of data) { this.soldes.push(iterator);}
    });
  }

  deleteSolde(solde:Solde){
    if (solde?.id!=null) {
      this.soldeservice.deleteSolde(solde?.id).subscribe(data=>this.ngOnInit());
    }
  }

}
