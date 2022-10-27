export interface IUser {
  id?: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  isDeleted?: number;
  atCreated?: Date;
  atUpdated?: Date;
}
