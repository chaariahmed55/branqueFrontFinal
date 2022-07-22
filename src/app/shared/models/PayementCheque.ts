import { Compte } from "./Compte";

export class PayementCheque{

    id?:number;
    montant?:number;
    compte?:Compte;
    dateCheque?:Date;
    image:string;
    confirm?:boolean;
    
    constructor(){
        this.id=0;
        this.dateCheque=new Date();
        this.image="";
        this.confirm=false;
        this.compte=new Compte();
        this.montant=0;
    }


}