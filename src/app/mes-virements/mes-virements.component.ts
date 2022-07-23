import { Component, OnInit } from '@angular/core';
import {Virement} from "../shared/model/virement";
import {Devise} from "../shared/model/devise";
import {VirementService} from "../shared/service/virement.service";
import {DeviseService} from "../shared/service/devise.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mes-virements',
  templateUrl: './mes-virements.component.html',
  styleUrls: ['./mes-virements.component.css']
})
export class MesVirementsComponent implements OnInit {


  virements: Virement[];




  constructor(private virementService: VirementService) {
  }

  ngOnInit(): void {

this.getAllVirement();

  }

  getAllVirement(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.virementService.getByUtilisateur(user.id).subscribe(data => {
      this.virements = data;
      this.virements = this.virements.filter(t => t.sens === 'DEBIT');
    }, error => console.log(error));
  }



}
