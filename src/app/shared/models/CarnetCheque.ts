import { Compte } from "./Compte";

export class CarnetCheque{

    id?:number;
    debutChequiet?:number;
    fingChequiet?:number;
    dateExpiration?:Date;
    etat?:boolean;
    compte?:Compte;
    
    constructor(){
        this.id=0;
        this.debutChequiet=0;
        this.fingChequiet=0;
        this.dateExpiration=new Date();
        this.etat=false;
        this.compte=new Compte();
    }
}