import { Injectable } from '@nestjs/common';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';
import { CreateImageDto } from './dtos/create-image.dto';
import { UpdateImageDto } from './dtos/update-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class NestDataAccessImageService {
  constructor(private readonly prisma: NestPrismaClientService) { }

  create(data: CreateImageDto): Promise<Image> {
    return this.prisma.projectImage.create({
      data,
    });
  }

  findAll(): Promise<Image[]> {
    return this.prisma.projectImage.findMany();
  }

  findOne(id: string): Promise<Image | null> {
    return this.prisma.projectImage.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    data: UpdateImageDto,
  ): Promise<Image> {
    return this.prisma.projectImage.update({
      where: { id },
      data,
    });
  }

  remove(id: string): Promise<Image> {
    return this.prisma.projectImage.delete({
      where: { id },
    });
  }
}

