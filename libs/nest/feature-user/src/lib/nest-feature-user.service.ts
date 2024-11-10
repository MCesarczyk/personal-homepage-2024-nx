import { Injectable, NotFoundException } from '@nestjs/common';
import { NestDataAccessUserService } from '@ph24/nest/data-access-user';
import { IUser } from '@ph24/shared/domain';

@Injectable()
export class NestFeatureUserService {
  constructor(private userRepository: NestDataAccessUserService) { }

  async create(data: Omit<IUser, 'id'>): Promise<IUser> {
    return await this.userRepository.createUser(data);
  }

  async getAll(): Promise<IUser[]> {
    return await this.userRepository.findAll();
  }

  async getOne(id: string): Promise<IUser | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async updateOne(id: string, data: Partial<IUser>): Promise<IUser | null> {
    const awaitedUser = await this.getOne(id);
    if (!awaitedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return await this.userRepository.update(id, data);
  }

  async deleteOne(id: string): Promise<IUser | null> {
    const awaitedUser = await this.getOne(id);
    if (!awaitedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return await this.userRepository.delete(id);
  }
}
