import {Facility} from "./facility";

export interface Term {
  id: number;
  vaccinationDate: Date;
  creationDate: Date;
  facility: Facility;
}
