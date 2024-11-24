import { Injectable } from '@nestjs/common';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';
import { User } from './entities/user.entity';

@Injectable()
export class NestDataAccessUserService {
  constructor(
    private prisma: NestPrismaClientService,
  ) { }

  createUser(data: CreateUserDto): Promise<UserResponseDto> {
    return this.prisma.user.create({
      data,
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
        occupation: true,
        introduction: true,
      }
    });
  }

  findAll(): Promise<UserResponseDto[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
        occupation: true,
        introduction: true,
      }
    });
  }

  findOneById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        occupation: true,
        introduction: true,
        refreshToken: true,
      }
    });
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  update(id: string, data: UpdateUserDto): Promise<UserResponseDto | null> {
    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
        occupation: true,
        introduction: true,
      }
    });
  }

  delete(id: string): Promise<UserResponseDto | null> {
    return this.prisma.user.delete({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        password: false,
        occupation: true,
        introduction: true,
      }
    });
  }
}

