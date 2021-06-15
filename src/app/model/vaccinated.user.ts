import {Facility} from "./facility";
import {Term} from "./term";
import {User} from "./user";

export interface VaccinatedUser {
id: number;
user: User;
term: Term;
}
