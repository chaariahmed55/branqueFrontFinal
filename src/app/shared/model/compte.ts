
import {Utilisateur} from "./utilisateur";

export class Compte {

  id: number;
  rib: string;
  dateOuverture: Date;
  typeCompte: string;

  utilisateur: Utilisateur;

}
