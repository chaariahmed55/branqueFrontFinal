import { CarnetCheque } from "./CarnetCheque";
import { PayementCheque } from "./PayementCheque";

export class Cheque{
    id?:number;
    numerocheque?:number;
    carnetCheque?:CarnetCheque;
    payementCheque?:PayementCheque;

constructor(){
    this.id=0;
    this.numerocheque=0;
    this.carnetCheque=new CarnetCheque();
    this.payementCheque=new PayementCheque();
}

}