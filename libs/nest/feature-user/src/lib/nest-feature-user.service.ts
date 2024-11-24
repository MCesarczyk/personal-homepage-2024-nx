import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, NestDataAccessUserService, UpdateUserDto, User, UserResponseDto } from '@ph24/nest/data-access-user';

@Injectable()
export class NestFeatureUserService {
  constructor(private userRepository: NestDataAccessUserService) { }

  async create(user: CreateUserDto): Promise<UserResponseDto> {
    const duplicatedUser = await this.userRepository.findOneByEmail(user.email);
    if (duplicatedUser) {
      throw new ConflictException(`User with email ${user.email} already exists`);
    }

    const { password, ...userData } = user;
    user.password = await bcrypt.hash(password, 10);
    const newUser = await this.userRepository.createUser({ ...userData, password: user.password });
    return newUser;
  }

  async getAll(): Promise<UserResponseDto[]> {
    return await this.userRepository.findAll();
  }

  async getOneById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async getOneByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  async updateOne(id: string, data: UpdateUserDto): Promise<UserResponseDto | null> {
    const awaitedUser = await this.getOneById(id);
    if (!awaitedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return await this.userRepository.update(id, data);
  }

  async deleteOne(id: string): Promise<UserResponseDto | null> {
    const awaitedUser = await this.getOneById(id);
    if (!awaitedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return await this.userRepository.delete(id);
  }
}
