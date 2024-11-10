import { Test } from '@nestjs/testing';
import { NestFeatureSkillController } from './nest-feature-skill.controller';
import { NestFeatureSkillService } from './nest-feature-skill.service';

describe('NestFeatureSkillController', () => {
  let controller: NestFeatureSkillController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NestFeatureSkillService],
      controllers: [NestFeatureSkillController],
    }).compile();

    controller = module.get(NestFeatureSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
