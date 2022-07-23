import {DemandeCredit} from "./demande-credit";

export class Credit {

  id: number;
  duree: number;
  dateCredit: Date;
  montant: number;
  totalCredit: number;
  montantRestant: number;
  demandeCredit: DemandeCredit
  ;
}
