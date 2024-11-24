import { Injectable } from '@nestjs/common';
import { Skill } from './entities/skill.entity';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';

@Injectable()
export class NestDataAccessSkillService {
  constructor(private prisma: NestPrismaClientService) { }

  create(createSkillDto: CreateSkillDto & { userId: string }): Promise<Skill> {
    return this.prisma.skill.create({
      data: createSkillDto,
    });
  }

  findAll(userId: string): Promise<Skill[]> {
    return this.prisma.skill.findMany({
      where: { userId },
    });
  }

  findOne(userId: string, id: string): Promise<Skill | null> {
    return this.prisma.skill.findUnique({
      where: { userId, id },
    });
  }

  update(userId: string, id: string, updateSkillDto: UpdateSkillDto): Promise<Skill | null> {
    return this.prisma.skill.update({
      where: { userId, id },
      data: updateSkillDto,
    });
  }

  delete(userId: string, id: string): Promise<Skill | null> {
    return this.prisma.skill.delete({
      where: { userId, id },
    });
  }
}
