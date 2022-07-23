import { Component, OnInit } from '@angular/core';
import {Credit} from "../shared/model/credit";
import {CreditService} from "../shared/service/credit.service";

@Component({
  selector: 'app-mes-credit',
  templateUrl: './mes-credit.component.html',
  styleUrls: ['./mes-credit.component.css']
})
export class MesCreditComponent implements OnInit {

  credits: Credit[];
  errorMessage: any;
  constructor(private creditService: CreditService) {
  }

  ngOnInit(): void {
    this.getCreditByUser();
  }

  getCreditByUser(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.creditService.getByUser(user.id).subscribe(data => {
      this.credits = data;
    }, ex => console.log(ex));
  }



}
