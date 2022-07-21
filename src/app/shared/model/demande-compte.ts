import {Utilisateur} from "./utilisateur";

export class DemandeCompte {
  id: number;
  dateDemande: Date;
  etat: string;
  typeCompte: string;
  utilisateur: Utilisateur;
}
