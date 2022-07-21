import {DemandeCompte} from "./demande-compte";

export class Utilisateur {
    id: number;
    password: string;
    active: boolean;
    blackListed: boolean;
    cin: string;
    nom: string;
    prenom: string;
    email: string;
    phone: number;
    image_link: string;
    adresse: string;
    date_naissance: Date;
    salaire: number;
    contrat: string;
    signature: string;
    role: string;


}
