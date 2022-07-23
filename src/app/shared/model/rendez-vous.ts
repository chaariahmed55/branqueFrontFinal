import {Utilisateur} from "./utilisateur";

export class RendezVous {

  id: number;
  dateCreation: Date;
  dateRendezVous: Date;
  sujet: string;
  description: string;
  status: string;
  utilisateur: Utilisateur;
  agent: Utilisateur;
}
