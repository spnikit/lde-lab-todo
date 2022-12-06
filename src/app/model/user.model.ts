export interface IUser {
  email: string;
  roles: Role[];
}

interface Role {
  id: number;
  name: string;
}
