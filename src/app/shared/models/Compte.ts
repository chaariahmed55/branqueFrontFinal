import { Utilisateur } from "./Utilisateur";

export class Compte{

    id?:number;
    rib?:string;
    dateOuverture?:Date;
    typeCompte?:string;
    utilisateur?:Utilisateur;
    
    constructor(){
        this.id=0;
        this.rib='';
        this.dateOuverture=new Date();
        this.typeCompte='';
        this.utilisateur=new Utilisateur();

    }
    
}