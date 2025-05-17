import { Injectable } from '@nestjs/common';
import { NestPrismaClientService } from '@ph24/nest/prisma-client';

import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';
import { SkillDataDto } from './dtos/skill-data.dto';

@Injectable()
export class NestDataAccessSkillService {
  constructor(private prisma: NestPrismaClientService) { }

  create(createSkillDto: CreateSkillDto & { userId: string }): Promise<SkillDataDto> {
    return this.prisma.skill.create({
      data: createSkillDto,
      select: {
        id: true,
        content: true,
        state: true,
        userId: false,
      },
    });
  }

  findAll(userId: string): Promise<SkillDataDto[]> {
    return this.prisma.skill.findMany({
      where: { userId },
      select: {
        id: true,
        content: true,
        state: true,
        userId: false,
      },
    });
  }

  findOne(userId: string, id: string): Promise<SkillDataDto | null> {
    return this.prisma.skill.findUnique({
      where: { userId, id },
      select: {
        id: true,
        content: true,
        state: true,
        userId: false,
      },
    });
  }

  update(userId: string, id: string, updateSkillDto: UpdateSkillDto): Promise<SkillDataDto | null> {
    return this.prisma.skill.update({
      where: { userId, id },
      data: updateSkillDto,
      select: {
        id: true,
        content: true,
        state: true,
        userId: false,
      },
    });
  }

  delete(userId: string, id: string): Promise<SkillDataDto | null> {
    return this.prisma.skill.delete({
      where: { userId, id },
      select: {
        id: true,
        content: true,
        state: true,
        userId: false,
      },
    });
  }
}
