import {Transaction} from "./transaction";
import {Devise} from "./devise";

export class Virement extends Transaction {

  dateVirement: Date;
  originDestination: Date;
  devise: Devise;
}
