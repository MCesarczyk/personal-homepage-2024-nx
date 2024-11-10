import { Injectable, NotFoundException } from '@nestjs/common';
import { NestDataAccessProjectService } from '@ph24/nest/data-access-project';
import { IProject } from '@ph24/shared/domain';

@Injectable()
export class NestFeatureProjectService {
  constructor(private projectRepository: NestDataAccessProjectService) { }

  async create(data: Omit<IProject, 'id'>): Promise<IProject> {
    return await this.projectRepository.create(data);
  }

  async getAll(): Promise<IProject[]> {
    return await this.projectRepository.findAll();
  }

  async getOne(id: string): Promise<IProject | null> {
    const project = await this.projectRepository.findOne(id);
    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return project;
  }

  async updateOne(id: string, data: Partial<IProject>): Promise<IProject | null> {
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
