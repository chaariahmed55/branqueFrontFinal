import {Compte} from "./compte";

export class DemandeCredit {
  id: number;
  dateCreation: Date;
  duree: number;
  montant: number;
  apport: number;
  etatDemande: string;
  typeCredit: string;
  compte: Compte;
}
