import {Component, OnInit} from '@angular/core';
import {Virement} from "../shared/model/virement";
import {VirementService} from "../shared/service/virement.service";
import {ActivatedRoute} from "@angular/router";
import {DeviseService} from "../shared/service/devise.service";
import {Devise} from "../shared/model/devise";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  compteId: any;
  virements: Virement[];
  devises: Devise[];
  selectedDevise: Devise = new Devise();
  totalDebit = 0;
  totalCredit = 0;

  constructor(private virementService: VirementService,
              private deviseService: DeviseService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.compteId = this.activatedRoute.snapshot.paramMap.get('id');

    this.getAllDevise();
  }

  getAllVirement(): void {
    this.virementService.getByCompteAndDevise(this.compteId, this.selectedDevise.id).subscribe(data => {
      this.virements = data;


      this.totalDebit = this.virements.filter(t => t.sens === 'DEBIT')
        .map(t => t.montant).reduce((a, b) => a + b, 0);

      this.totalCredit = this.virements.filter(t => t.sens === 'CREDIT')
        .map(t => t.montant).reduce((a, b) => a + b, 0);
    }, error => console.log(error));
  }

  getAllDevise(): void {
    this.deviseService.getAllDevise().subscribe(data => {
      this.devises = data;
      this.selectedDevise = data[0];
      this.getAllVirement();
    }, error => console.log(error));
  }

  changeDevise() {
    this.getAllVirement();
  }
}
