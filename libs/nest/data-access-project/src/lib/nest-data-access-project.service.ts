import { Injectable } from '@nestjs/common';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';

import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { ProjectDataDto } from './dtos/project-data.dto';

@Injectable()
export class NestDataAccessProjectService {
  constructor(private prisma: NestPrismaClientService) { }

  create(createProjectDto: CreateProjectDto & { userId: string }): Promise<ProjectDataDto> {
    return this.prisma.project.create({
      data: createProjectDto,
      omit: {
        userId: true,
      }
    });
  }

  findAll(userId: string): Promise<ProjectDataDto[]> {
    return this.prisma.project.findMany({
      where: {
        userId,
      },
      omit: {
        userId: true,
      }
    });
  }

  findOne(userId: string, id: string): Promise<ProjectDataDto | null> {
    return this.prisma.project.findUnique({
      where: { userId, id },
      omit: {
        userId: true,
      }
    });
  }

  update(userId: string, id: string, updateProjectDto: UpdateProjectDto): Promise<ProjectDataDto> {
    return this.prisma.project.update({
      where: { userId, id },
      data: updateProjectDto,
      omit: {
        userId: true,
      }
    });
  }

  remove(userId: string, id: string): Promise<ProjectDataDto> {
    return this.prisma.project.delete({
      where: { userId, id },
      omit: {
        userId: true,
      }
    });
  }
}

