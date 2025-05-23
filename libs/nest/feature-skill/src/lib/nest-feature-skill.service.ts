import { Injectable, NotFoundException } from '@nestjs/common';
import { NestDataAccessSkillService, UpdateSkillDto, CreateSkillDto } from '@ph24/nest/data-access-skill';
import { User } from '@ph24/nest/data-access-user';
import { SkillDataDto } from '@ph24/nest/data-access-skill';

@Injectable()
export class NestFeatureSkillService {
  constructor(private skillRepository: NestDataAccessSkillService) { }

  async create(user: User, data: CreateSkillDto): Promise<SkillDataDto> {
    return await this.skillRepository.create({ ...data, userId: user.id });
  }

  async getAll(userId: string): Promise<SkillDataDto[]> {
    return await this.skillRepository.findAll(userId);
  }

  async getOne(userId: string, id: string): Promise<SkillDataDto | null> {
    const skill = await this.skillRepository.findOne(userId, id);
    if (!skill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    return skill;
  }

  async updateOne(userId: string, id: string, data: UpdateSkillDto): Promise<SkillDataDto | null> {
    const awaitedSkill = await this.getOne(userId, id);
    if (!awaitedSkill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }

    return await this.skillRepository.update(userId, id, data);
  }

  async deleteOne(userId: string, id: string): Promise<SkillDataDto | null> {
    const awaitedSkill = await this.getOne(userId, id);
    if (!awaitedSkill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }

    return await this.skillRepository.delete(userId, awaitedSkill.id);
  }
}
