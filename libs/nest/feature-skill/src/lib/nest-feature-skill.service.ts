import { Injectable, NotFoundException } from '@nestjs/common';
import { NestDataAccessSkillService, Skill, UpdateSkillDto, CreateSkillDto } from '@ph24/nest/data-access-skill';

@Injectable()
export class NestFeatureSkillService {
  constructor(private skillRepository: NestDataAccessSkillService) { }

  async create(data: CreateSkillDto): Promise<Skill> {
    return await this.skillRepository.create(data);
  }

  async getAll(): Promise<Skill[]> {
    return await this.skillRepository.findAll();
  }

  async getOne(id: string): Promise<Skill | null> {
    const skill = await this.skillRepository.findOne(id);
    if (!skill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    return skill;
  }

  async updateOne(id: string, data: UpdateSkillDto): Promise<Skill | null> {
    const awaitedSkill = await this.getOne(id);
    if (!awaitedSkill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }

    return await this.skillRepository.update(id, data);
  }

  async deleteOne(id: string): Promise<Skill | null> {
    const awaitedSkill = await this.getOne(id);
    if (!awaitedSkill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }

    return await this.skillRepository.delete(awaitedSkill.id);
  }
}
