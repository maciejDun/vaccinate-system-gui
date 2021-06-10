import {Facility} from "./facility";
import {CustomDate} from "./custom.date";

export interface Term {
  id: number;
  vaccinationDate: string;
  facility: Facility;
}
