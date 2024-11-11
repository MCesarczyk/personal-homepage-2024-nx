import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, NestDataAccessUserService, UpdateUserDto, User } from '@ph24/nest/data-access-user';

@Injectable()
export class NestFeatureUserService {
  constructor(private userRepository: NestDataAccessUserService) { }

  async create(data: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(data);
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async getOne(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async updateOne(id: string, data: UpdateUserDto): Promise<User | null> {
    const awaitedUser = await this.getOne(id);
    if (!awaitedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return await this.userRepository.update(id, data);
  }

  async deleteOne(id: string): Promise<User | null> {
    const awaitedUser = await this.getOne(id);
    if (!awaitedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return await this.userRepository.delete(id);
  }
}
