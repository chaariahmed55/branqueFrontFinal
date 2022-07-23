import {Credit} from "./credit";

export class Echeance {

  id: number;
  dateEcheance: Date;
  montant: number;
  paye: boolean;
  credit: Credit;
}
