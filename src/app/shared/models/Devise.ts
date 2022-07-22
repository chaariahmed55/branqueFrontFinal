export class Devise{
    
    id?:number;
    devise?:string;
    pays?:string;
    code?:string;
    achat?:number;
    vente?:number;
    unite?:number;

    constructor(){
        this.id=0;
        this.devise="";
        this.pays="";
        this.code="";
        this.achat=0;
        this.vente=0;
        this.unite=0;
    }
}