import {VaccinationFacility} from "./vaccinationFacility";

export interface VaccinationTerm {
  id: number;
  vaccinationDate: Date;
  creationDate: Date;
  vaccinationFacility: VaccinationFacility;
}
