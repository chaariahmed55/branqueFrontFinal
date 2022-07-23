import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subscription, timeout } from 'rxjs';
import { CarnetCheque } from '../shared/models/CarnetCheque';
import { Cheque } from '../shared/models/Cheque';
import { Compte } from '../shared/models/Compte';
import { PayementCheque } from '../shared/models/PayementCheque';
import { CarnetChequeService } from '../shared/Services/carnet-cheque.service';
import { ChequeService } from '../shared/Services/cheque.service';
import { CompteService } from '../shared/Services/compte.service';
import { PaymentchequeService } from '../shared/Services/paymentcheque.service';

@Component({
  selector: 'app-carnetcheque',
  templateUrl: './carnetcheque.component.html',
  styleUrls: ['./carnetcheque.component.css']
})
export class CarnetchequeComponent implements OnInit {

  compte: Compte = new Compte();
  carnetCheque: CarnetCheque = new CarnetCheque();
  carnetCheques: CarnetCheque[] = [];
  productIdFromRoute: any;
  cheque: Cheque = new Cheque();
  cheques: Cheque[] = [];
  cheques1:Cheque[]=[];
  baseStrign:String=' C:\\spring\\workspace\\ProjetBanque_BackEnd\\src\\main\\webapp\\Image\\';

  @Input()
  requiredFileType?: string;
  fileName = '';
  uploadProgress?: number;
  uploadSub?: Subscription;
  file?: File;
  listImages:any []=[]


  constructor(private http: HttpClient, private route: ActivatedRoute, private carnetchequeservice: CarnetChequeService, private compteservice: CompteService, private chequeservice: ChequeService, private payementchequeservice: PaymentchequeService) {
    const routeParams = this.route.snapshot.paramMap;
    this.productIdFromRoute = Number(routeParams.get('idcompte'));
    this.compteservice.getCompteById(this.productIdFromRoute).subscribe((data) => { this.compte = data; });
  }

  ngOnInit(): void {
    this.carnetCheques = [];
    this.getallcarnetCheque();
    this.getAllPaymentCheque();
  }

  getallcarnetCheque() {
    this.carnetchequeservice.getAllCarnet(this.productIdFromRoute).subscribe(data => { for (const iterator of data) { this.carnetCheques.push(iterator) } });
  }

  // public reload() {
  //   this.ngOnInit();
  // }
  public supprimerCarnet(carnet: CarnetCheque) {
    if (carnet?.id != null) {
      this.carnetchequeservice.supprimerCarnet(carnet?.id).subscribe(data => { this.ngOnInit() });

    }
  }

  public addCarnetCheque() {
    this.carnetchequeservice.addCarnetCheque(this.productIdFromRoute).subscribe(data => { this.ngOnInit() });
  }

  public getCarnetCheque(carnet: CarnetCheque) {
    this.cheques = []
    if (carnet.id != null) {
      this.carnetCheque = carnet;
      this.chequeservice.getChequeByCarnet(carnet.id).subscribe(data => {
        for (const iterator of data) {
          this.cheques.push(iterator);
        } console.log(data)
      })
    }
  }

  public getselectedcheque(cheque: Cheque) {
    this.cheque = cheque;
  }

  public validerpayement() {
    if (this.file && this.cheque.id!=null) {

      this.fileName = this.file.name;
      const formData = new FormData();
      formData.append("file", this.file);
      this.payementchequeservice.PaymentCheque(formData,this.cheque?.id).subscribe(data=>{console.log(data)});
      setTimeout(function(){/*location.reload();*/console.log("hello")}, 2000);
    }
    this.ngOnInit();
  }

  public onFileSelected(event: any) {
    this.file = event.target.files[0];

  }

public getAllPaymentCheque(){
  this.cheques1=[];
  this.chequeservice.getAllPaymentCheque(this.productIdFromRoute).subscribe(data=>{for (const iterator of data){
    // if (iterator.payementCheque?.image!=null) {
    //   //iterator.payementCheque.image = this.baseStrign+iterator.payementCheque.image;
    //   console.log(iterator.payementCheque.image)
    //   this.getimagewithurl(iterator.payementCheque.image);
    // }
    this.cheques1.push(iterator);
  }})
}

// getimagewithurl(urlimage:string){
// this.carnetchequeservice.getImageCheque(urlimage).subscribe(data=>{
//   this.listImages.push(data);
//   console.log(this.listImages)
// });
// }

}
