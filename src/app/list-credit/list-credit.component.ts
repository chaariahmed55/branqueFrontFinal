import { Component, OnInit } from '@angular/core';
import {Credit} from "../shared/model/credit";
import {CreditService} from "../shared/service/credit.service";

@Component({
  selector: 'app-list-credit',
  templateUrl: './list-credit.component.html',
  styleUrls: ['./list-credit.component.css']
})
export class ListCreditComponent implements OnInit {


  credits: Credit[];
  errorMessage: any;
  constructor(private creditService: CreditService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {

    this.creditService.getAll().subscribe(data => {
      this.credits = data;
    }, ex => console.log(ex));
  }
}
