import { Injectable } from '@nestjs/common';
import { Skill } from './entities/skill.entity';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';

@Injectable()
export class NestDataAccessSkillService {
  constructor(private prisma: NestPrismaClientService) { }

  create(createSkillDto: CreateSkillDto): Promise<Skill> {
    return this.prisma.skill.create({
      data: createSkillDto,
    });
  }

  findAll(): Promise<Skill[]> {
    return this.prisma.skill.findMany();
  }

  findOne(id: string): Promise<Skill | null> {
    return this.prisma.skill.findUnique({
      where: { id },
    });
  }

  update(id: string, updateSkillDto: UpdateSkillDto): Promise<Skill | null> {
    return this.prisma.skill.update({
      where: { id },
      data: updateSkillDto,
    });
  }

  delete(id: string): Promise<Skill | null> {
    return this.prisma.skill.delete({
      where: { id },
    });
  }
}
