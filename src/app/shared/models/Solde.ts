import { Compte } from "./Compte";
import { Devise } from "./Devise";
import { Utilisateur } from "./Utilisateur";

export class Solde{

    id?:number;
    montant?:number;
    compte?:Compte;
    devise?:Devise;

    constructor(){
        this.id=0;
        this.montant=0;
        this.compte=new Compte();
        this.devise=new Devise();
    }

}