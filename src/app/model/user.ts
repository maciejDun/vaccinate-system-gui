import {Role} from "./role";

export interface User {
  id: number;
  userName: string;
  roles: Array<Role>;
}
