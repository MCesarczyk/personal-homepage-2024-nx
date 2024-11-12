import { IUser } from '@ph24/shared/domain';
import {
  randJobDescriptor,
  randPassword,
  randRole,
  randUser,
} from '@ngneat/falso';

export const createMockUser = (data?: Partial<IUser>): IUser => {
  const { id, email, username } = randUser();
  const occupation = randRole();
  const introduction = randJobDescriptor();
  const password = randPassword();
  return {
    id,
    email,
    password,
    name: username,
    occupation,
    introduction,
    ...data,
  };
};
