import {Compte} from "./compte";

export class Transaction {

  id: number;
  montant: number;
  sens: string;
  compte: Compte;
}
