import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto, NestDataAccessProjectService, Project, UpdateProjectDto } from '@ph24/nest/data-access-project';

@Injectable()
export class NestFeatureProjectService {
  constructor(private projectRepository: NestDataAccessProjectService) { }

  async create(data: CreateProjectDto): Promise<Project> {
    return await this.projectRepository.create(data);
  }

  async getAll(): Promise<Project[]> {
    return await this.projectRepository.findAll();
  }

  async getOne(id: string): Promise<Project | null> {
    const project = await this.projectRepository.findOne(id);
    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return project;
  }

  async updateOne(id: string, data: UpdateProjectDto): Promise<Project | null> {
    const awaitedProject = await this.getOne(id);
    if (!awaitedProject) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return await this.projectRepository.update(id, data);
  }

  async deleteOne(id: string) {
    const awaitedProject = await this.getOne(id);
    if (!awaitedProject) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return await this.projectRepository.remove(id);
  }
}
