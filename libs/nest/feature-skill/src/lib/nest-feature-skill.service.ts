import { Injectable, NotFoundException } from '@nestjs/common';
import { ISkill } from '@ph24/shared/domain';
import { NestDataAccessSkillService } from '@ph24/nest/data-access-skill';

@Injectable()
export class NestFeatureSkillService {
  constructor(private skillRepository: NestDataAccessSkillService) { }

  async create(data: Pick<ISkill, 'content' | 'state' | 'userId'>): Promise<ISkill> {
    return await this.skillRepository.create(data);
  }

  async getAll(): Promise<ISkill[]> {
    return await this.skillRepository.findAll();
  }

  async getOne(id: string): Promise<ISkill | null> {
    const skill = await this.skillRepository.findOne(id);
    if (!skill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    return skill;
  }

  async updateOne(id: string, data: Partial<ISkill>): Promise<ISkill | null> {
    const awaitedSkill = await this.getOne(id);
    if (!awaitedSkill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }

    return await this.skillRepository.update(id, data);
  }

  async deleteOne(id: string): Promise<ISkill | null> {
    const awaitedSkill = await this.getOne(id);
    if (!awaitedSkill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }

    return await this.skillRepository.delete(awaitedSkill.id);
  }
}
