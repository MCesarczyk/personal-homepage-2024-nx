import { Injectable } from '@nestjs/common';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class NestDataAccessProjectService {
  constructor(private prisma: NestPrismaClientService) { }

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.prisma.project.create({
      data: createProjectDto,
    });
  }

  findAll(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  findOne(id: string): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: string): Promise<Project> {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}

