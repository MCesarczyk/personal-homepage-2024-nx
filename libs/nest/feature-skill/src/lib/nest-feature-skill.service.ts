import { BehaviorSubject } from 'rxjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ISkill } from '@ph24/shared/domain';
import { skillsFixture } from './fixtures/skills-fixture';

@Injectable()
export class NestFeatureSkillService {
  private skills$$ = new BehaviorSubject<ISkill[]>(skillsFixture);

  create(skill: ISkill): ISkill {
    this.skills$$.next([...this.skills$$.value, skill]);
    return skill;
  }

  getAll(): ISkill[] {
    return this.skills$$.value;
  }

  getOne(id: string): ISkill {
    const skill = this.skills$$.value.find((skill) => skill.id === id);
    if (!skill) {
      throw new NotFoundException(`Skill with id ${id} not found`);
    }
    return skill;
  }
}
