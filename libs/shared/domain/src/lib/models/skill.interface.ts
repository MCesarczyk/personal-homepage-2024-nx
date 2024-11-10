import { SkillState } from "libs/shared/domain/src/lib/types/skill-state";

export interface ISkill {
  id: string;
  content: string;
  state: SkillState;
  userId: string;
}
