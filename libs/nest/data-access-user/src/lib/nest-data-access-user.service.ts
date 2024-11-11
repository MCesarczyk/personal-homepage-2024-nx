import { Injectable } from '@nestjs/common';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class NestDataAccessUserService {
  constructor(
    private prisma: NestPrismaClientService,
  ) { }

  createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update(id: string, data: UpdateUserDto): Promise<User | null> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  delete(id: string): Promise<User | null> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

