import { SkillState } from "../types/skill-state";

export interface ISkill {
  id: string;
  content: string;
  state: SkillState;
  userId: string;
}
