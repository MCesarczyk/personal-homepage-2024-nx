import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto, NestDataAccessProjectService, UpdateProjectDto } from '@ph24/nest/data-access-project';
import { User } from '@ph24/nest/data-access-user';
import { ProjectDataDto } from '@ph24/nest/data-access-project';

@Injectable()
export class NestFeatureProjectService {
  constructor(private projectRepository: NestDataAccessProjectService) { }

  async create(user: User, data: CreateProjectDto): Promise<ProjectDataDto> {
    return await this.projectRepository.create({ ...data, userId: user.id });
  }

  async getAll(userId: string): Promise<ProjectDataDto[]> {
    return await this.projectRepository.findAll(userId);
  }

  async getOne(userId: string, id: string): Promise<ProjectDataDto | null> {
    const project = await this.projectRepository.findOne(userId, id);
    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return project;
  }

  async updateOne(userId: string, id: string, data: UpdateProjectDto): Promise<ProjectDataDto | null> {
    const awaitedProject = await this.getOne(userId, id);
    if (!awaitedProject) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return await this.projectRepository.update(userId, id, data);
  }

  async deleteOne(userId: string, id: string) {
    const awaitedProject = await this.getOne(userId, id);
    if (!awaitedProject) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return await this.projectRepository.remove(userId, id);
  }
}
