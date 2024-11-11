export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  occupation: string;
  introduction: string;
}

export type IPublicUserData = Omit<IUser, 'password'>;
