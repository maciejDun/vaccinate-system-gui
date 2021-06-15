import {Facility} from "./facility";

export interface Term {
  id: number;
  vaccinationDate: string;
  facility: Facility;
}
