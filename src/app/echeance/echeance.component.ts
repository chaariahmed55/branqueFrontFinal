import { Component, OnInit } from '@angular/core';
import {Echeance} from "../shared/model/echeance";
import {EcheanceService} from "../shared/service/echeance.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-echeance',
  templateUrl: './echeance.component.html',
  styleUrls: ['./echeance.component.css']
})
export class EcheanceComponent implements OnInit {

  echeances: Echeance[];

  constructor(private echeanceService: EcheanceService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getEcheanceByCredit();
  }

  getEcheanceByCredit(): void {
    const creditId = this.activatedRoute.snapshot.paramMap.get('id');
    this.echeanceService.getByCredit(creditId).subscribe(data => {
      this.echeances = data;
    }, ex => console.log(ex));
  }


}
