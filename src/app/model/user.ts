import {Roles} from "./roles";

export interface User {
  id: number;
  userName: string;
  roles: Roles;
}
